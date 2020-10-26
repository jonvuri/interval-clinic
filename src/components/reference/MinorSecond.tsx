import Base from './Base'

const MinorSecond = Base('m2', {
  ascending: {
    Pop: [
      {
        artist: 'Stevie Wonder',
        title: "Isn't She Lovely",
        description: 'First two notes of the vocal melody',
        youtubeId: '7YGc6RMOYF8',
        youtubeStart: 36,
      },
    ],
    Media: [
      {
        artist: 'John Williams',
        title: 'Jaws Theme',
        description: 'First two notes of the melody.',
        youtubeId: 'lV8i-pSVMaQ',
        youtubeStart: 20,
      },
      {
        artist: 'Henry Manchin',
        title: 'Pink Panther Theme',
        description: 'First two notes of the melody.',
        youtubeId: 'HhHwnrlZRus',
        youtubeStart: 2,
      },
    ],
    Folk: [
      {
        artist: 'Irving Berlin',
        title: 'White Christmas',
        description: 'First two notes of the vocal melody.',
        youtubeId: 'w9QLn7gM-hY',
        youtubeStart: 10,
        youtubeNote: 'Performed by Bing Crosby',
      },
    ],
    Jazz: [
      {
        artist: 'Tom Jobim',
        title: 'How Insensitive',
        description: 'First two notes of the vocal melody.',
        youtubeId: 'Gz1zBKoTCf4',
        youtubeStart: 9,
        youtubeNote: 'Performed by Stacey Kent',
      },
      {
        artist: 'George Gershwin',
        title: 'Nice Work If You Can Get It',
        description: 'First two notes of the vocal melody in the chorus.',
        youtubeId: 'E1R3vAySJ-A',
        youtubeStart: 57,
        youtubeNote: 'Performed by Ella Fitzgerald',
      },
    ],
    'Western Classical': [
      {
        artist: 'Dvořák',
        title: 'New World Symphony, 4th Movement',
        description: 'First two notes of the melody.',
        youtubeId: '32_O-NwzFM0',
        youtubeStart: 1,
        youtubeNote: 'Performed by the Vienna Philharmonic orchestra',
      },
      {
        artist: 'Handel',
        title: "Lascia ch'io pianga",
        description:
          'First two notes of the melody (both instrumental and vocal).',
        youtubeId: 'EKo_EmfEPWs',
        youtubeStart: 30,
        youtubeNote: 'Performed by Kirsten Blaise and Voices of Music',
      },
    ],
  },
  descending: {
    Pop: [
      {
        artist: 'Metallica',
        title: 'For Whom the Bell Tolls',
        description: 'First two notes of lead guitar riff.',
        youtubeId: 'KO3l6qNA2Q4',
        youtubeStart: 9,
      },
    ],
    Media: [
      {
        artist: 'John Williams',
        title: 'Jurassic Park Theme',
        description: 'First two notes of main theme.',
        youtubeId: '-NqaupGcCpw',
        youtubeStart: 80,
        youtubeNote: 'Performed by the Vienna Philharmonic orchestra',
      },
    ],
    Folk: [
      {
        artist: 'Lewis Redner',
        title: 'O Little Town of Bethlehem (St. Louis version)',
        description: 'First two notes of vocal melody.',
        youtubeId: 'V9i-tS6moeE',
        youtubeStart: 14,
        youtubeNote: 'Performed by Nat King Cole',
      },
    ],
  },
})

export default MinorSecond
