import Base from './Base'

const MajorSeventh = Base('M7', {
  ascending: {
    Pop: [
      {
        artist: 'Norah Jones',
        title: "Don't Know Why",
        description: "First two notes of the melody: I WAITed til' I saw",
        youtubeId: 'GozYEBItOCg',
        youtubeStart: 18,
      },
      {
        artist: 'A-ha',
        title: 'Take On Me',
        description: 'First two notes of the chorus melody: TAKE ON me...',
        youtubeId: 'djV11Xbc914',
        youtubeStart: 54,
      },
      {
        artist: 'Nada Surf',
        title: 'Popular',
        description: 'First two notes of the guitar riff.',
        youtubeId: 'hAFuD-S-e_E',
        youtubeStart: 7,
      },
    ],
    'Western Classical': [
      {
        artist: 'Erik Satie',
        title: 'Gymnopédie No. 1',
        description:
          'From the first bass note, up to the top note of the first triad chord following it.',
        youtubeId: 'S-Xm7s9eGxU',
        youtubeStart: 0,
        youtubeNote: 'Performed by Daniel Varsano and Philippe Entremont',
      },
    ],
  },
  descending: {
    Folk: [
      {
        artist: 'Hugh Martin',
        title: 'Have Yourself a Merry Little Christmas',
        description:
          'Two descending notes near the end of the melody: AND HAVE YOURself...',
        youtubeId: 'pvA7-EjaSPI',
        youtubeStart: 109,
        youtubeNote: 'Performed by Frank Sinatra',
      },
    ],
    Jazz: [
      {
        artist: 'Cole Porter',
        title: 'I Love You',
        description:
          'First two notes of the melody: I LOVE YOU, hums the April breeze...',
        youtubeId: 'XAEnE-lPWRA',
        youtubeStart: 71,
      },
    ],
    'Western Classical': [
      {
        artist: 'Modest Mussorgsky',
        title: "The Hut on Hen's Legs (Baba Yaga)",
        description: 'First two notes of the melody.',
        youtubeId: 'QA-MEgv1evg',
        youtubeStart: 14,
      },
    ],
  },
})

export default MajorSeventh
