import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders interval label', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Interval:/i)
  expect(linkElement).toBeInTheDocument()
})
