// Shared destination coordinates — single source of truth
// Used by plan page + companion app + generate-itinerary API.

export const DESTINATION_COORDS: Record<string, { lat: number; lng: number; label: string }> = {
  berlin: { lat: 52.5200, lng: 13.4050, label: 'Berlin' },
  munich: { lat: 48.1351, lng: 11.5820, label: 'Munich' },
  hamburg: { lat: 53.5511, lng: 9.9937, label: 'Hamburg' },
  cologne: { lat: 50.9375, lng: 6.9603, label: 'Cologne' },
  dresden: { lat: 51.0504, lng: 13.7373, label: 'Dresden' },
  heidelberg: { lat: 49.3988, lng: 8.6724, label: 'Heidelberg' },
  rothenburg: { lat: 49.3769, lng: 10.1790, label: 'Rothenburg' },
  'black-forest': { lat: 48.2500, lng: 8.1500, label: 'Black Forest' },
  'rhine-valley': { lat: 50.3600, lng: 7.6000, label: 'Rhine Valley' },
  nuremberg: { lat: 49.4521, lng: 11.0767, label: 'Nuremberg' },
  stuttgart: { lat: 48.7758, lng: 9.1829, label: 'Stuttgart' },
  leipzig: { lat: 51.3397, lng: 12.3731, label: 'Leipzig' },
};
