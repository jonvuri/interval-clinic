const twelveTet = (pianoKey: number) =>
  440 * Math.pow(Math.pow(2, 1 / 12), pianoKey - 49)

const intervals = {
  U: {
    name: 'Unison',
    frequency: twelveTet(40),
    color: 'rgb(25, 205, 188)',
  },
  m2: {
    name: 'Minor 2nd',
    frequency: twelveTet(41),
    color: 'rgb(232, 66, 154)',
  },
  M2: {
    name: 'Major 2nd',
    frequency: twelveTet(42),
    color: 'rgb(222, 188, 47)',
  },
  m3: {
    name: 'Minor 3rd',
    frequency: twelveTet(43),
    color: 'rgb(108, 67, 177)',
  },
  M3: {
    name: 'Major 3rd',
    frequency: twelveTet(44),
    color: 'rgb(105, 247, 93)',
  },
  P4: {
    name: 'Perfect 4th',
    frequency: twelveTet(45),
    color: 'rgb(43, 157, 222)',
  },
  A4: {
    name: 'Tritone',
    frequency: twelveTet(46),
    color: 'rgb(255, 90, 106)',
  },
  P5: {
    name: 'Perfect 5th',
    frequency: twelveTet(47),
    color: 'rgb(45, 237, 134)',
  },
  m6: {
    name: 'Minor 6th',
    frequency: twelveTet(48),
    color: 'rgb(179, 235, 83)',
  },
  M6: {
    name: 'Major 6th',
    frequency: twelveTet(49),
    color: 'rgb(79, 107, 218)',
  },
  m7: {
    name: 'Minor 7th',
    frequency: twelveTet(50),
    color: 'rgb(169, 60, 179)',
  },
  M7: {
    name: 'Major 7th',
    frequency: twelveTet(51),
    color: 'rgb(255, 133, 60)',
  },
  O: {
    name: 'Octave',
    frequency: twelveTet(52),
    color: 'rgb(25, 205, 188)',
  },
}

export type Interval = keyof typeof intervals

export default intervals
