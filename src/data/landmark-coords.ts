// Popular German POI coordinates for itinerary geocoding.
// Used by generate-itinerary.ts to resolve activity coordinates without Geocoding API calls.

export const LANDMARK_COORDS: Record<string, { lat: number; lng: number }> = {
  // -- Berlin --
  'brandenburg gate': { lat: 52.5163, lng: 13.3777 },
  'reichstag': { lat: 52.5186, lng: 13.3762 },
  'berlin wall memorial': { lat: 52.5352, lng: 13.3900 },
  'museum island': { lat: 52.5169, lng: 13.4019 },
  'checkpoint charlie': { lat: 52.5076, lng: 13.3904 },
  'east side gallery': { lat: 52.5053, lng: 13.4399 },
  'alexanderplatz': { lat: 52.5219, lng: 13.4132 },
  'tiergarten': { lat: 52.5145, lng: 13.3501 },
  'charlottenburg palace': { lat: 52.5209, lng: 13.2956 },
  'potsdamer platz': { lat: 52.5096, lng: 13.3761 },

  // -- Munich --
  'marienplatz': { lat: 48.1374, lng: 11.5755 },
  'neuschwanstein castle': { lat: 47.5576, lng: 10.7498 },
  'english garden munich': { lat: 48.1642, lng: 11.6054 },
  'nymphenburg palace': { lat: 48.1583, lng: 11.5036 },
  'viktualienmarkt': { lat: 48.1352, lng: 11.5761 },
  'hofbrauhaus': { lat: 48.1376, lng: 11.5798 },
  'bmw welt': { lat: 48.1770, lng: 11.5563 },
  'dachau memorial': { lat: 48.2700, lng: 11.4683 },

  // -- Hamburg --
  'speicherstadt': { lat: 53.5433, lng: 9.9988 },
  'elbphilharmonie': { lat: 53.5413, lng: 9.9842 },
  'miniatur wunderland': { lat: 53.5436, lng: 9.9886 },
  'st pauli': { lat: 53.5500, lng: 9.9667 },
  'reeperbahn': { lat: 53.5493, lng: 9.9628 },
  'planten un blomen': { lat: 53.5572, lng: 9.9819 },

  // -- Cologne --
  'cologne cathedral': { lat: 50.9413, lng: 6.9583 },
  'hohenzollern bridge': { lat: 50.9412, lng: 6.9650 },
  'museum ludwig': { lat: 50.9401, lng: 6.9616 },
  'old town cologne': { lat: 50.9380, lng: 6.9600 },
  'chocolate museum cologne': { lat: 50.9322, lng: 6.9644 },

  // -- Dresden --
  'frauenkirche dresden': { lat: 51.0519, lng: 13.7413 },
  'zwinger palace': { lat: 51.0533, lng: 13.7342 },
  'semper opera': { lat: 51.0544, lng: 13.7353 },
  'green vault': { lat: 51.0530, lng: 13.7370 },
  'bruehl terrace': { lat: 51.0530, lng: 13.7440 },

  // -- Heidelberg --
  'heidelberg castle': { lat: 49.4106, lng: 8.7153 },
  'old bridge heidelberg': { lat: 49.4137, lng: 8.7113 },
  'philosophers walk': { lat: 49.4165, lng: 8.7070 },
  'heidelberg university': { lat: 49.4100, lng: 8.7060 },

  // -- Rothenburg ob der Tauber --
  'plonlein rothenburg': { lat: 49.3749, lng: 10.1788 },
  'town wall rothenburg': { lat: 49.3770, lng: 10.1790 },
  'christmas museum rothenburg': { lat: 49.3781, lng: 10.1798 },
  'market square rothenburg': { lat: 49.3773, lng: 10.1784 },

  // -- Black Forest --
  'triberg waterfalls': { lat: 48.1300, lng: 8.2300 },
  'freiburg minster': { lat: 47.9959, lng: 7.8522 },
  'titisee lake': { lat: 47.8961, lng: 8.1542 },
  'baden-baden': { lat: 48.7606, lng: 8.2406 },

  // -- Rhine Valley --
  'lorelei rock': { lat: 50.1414, lng: 7.7317 },
  'marksburg castle': { lat: 50.2714, lng: 7.6509 },
  'rudesheim': { lat: 49.9786, lng: 7.9228 },
  'bacharach': { lat: 50.0567, lng: 7.7703 },

  // -- Nuremberg --
  'nuremberg castle': { lat: 49.4579, lng: 11.0758 },
  'albrecht durer house': { lat: 49.4570, lng: 11.0740 },
  'hauptmarkt nuremberg': { lat: 49.4536, lng: 11.0772 },
  'documentation center': { lat: 49.4261, lng: 11.1192 },

  // -- Stuttgart --
  'mercedes-benz museum': { lat: 48.7882, lng: 9.2335 },
  'porsche museum': { lat: 48.8342, lng: 9.1522 },
  'schlossplatz stuttgart': { lat: 48.7785, lng: 9.1800 },
  'wilhelma zoo': { lat: 48.8045, lng: 9.2067 },

  // -- Leipzig --
  'st thomas church': { lat: 51.3395, lng: 12.3722 },
  'nikolaikirche': { lat: 51.3407, lng: 12.3794 },
  'stasi museum leipzig': { lat: 51.3144, lng: 12.3986 },
  'leipzig zoo': { lat: 51.3510, lng: 12.3694 },
};
