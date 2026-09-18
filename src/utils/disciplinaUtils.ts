/**
 * Utilitários de padronização e canonicidade de disciplinas do Edital PMBA
 */

export const DISCIPLINAS_PMBA_OFICIAIS = [
  'Direito Constitucional',
  'Noções de Direito Penal',
  'Noções de Direito Penal Militar',
  'Noções de Direito Processual Penal',
  'Direito Administrativo',
  'Direitos Humanos',
  'Promoção da Igualdade Racial e de Gênero',
  'História da Bahia',
  'Geografia da Bahia',
  'Língua Portuguesa',
  'Raciocínio Lógico',
  'Informática',
  'Atualidades',
] as const;

export function canonicalizeDisciplina(raw?: string): string {
  const s = (raw || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

  if (!s) return 'Direito Constitucional';
  if (
    s.includes('todas') ||
    s.includes('misto') ||
    s.includes('aleat') ||
    s.includes('geral') ||
    s.includes('simulado')
  ) {
    return 'Todas as Matérias (Misto Aleatório)';
  }
  if (s.includes('constitucional')) {
    return 'Direito Constitucional';
  }
  if (s.includes('processual penal')) {
    return 'Noções de Direito Processual Penal';
  }
  if (s.includes('penal militar')) {
    return 'Noções de Direito Penal Militar';
  }
  if (s.includes('penal')) {
    return 'Noções de Direito Penal';
  }
  if (s.includes('administrativo')) {
    return 'Direito Administrativo';
  }
  if (s.includes('humano')) {
    return 'Direitos Humanos';
  }
  if (s.includes('racial') || s.includes('genero') || s.includes('igualdade')) {
    return 'Promoção da Igualdade Racial e de Gênero';
  }
  if (s.includes('historia')) {
    return 'História da Bahia';
  }
  if (s.includes('geografia')) {
    return 'Geografia da Bahia';
  }
  if (s.includes('portugues') || s.includes('lingua')) {
    return 'Língua Portuguesa';
  }
  if (s.includes('raciocinio') || s.includes('logica') || s.includes('matematica')) {
    return 'Raciocínio Lógico';
  }
  if (s.includes('informatica')) {
    return 'Informática';
  }
  if (s.includes('atualidade')) {
    return 'Atualidades';
  }
  return raw?.trim() || 'Direito Constitucional';
}

export function isTodasMateriasFilter(disc?: string): boolean {
  if (!disc) return false;
  const lower = disc.toLowerCase();
  if (
    lower.includes('todas') ||
    lower.includes('misto') ||
    lower.includes('aleat') ||
    lower.includes('geral')
  ) {
    return true;
  }
  return canonicalizeDisciplina(disc) === 'Todas as Matérias (Misto Aleatório)';
}
