import React, { useContext } from 'react'

import { Interval, IntervalContext } from '../intervals'

import styles from './IntervalRatioDisplay.module.css'

type Props = {
  interval: Interval | null
}

const IntervalSineWaveDisplay = ({ interval }: Props) => {
  const intervals = useContext(IntervalContext)

  if (interval === null) {
    return null
  } else {
    const { upper, lower, color } = intervals[interval]

    return (
      <div className={styles.container}>
        <div className={styles.spacing}>
          <div className={styles.upperSpacing} style={{ borderColor: color }} />
          <div className={styles.lowerSpacing} />
        </div>
        <div className={styles.tickContainer}>
          <div className={styles.upper} style={{ width: `${lower * 100}px` }}>
            {Array.from(Array(upper), (_, i) =>
              i > 0 ? (
                <div className={styles.tick} style={{ borderColor: color }} />
              ) : (
                <div className={styles.tick} style={{ borderColor: color }}>
                  <span className={styles.tickLabel}>{upper}</span>
                </div>
              )
            )}
          </div>
          <div className={styles.lower} style={{ width: `${lower * 100}px` }}>
            {Array.from(Array(lower), (_, i) =>
              i > 0 ? (
                <div className={styles.tick} />
              ) : (
                <div className={styles.tick}>
                  <span className={styles.tickLabel}>{lower}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default IntervalSineWaveDisplay
