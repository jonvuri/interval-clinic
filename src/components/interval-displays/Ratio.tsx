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
    const twelveInterval = intervals.twelve[interval]
    const justInterval = intervals.just[interval]
    const { upper, lower, color } = justInterval

    const twelveRatio = twelveInterval.frequency / tonicInterval.frequency
    const twelveWidth = (100 / twelveRatio) * upper

    const centsDiff =
      1200 *
      (Math.log(twelveInterval.frequency / justInterval.frequency) /
        Math.log(2))

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tonicInfoContainer}>
            <div className={styles.tonicInfo}>
              <div className={styles.infoLabel}>Tonic</div>
              <div className={styles.infoFrequency}>
                {tonicInterval.frequency.toFixed(2)}Hz
              </div>
            </div>
          </div>
          <div
            className={styles.upperInfo}
            style={{ color, opacity: just ? 1 : 0.6 }}
          >
            <div className={styles.infoLabel}>Just</div>
            <div className={styles.infoFrequency}>
              {justInterval.frequency.toFixed(2)}Hz
            </div>
          </div>
        </div>
        <div
          className={styles.innerContainer}
          style={{ opacity: just ? 1 : 0.6 }}
        >
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
        <div className={styles.header}>
          <div
            className={styles.upperInfo}
            style={{ color, opacity: just ? 0.6 : 1 }}
          >
            <div className={styles.infoLabel}>12TET</div>
            <div className={styles.infoFrequency}>
              {twelveInterval.frequency.toFixed(2)}Hz
            </div>
            {interval !== 'U' && (
              <div className={styles.infoFrequency}>
                ({centsDiff > 0 ? '+' : ''}
                {centsDiff.toFixed(2)}¢)
              </div>
            )}
          </div>
        </div>
        <div
          className={styles.tickContainer}
          style={{ opacity: just ? 0.6 : 1 }}
        >
          <div className={styles.upper} style={{ width: `${twelveWidth}px` }}>
            {Array.from(Array(upper), (_, i) =>
              i < upper - 1 ? (
                <div
                  key={i}
                  className={styles.innerTick}
                  style={{ borderColor: color }}
                />
              ) : (
                <div
                  key={i}
                  className={styles.tick}
                  style={{ borderColor: color }}
                />
              )
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Ratio
