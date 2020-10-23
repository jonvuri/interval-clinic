import React from 'react'

import intervals, { Interval } from '../intervals'

import styles from './IntervalDetailsDisplay.module.css'

type Props = {
  interval: Interval | null
  just: boolean
}

const IntervalDetailsDisplay = ({ interval, just }: Props) => (
  <div
    className={styles.container}
    style={interval !== null ? { color: intervals.twelve[interval].color } : {}}
  >
    {interval !== null && (
      <>
        <div className={styles.intervalNoteName}>
          {intervals.just[interval].note}
        </div>
        <div
          className={styles.twelveLabel}
          style={
            just ? {} : { fontWeight: 'bold', textDecoration: 'underline' }
          }
        >
          12TET
        </div>
        <div
          className={styles.twelveHertz}
          style={just ? {} : { fontWeight: 'bold' }}
        >
          {intervals.twelve[interval].frequency.toFixed(2)}Hz
        </div>
        <div
          className={styles.justLabel}
          style={
            just ? { fontWeight: 'bold', textDecoration: 'underline' } : {}
          }
        >
          Just
        </div>
        <div
          className={styles.justHertz}
          style={just ? { fontWeight: 'bold' } : {}}
        >
          {intervals.just[interval].frequency.toFixed(2)}Hz
        </div>
        <div className={styles.justRatio}>
          <div className={styles.justRatioInner}>
            {intervals.just[interval].upper}
          </div>
        </div>
      </>
    )}
    <div className={styles.tonicLabel}>Tonic</div>
    <div className={styles.tonicHertz}>
      {intervals.just['U'].frequency.toFixed(2)}Hz
    </div>
    {interval !== null && (
      <div className={styles.tonicRatio}>
        <div className={styles.tonicRatioInner}>
          {intervals.just[interval].lower}
        </div>
      </div>
    )}
    <div className={styles.tonicNoteName}>C4</div>
  </div>
)

export default IntervalDetailsDisplay
