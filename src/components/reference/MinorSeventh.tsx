import Base from './Base'

const MinorSeventh = Base('m7', {
  ascending: {
    Pop: [
      {
        artist: 'ABBA',
        title: 'The Winner Takes It All',
        description:
          'First two notes of the chorus melody: THE WINNER takes it all...',
        youtubeId: 'iyIOl-s7JTU',
        youtubeStart: 62,
      },
      {
        artist: 'Steely Dan',
        title: 'Josie',
        description: 'First two notes of the guitar riff.',
        youtubeId: 'Gg9RyiPKhx8',
        youtubeStart: 0,
      },
    ],
    Media: [
      {
        artist: 'Alexander Courage',
        title: 'Star Trek Theme (1966)',
        description: 'First two notes of the melody.',
        youtubeId: 'yySw7vkdkZY',
        youtubeStart: 135,
        youtubeNote: 'Performed by the Filmova Filharmonie orchestra',
      },
    ],
    Jazz: [
      {
        artist: 'Herbie Hancock',
        title: 'Chameleon',
        description:
          'Fourth and fifth notes of the bassline - the big leap up.',
        youtubeId: 'WYRrIBqKsJ4',
        youtubeStart: 0,
      },
    ],
  },
  descending: {
    Jazz: [
      {
        artist: 'Johnny Mandel',
        title: 'The Shadow of Your Smile',
        description:
          'The fifth and sixth note of the melody: The shadow of YOUR SMILE...',
        youtubeId: 'Qcr99JAPuU8',
        youtubeStart: 43,
        youtubeNote: 'Performed by Sarah Vaughan and the Bob James Trio',
      },

      {
        artist: 'Herbie Hancock',
        title: 'Watermelon Man',
        description:
          'First note sustained by the trumpet, followed by the first low note by the saxophone.',
        youtubeId: 'ZbHJHPTikQA',
        youtubeStart: 15,
      },
    ],
    'Western Classical': [
      {
        artist: 'Pyotr Tchaikovsky',
        title: 'None but the Lonely Heart',
        description: 'The first two notes of the melody.',
        youtubeId: '5D83fjpKFfA',
        youtubeStart: 30,
        youtubeNote: 'Performed by Bion Tsang and Cecilia Lo-Chien Kao',
      },
    ],
  },
})

export default MinorSeventh
