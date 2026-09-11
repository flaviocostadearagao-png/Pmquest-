import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { db, ensureAuthUser } from './firebase';
import { RespostaUsuario, TemaApp } from '../types';

export interface UserStudyData {
  historicoRespostas: Record<string, RespostaUsuario>;
  topicosLidos: Record<string, boolean>;
  theme?: TemaApp;
  lastUpdated: string;
}

/**
 * Loads user study data from Firestore for the current authenticated user
 */
export async function loadUserDataFromFirestore(): Promise<UserStudyData | null> {
  try {
    const user = await ensureAuthUser();
    const userDocRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        historicoRespostas: (data.historicoRespostas as Record<string, RespostaUsuario>) || {},
        topicosLidos: (data.topicosLidos as Record<string, boolean>) || {},
        theme: data.theme === 'light' || data.theme === 'dark' ? data.theme : undefined,
        lastUpdated: data.lastUpdated || new Date().toISOString(),
      };
    }
    return null;
  } catch (error) {
    console.warn('Erro ao carregar dados do Firestore (usando fallback local):', error);
    return null;
  }
}

/**
 * Saves user progress to Firestore in background (debounced / on-change)
 */
export async function saveUserDataToFirestore(
  historicoRespostas: Record<string, RespostaUsuario>,
  topicosLidos: Record<string, boolean>,
  theme?: TemaApp
): Promise<boolean> {
  try {
    const user = await ensureAuthUser();
    const userDocRef = doc(db, 'users', user.uid);

    const payload: Record<string, any> = {
      historicoRespostas,
      topicosLidos,
      lastUpdated: new Date().toISOString(),
      totalRespondidas: Object.keys(historicoRespostas).length,
      totalAcertos: (Object.values(historicoRespostas) as RespostaUsuario[]).filter((r) => r.acertou).length,
      totalTopicosEstudados: Object.values(topicosLidos).filter(Boolean).length,
    };

    if (theme) {
      payload.theme = theme;
    }

    await setDoc(userDocRef, payload, { merge: true });
    return true;
  } catch (error) {
    console.warn('Erro ao salvar no Firestore:', error);
    return false;
  }
}

/**
 * Clears user study data from Firestore
 */
export async function resetUserDataInFirestore(): Promise<void> {
  try {
    const user = await ensureAuthUser();
    const userDocRef = doc(db, 'users', user.uid);
    await deleteDoc(userDocRef);
  } catch (error) {
    console.warn('Erro ao resetar dados no Firestore:', error);
  }
}
