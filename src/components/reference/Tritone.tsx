import Base from './Base'

const Tritone = Base('A4', {
  ascending: {
    Pop: [
      {
        artist: 'Jimi Hendrix',
        title: 'Purple Haze',
        description: 'First two notes of the guitar riff.',
        youtubeId: 'zSsjtiky9xI',
        youtubeStart: 8,
      },
    ],
    Media: [
      {
        artist: 'Danny Elfman',
        title: 'The Simpsons Theme',
        description: 'First two notes of the vocal melody: THE SIMPsons...',
        youtubeId: 'aPzS3QYb868',
        youtubeStart: 11,
      },
    ],
    Jazz: [
      {
        artist: 'Joe Henderson',
        title: 'Isotope',
        description: 'First two notes of the melody.',
        youtubeId: 'Bfw2sgGj02g',
        youtubeStart: 0,
      },
    ],
    'Western Classical': [
      {
        artist: 'Camille Saint-Saëns',
        title: 'Piano Concerto No. 4, Lorraine Min',
        description: 'First two notes of the melody.',
        youtubeId: 'gjUuri84-jk',
        youtubeStart: 73,
      },
    ],
  },
  descending: {
    Pop: [
      {
        artist: 'Black Sabbath',
        title: 'Black Sabbath',
        description:
          'Second two notes of the guitar riff, following the octave up.',
        youtubeId: 'MTHBEbivfZI',
        youtubeStart: 38,
      },
      {
        artist: 'Pearl Jam',
        title: 'Even Flow',
        description: "First two notes of the melody: FREEZIN'...",
        youtubeId: 'CxKWTzr-k6s',
        youtubeStart: 26,
      },
      {
        artist: 'Rush',
        title: 'YYZ',
        description: 'First two notes of the guitar riff.',
        youtubeId: 'LdpMpfp-J_I',
        youtubeStart: 7,
      },
    ],
    Jazz: [
      {
        artist: 'Sonny Rollins',
        title: 'Blue 7',
        description: 'First two notes of the melody.',
        youtubeId: '_PL_WNgdbDc',
        youtubeStart: 43,
      },
    ],
    'Western Classical': [
      {
        artist: 'Claude Debussy',
        title: 'Prelude to the Afternoon of a Faun',
        description:
          'First and sixth notes of the melody (top and bottom notes of the sequence).',
        youtubeId: 'Y9iDOt2WbjY',
        youtubeStart: 41,
      },
    ],
  },
})

export default Tritone
