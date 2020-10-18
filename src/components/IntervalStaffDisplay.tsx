import React from 'react'

import intervals, { Interval } from '../intervals'

import styles from './IntervalStaffDisplay.module.css'

type Props = {
  interval: Interval | null
}

const intervalOverlay = (interval: Interval | null): JSX.Element | null => {
  switch (interval) {
    case null:
      return null
    case 'U':
      return (
        <svg
          className={styles.intervalOverlay}
          style={{
            stroke: intervals[interval].color,
            fill: intervals[interval].color,
          }}
          viewBox="0 0 420 270"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ledger line */}
          <line
            strokeWidth="5"
            strokeLinejoin="round"
            strokeLinecap="round"
            x1="280"
            y1="245"
            x2="360"
            y2="245"
          />
          <ellipse cx="320" cy="245" rx="25" ry="20" />
        </svg>
      )
    case 'm2':
      return (
        <svg
          className={styles.intervalOverlay}
          style={{
            stroke: intervals[interval].color,
            fill: intervals[interval].color,
          }}
          viewBox="0 0 420 270"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flat symbol */}
          <path
            fill="transparent"
            strokeWidth="5"
            strokeLinejoin="round"
            strokeLinecap="round"
            d="M260,145 L260,243 a10,25 45 1 0 0,-25"
          />
          <ellipse cx="320" cy="225" rx="25" ry="20" />
        </svg>
      )
    case 'M2':
      return (
        <svg
          className={styles.intervalOverlay}
          style={{
            stroke: intervals[interval].color,
            fill: intervals[interval].color,
          }}
          viewBox="0 0 420 270"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="320" cy="225" rx="25" ry="20" />
        </svg>
      )
    case 'm3':
      return (
        <svg
          className={styles.intervalOverlay}
          style={{
            stroke: intervals[interval].color,
            fill: intervals[interval].color,
          }}
          viewBox="0 0 420 270"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flat symbol */}
          <path
            fill="transparent"
            strokeWidth="5"
            strokeLinejoin="round"
            strokeLinecap="round"
            d="M260,125 L260,223 a10,25 45 1 0 0,-25"
          />
          <ellipse cx="320" cy="205" rx="25" ry="20" />
        </svg>
      )
    case 'M3':
      return (
        <svg
          className={styles.intervalOverlay}
          style={{
            stroke: intervals[interval].color,
            fill: intervals[interval].color,
          }}
          viewBox="0 0 420 270"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="320" cy="205" rx="25" ry="20" />
        </svg>
      )
    case 'P4':
      return (
        <svg
          className={styles.intervalOverlay}
          style={{
            stroke: intervals[interval].color,
            fill: intervals[interval].color,
          }}
          viewBox="0 0 420 270"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="320" cy="185" rx="25" ry="20" />
        </svg>
      )
    case 'A4':
      return (
        <svg
          className={styles.intervalOverlay}
          style={{
            stroke: intervals[interval].color,
            fill: intervals[interval].color,
          }}
          viewBox="0 0 420 270"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flat symbol */}
          <path
            fill="transparent"
            strokeWidth="5"
            strokeLinejoin="round"
            strokeLinecap="round"
            d="M260,85 L260,183 a10,25 45 1 0 0,-25"
          />
          <ellipse cx="320" cy="165" rx="25" ry="20" />
        </svg>
      )
    case 'P5':
      return (
        <svg
          className={styles.intervalOverlay}
          style={{
            stroke: intervals[interval].color,
            fill: intervals[interval].color,
          }}
          viewBox="0 0 420 270"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="320" cy="165" rx="25" ry="20" />
        </svg>
      )
    case 'm6':
      return (
        <svg
          className={styles.intervalOverlay}
          style={{
            stroke: intervals[interval].color,
            fill: intervals[interval].color,
          }}
          viewBox="0 0 420 270"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flat symbol */}
          <path
            fill="transparent"
            strokeWidth="5"
            strokeLinejoin="round"
            strokeLinecap="round"
            d="M260,65 L260,163 a10,25 45 1 0 0,-25"
          />
          <ellipse cx="320" cy="145" rx="25" ry="20" />
        </svg>
      )
    case 'M6':
      return (
        <svg
          className={styles.intervalOverlay}
          style={{
            stroke: intervals[interval].color,
            fill: intervals[interval].color,
          }}
          viewBox="0 0 420 270"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="320" cy="145" rx="25" ry="20" />
        </svg>
      )
    case 'm7':
      return (
        <svg
          className={styles.intervalOverlay}
          style={{
            stroke: intervals[interval].color,
            fill: intervals[interval].color,
          }}
          viewBox="0 0 420 270"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flat symbol */}
          <path
            fill="transparent"
            strokeWidth="5"
            strokeLinejoin="round"
            strokeLinecap="round"
            d="M260,45 L260,143 a10,25 45 1 0 0,-25"
          />
          <ellipse cx="320" cy="125" rx="25" ry="20" />
        </svg>
      )
    case 'M7':
      return (
        <svg
          className={styles.intervalOverlay}
          style={{
            stroke: intervals[interval].color,
            fill: intervals[interval].color,
          }}
          viewBox="0 0 420 270"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="320" cy="125" rx="25" ry="20" />
        </svg>
      )
    case 'O':
      return (
        <svg
          className={styles.intervalOverlay}
          style={{
            stroke: intervals[interval].color,
            fill: intervals[interval].color,
          }}
          viewBox="0 0 420 270"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="320" cy="105" rx="25" ry="20" />
        </svg>
      )
  }
}

const IntervalStaffDisplay = ({ interval }: Props) => (
  <div className={styles.container}>
    <svg
      className={styles.staffBase}
      viewBox="0 0 420 270"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Clef symbol */}
      <path
        fill="transparent"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
        d="M65,205 L13,175 L13,115 L65,85 L99.6,65 L99.6,25 L65,5 L65,205 L99.6,185 L99.6,145, L65,125"
      />
      <path
        fill="transparent"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
        d="M65,205 L65,235 L39,250 L13,235"
      />

      {/* Staff lines */}
      <line
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
        x1="65"
        y1="45"
        x2="415"
        y2="45"
      />
      <line
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
        x1="65"
        y1="85"
        x2="415"
        y2="85"
      />
      <line
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
        x1="65"
        y1="125"
        x2="415"
        y2="125"
      />
      <line
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
        x1="65"
        y1="165"
        x2="415"
        y2="165"
      />
      <line
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
        x1="65"
        y1="205"
        x2="415"
        y2="205"
      />

      {/* Ledger line */}
      <line
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
        x1="170"
        y1="245"
        x2="250"
        y2="245"
      />

      {/* Middle C */}
      <ellipse cx="210" cy="245" rx="25" ry="20" />
    </svg>

    {intervalOverlay(interval)}
  </div>
)

export default IntervalStaffDisplay
