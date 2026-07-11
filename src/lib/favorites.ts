const STORAGE_KEY = 'eca_favorite_courses';

export function getFavorites(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveFavorites(ids: string[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

export function isFavorite(courseId: string): boolean {
  return getFavorites().includes(courseId);
}

export function toggleFavorite(courseId: string): string[] {
  const current = getFavorites();
  const next = current.includes(courseId)
    ? current.filter(id => id !== courseId)
    : [...current, courseId];
  saveFavorites(next);
  return next;
}
