import React from 'react'

type Props = {
  cycles: number

  // wave top-to-top in pixels
  width: number

  // wave top-to-bottom in pixels
  height: number
}

const SineRepeater = ({ cycles, width, height }: Props) => (
  <svg
    viewBox={`0 0 ${width * cycles} ${height}`}
    style={{
      display: 'block',
      minWidth: `${width * cycles}px`,
      width: `${width * cycles}px`,
      height: `${height}px`,
    }}
  >
    <path
      d={`M0 0 ${Array.from(
        Array(cycles),
        (_, i) =>
          `C${((36.42 / 200) * width + width * i).toPrecision(8)} 0 ${(
            (63.58 / 200) * width +
            width * i
          ).toPrecision(8)} ${height} ${(width / 2 + width * i).toPrecision(
            8
          )} ${height} C${((136.42 / 200) * width + width * i).toPrecision(
            8
          )} ${height} ${((163.58 / 200) * width + width * i).toPrecision(
            8
          )} 0 ${width + width * i} 0`
      ).join(' ')}`}
    />
  </svg>
)

export default SineRepeater
