import React, { useCallback, useEffect, useState } from 'react'

import { Interval } from '../intervals'

import styles from './piano.module.css'

type KeyProps = {
  interval: Interval
  display: string
  keyboardKey: string
  onAttack: (interval: Interval) => void
  onRelease: (interval: Interval) => void
}

type BaseKeyProps = KeyProps & {
  cssClassName: string
}

const BaseKey = ({
  cssClassName,
  interval,
  display,
  keyboardKey,
  onAttack,
  onRelease,
}: BaseKeyProps) => {
  const [pressed, setPressed] = useState(false)

  const svgPatternIdRed = `${cssClassName}-circles-red`
  const svgPatternIdGreen = `${cssClassName}-circles-green`
  const svgPatternIdBlue = `${cssClassName}-circles-blue`

  const handleMouseEnter = useCallback(
    (event) => {
      // Left click button
      if (event.buttons === 1) {
        onAttack(interval)
        setPressed(true)
      }
    },
    [interval, onAttack, setPressed]
  )

  const handleMouseDown = useCallback(
    (event) => {
      event.preventDefault()
      onAttack(interval)
      setPressed(true)
    },
    [interval, onAttack, setPressed]
  )

  const handleMouseUp = useCallback(() => {
    onRelease(interval)
    setPressed(false)
  }, [interval, onRelease, setPressed])

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === keyboardKey && !event.repeat) {
        onAttack(interval)
        setPressed(true)
      }
    },
    [interval, keyboardKey, onAttack, setPressed]
  )

  const handleKeyUp = useCallback(
    (event) => {
      if (event.key === keyboardKey && !event.repeat) {
        onRelease(interval)
        setPressed(false)
      }
    },
    [interval, keyboardKey, onRelease, setPressed]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  })

  return (
    <div className={styles.keyContainer}>
      <div className={styles.keyLabel}>{display}</div>
      <div
        role="button"
        tabIndex={0}
        onMouseEnter={handleMouseEnter}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={`${cssClassName}${pressed ? ` ${styles.keyPressed}` : ''}`}
      >
        <svg width="100%" height="100%" className={styles.keyComponentGreen}>
          <pattern
            id={svgPatternIdGreen}
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle fill="inherit" cx="5" cy="5" r="3"></circle>
          </pattern>

          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#${svgPatternIdGreen})`}
          ></rect>
        </svg>
        <svg width="100%" height="100%" className={styles.keyComponentRed}>
          <pattern
            id={svgPatternIdRed}
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle fill="inherit" cx="5" cy="5" r="3"></circle>
          </pattern>

          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#${svgPatternIdRed})`}
          ></rect>
        </svg>

        <svg width="100%" height="100%" className={styles.keyComponentBlue}>
          <pattern
            id={svgPatternIdBlue}
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle fill="inherit" cx="5" cy="5" r="3"></circle>
          </pattern>

          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#${svgPatternIdBlue})`}
          ></rect>
        </svg>
      </div>
    </div>
  )
}

const WhiteKey = ({
  interval,
  display,
  keyboardKey,
  onAttack,
  onRelease,
}: KeyProps) => (
  <BaseKey
    cssClassName={styles.whiteKey}
    interval={interval}
    keyboardKey={keyboardKey}
    display={display}
    onAttack={onAttack}
    onRelease={onRelease}
  />
)

const BlackKey = ({
  interval,
  display,
  keyboardKey,
  onAttack,
  onRelease,
}: KeyProps) => (
  <BaseKey
    cssClassName={styles.blackKey}
    interval={interval}
    keyboardKey={keyboardKey}
    display={display}
    onAttack={onAttack}
    onRelease={onRelease}
  />
)

type Props = {
  onAttack: (interval: Interval) => void
  onRelease: (interval: Interval) => void
}

const Piano = ({ onAttack, onRelease }: Props) => {
  return (
    <div className={styles.container}>
      <WhiteKey
        interval="U"
        display="C"
        keyboardKey="q"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <BlackKey
        interval="m2"
        display="D♭"
        keyboardKey="2"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        interval="M2"
        display="D"
        keyboardKey="w"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <BlackKey
        interval="m3"
        display="E♭"
        keyboardKey="3"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        interval="M3"
        display="E"
        keyboardKey="e"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        interval="P4"
        display="F"
        keyboardKey="r"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <BlackKey
        interval="A4"
        display="G♭"
        keyboardKey="5"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        interval="P5"
        display="G"
        keyboardKey="t"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <BlackKey
        interval="m6"
        display="A♭"
        keyboardKey="6"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        interval="M6"
        display="A"
        keyboardKey="y"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <BlackKey
        interval="m7"
        display="B♭"
        keyboardKey="7"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        interval="M7"
        display="B"
        keyboardKey="u"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        interval="O"
        display="C🠕"
        keyboardKey="i"
        onAttack={onAttack}
        onRelease={onRelease}
      />
    </div>
  )
}

export default Piano
