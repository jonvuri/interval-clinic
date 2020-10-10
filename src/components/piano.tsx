import React, { useCallback, useEffect } from 'react'
import {} from 'tone'

import styles from './piano.module.css'

type KeyProps = {
  note: string
  display: string
  keyboardKey: string
  onAttack: (note: string) => void
  onRelease: (note: string) => void
}

type BaseKeyProps = KeyProps & {
  cssClassName: string
}

const BaseKey = ({
  cssClassName,
  note,
  display,
  keyboardKey,
  onAttack,
  onRelease,
}: BaseKeyProps) => {
  const svgPatternId = `${cssClassName}-circles`

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === keyboardKey && !event.repeat) {
        event.preventDefault()
        onAttack(note)
      }
    },
    [note, keyboardKey, onAttack]
  )

  const handleKeyUp = useCallback(
    (event) => {
      if (event.key === keyboardKey && !event.repeat) {
        event.preventDefault()
        onRelease(note)
      }
    },
    [note, keyboardKey, onRelease]
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
    <div
      role="button"
      tabIndex={0}
      onMouseDown={() => {
        onAttack(note)
      }}
      onMouseUp={() => onRelease(note)}
      className={cssClassName}
    >
      {display}
      <svg width="100%" height="100%">
        <pattern
          id={svgPatternId}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <circle fill="inherit" cx="3" cy="3" r="3"></circle>
        </pattern>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#${svgPatternId})`}
        ></rect>
      </svg>
    </div>
  )
}

const WhiteKey = ({
  note,
  display,
  keyboardKey,
  onAttack,
  onRelease,
}: KeyProps) => (
  <BaseKey
    cssClassName={styles.whiteKey}
    note={note}
    keyboardKey={keyboardKey}
    display={display}
    onAttack={onAttack}
    onRelease={onRelease}
  />
)

const BlackKey = ({
  note,
  display,
  keyboardKey,
  onAttack,
  onRelease,
}: KeyProps) => (
  <BaseKey
    cssClassName={styles.blackKey}
    note={note}
    keyboardKey={keyboardKey}
    display={display}
    onAttack={onAttack}
    onRelease={onRelease}
  />
)

type Props = {
  onAttack: (tone: string) => void
  onRelease: (tone: string) => void
}

const Piano = ({ onAttack, onRelease }: Props) => {
  return (
    <div className={styles.container}>
      <WhiteKey
        note="C4"
        display="C"
        keyboardKey="q"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <BlackKey
        note="C#4"
        display="D♭"
        keyboardKey="2"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        note="D4"
        display="D"
        keyboardKey="w"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <BlackKey
        note="D#4"
        display="E♭"
        keyboardKey="3"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        note="E4"
        display="E"
        keyboardKey="e"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        note="F4"
        display="F"
        keyboardKey="r"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <BlackKey
        note="F#4"
        display="G♭"
        keyboardKey="5"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        note="G4"
        display="G"
        keyboardKey="t"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <BlackKey
        note="G#4"
        display="A♭"
        keyboardKey="6"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        note="A4"
        display="A"
        keyboardKey="y"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <BlackKey
        note="A#4"
        display="B♭"
        keyboardKey="7"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        note="B4"
        display="B"
        keyboardKey="u"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        note="C5"
        display="C🠕"
        keyboardKey="i"
        onAttack={onAttack}
        onRelease={onRelease}
      />
    </div>
  )
}

export default Piano
