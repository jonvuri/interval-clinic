import React, { useContext } from 'react'

import { Interval, IntervalContext } from '../../intervals'

import styles from './Line.module.css'

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

const IntervalLineDisplay = ({ interval }: Props) => {
  const intervals = useContext(IntervalContext)

  return interval ? (
    <div
      className={styles.container}
      style={{
        color: intervals[interval].color,
        fill: intervals[interval].color,
        stroke: intervals[interval].color,
      }}
    >
      <svg className={styles.lengthLine}>
        <circle cx="32" cy="8" r="6" />
        {Array.from(Array(numberOfSemitones(interval)), (_, i) => (
          <React.Fragment key={i}>
            <line
              x1={String(32 + 64 * i)}
              y1="8"
              x2={String(96 + 64 * i)}
              y2="8"
              strokeWidth="4"
            />
            <circle cx={String(96 + 64 * i)} cy="8" r="6" />
          </React.Fragment>
        ))}
      </svg>
      <div className={styles.semitonesLabel}>
        {numberOfSemitones(interval)} semitones
      </div>
    </div>
  ) : (
    <div className={styles.discoverHintLabel}>
      Play a note to discover intervals!
    </div>
  )
}

export default IntervalLineDisplay
