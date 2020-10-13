import React from 'react'

import { Interval } from '../intervals'

import styles from './IntervalDisplay.module.css'

type Props = {
  interval: Interval | null
}

const numberOfSemitones = (interval: Interval | null): number => {
  switch (interval) {
    case 'U':
    case null:
      return 0
    case 'm2':
      return 1
    case 'M2':
      return 2
    case 'm3':
      return 3
    case 'M3':
      return 4
    case 'P4':
      return 5
    case 'A4':
      return 6
    case 'P5':
      return 7
    case 'm6':
      return 8
    case 'M6':
      return 9
    case 'm7':
      return 10
    case 'M7':
      return 11
    case 'O':
      return 12
  }
}

const IntervalDisplay = ({ interval }: Props) => (
  <div className={styles.container}>
    <svg className={styles.lengthLine}>
      <circle cx="32" cy="6" r="6" />
      {Array.from(Array(numberOfSemitones(interval)), (_, i) => (
        <React.Fragment key={i}>
          <line
            x1={String(32 + 64 * i)}
            y1="6"
            x2={String(96 + 64 * i)}
            y2="6"
            stroke="black"
            strokeWidth="4"
          />
          <circle cx={String(96 + 64 * i)} cy="6" r="6" />
        </React.Fragment>
      ))}
    </svg>
    {interval}
  </div>
)

export default IntervalDisplay
