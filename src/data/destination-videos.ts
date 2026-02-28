/**
 * Shared video map for destination cards.
 * Maps destination slugs to video file paths (preview preferred, hero as fallback).
 * Used by: src/pages/index.astro, src/pages/destinations/index.astro
 */
export const destinationVideoMap: Record<string, string> = {
  berlin: '/videos/destinations/berlin-preview.mp4',
  munich: '/videos/destinations/munich-preview.mp4',
  hamburg: '/videos/destinations/hamburg-preview.mp4',
  cologne: '/videos/destinations/cologne-preview.mp4',
  dresden: '/videos/destinations/dresden-preview.mp4',
  heidelberg: '/videos/destinations/heidelberg-preview.mp4',
  rothenburg: '/videos/destinations/rothenburg-preview.mp4',
  'black-forest': '/videos/destinations/black-forest-preview.mp4',
  'rhine-valley': '/videos/destinations/rhine-valley-preview.mp4',
  nuremberg: '/videos/destinations/nuremberg-preview.mp4',
  stuttgart: '/videos/destinations/stuttgart-preview.mp4',
  leipzig: '/videos/destinations/leipzig-preview.mp4',
} as const;
