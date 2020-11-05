import React from 'react'

import intervals, { Interval } from '../../intervals'

import styles from './Ratio.module.css'

const tonicInterval = intervals.just['U']

type Props = {
  interval: Interval | null
  just: boolean
}

const Ratio = ({ interval, just }: Props) => {
  if (interval === null) {
    return <div className={styles.container} />
  } else {
    const currentInterval = just
      ? intervals.just[interval]
      : intervals.twelve[interval]
    const { upper, lower, color } = currentInterval

    const twelveRatio =
      intervals.twelve[interval].frequency / tonicInterval.frequency
    const twelveWidth = (100 / twelveRatio) * upper

    return (
      <div className={styles.container}>
        <div className={styles.upperInfo} style={{ color }}>
          <div className={styles.infoNote}>{currentInterval.note}</div>
          <div className={styles.infoFrequency}>
            {currentInterval.frequency.toFixed(2)}Hz
          </div>
        </div>
        <div className={styles.lowerInfo}>
          <div className={styles.infoNote}>{tonicInterval.note}</div>
          <div className={styles.infoFrequency}>
            {tonicInterval.frequency.toFixed(2)}Hz
          </div>
        </div>
        <div className={styles.tickContainer}>
          <div className={styles.upper} style={{ width: `${twelveWidth}px` }}>
            {Array.from(Array(upper), (_, i) =>
              i > 0 ? (
                <div
                  key={i}
                  className={styles.tick}
                  style={{ borderColor: color }}
                />
              ) : (
                <div
                  key={i}
                  className={styles.tick}
                  style={{ borderColor: color }}
                >
                  <span className={styles.tickLabel} style={{ color }}>
                    {upper}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
        <div className={styles.innerContainer}>
          <div className={styles.spacing}>
            <div
              className={styles.upperSpacing}
              style={{ borderColor: color }}
            />
            <div className={styles.lowerSpacing} />
          </div>
          <div className={styles.tickContainer}>
            <div className={styles.upper} style={{ width: `${lower * 100}px` }}>
              {Array.from(Array(upper), (_, i) =>
                i > 0 ? (
                  <div
                    key={i}
                    className={styles.tick}
                    style={{ borderColor: color }}
                  />
                ) : (
                  <div
                    key={i}
                    className={styles.tick}
                    style={{ borderColor: color }}
                  >
                    <span className={styles.tickLabel} style={{ color }}>
                      {upper}
                    </span>
                  </div>
                )
              )}
            </div>
            <div className={styles.lower} style={{ width: `${lower * 100}px` }}>
              {Array.from(Array(lower), (_, i) =>
                i > 0 ? (
                  <div key={i} className={styles.tick} />
                ) : (
                  <div key={i} className={styles.tick}>
                    <span className={styles.tickLabel}>{lower}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Ratio
