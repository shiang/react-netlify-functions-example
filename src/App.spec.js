import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('Renders without error', () => {
    render(<App />)
  })

  // test('should fail', () => {
  //   expect(true).toBe(false)
  // })
})
