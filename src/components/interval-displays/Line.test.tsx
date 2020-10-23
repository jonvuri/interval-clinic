import React from 'react'
import { render } from '@testing-library/react'
import IntervalLineDisplay from './Line'

test('renders play prompt when interval is null', () => {
  const { getByText } = render(<IntervalLineDisplay interval={null} />)
  const linkElement = getByText(/Play a note/i)
  expect(linkElement).toBeInTheDocument()
})
