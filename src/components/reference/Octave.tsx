import Base from './Base'

const Octave = Base('O', {
  ascending: {
    Pop: [
      {
        artist: "Guns N' Roses",
        title: "Sweet Child O' Mine",
        description: 'First two notes of the guitar riff.',
        youtubeId: '1w7OgIMMRc4',
        youtubeStart: 0,
      },
      {
        artist: 'The Knacks',
        title: 'My Sharona',
        description: 'First two notes of the guitar riff.',
        youtubeId: 'g1T71PGd-J0',
        youtubeStart: 13,
      },
    ],
    Folk: [
      {
        artist: 'Robert Wells, Mel Tormé',
        title: 'The Christmas Song',
        description:
          'First two notes of the melody: CHESTNUTS roasting on an open fire...',
        youtubeId: 'hwacxSnc4tI',
        youtubeStart: 17,
        youtubeNote: 'Performed by Nat King Cole',
      },
    ],
    Jazz: [
      {
        artist: 'Kenny Dorham',
        title: 'Blue Bossa',
        description: 'First two notes of the melody.',
        youtubeId: 'U7eOs5lERww',
        youtubeStart: 12,
        youtubeNote: 'Performed by Joe Henderson',
      },
    ],
    'Western Classical': [
      {
        artist: 'Ludwig van Beethoven',
        title: 'String Quartet No. 14 in C-sharp minor, 2nd Movement',
        description: 'First two notes of the melody.',
        youtubeId: '77ec-er7OII',
        youtubeStart: 0,
        youtubeNote: 'Performed by Juilliard String Quartet',
      },
    ],
  },
  descending: {
    Pop: [
      {
        artist: 'Radiohead',
        title: 'No Surprises',
        description:
          "First two notes of the vocal melody: A HEART THAT'S full up...",
        youtubeId: 'u5CVsCnxyXg',
        youtubeStart: 25,
      },
    ],
    Media: [
      {
        artist: 'Nobuo Uematsu',
        title: 'To Zanarkand from Final Fantasy X',
        description: 'First two notes of the melody.',
        youtubeId: 'PSjTN8WSGNk',
        youtubeStart: 0,
        youtubeNote: 'Performed by Fanny Söderström',
      },
    ],
    Jazz: [
      {
        artist: 'Herb Alpert',
        title: 'Acapulco 1922',
        description: 'First two notes of the melody.',
        youtubeId: 'mpI7EjUOkvg',
        youtubeStart: 14,
      },
      {
        artist: 'Ann Ronnell',
        title: 'Willow, Weep For Me',
        description: 'First two notes of the melody: WILLOW, weep for me...',
        youtubeId: 'w82NHDRRGJ0',
        youtubeStart: 17,
        youtubeNote: 'Performed by Billie Holiday',
      },
    ],
  },
})

export default Octave
