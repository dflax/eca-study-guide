// URL fragment for a note section, derived from its heading.
export function topicSlug(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function notesHref(courseId: string, unitId: string, topic: string): string {
  return `/${courseId}/${unitId}/notes#${topicSlug(topic)}`;
}

export function flashcardsHref(courseId: string, unitId: string, flashcardIds: string[]): string {
  const base = `/${courseId}/${unitId}/flashcards`;
  return flashcardIds.length > 0 ? `${base}?cards=${encodeURIComponent(flashcardIds.join(','))}` : base;
}
