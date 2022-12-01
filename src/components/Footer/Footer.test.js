import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Footer from './Footer'

afterEach(cleanup)

describe('Props test', () => {
  test('Should dis', () => {
    const { getAllByText } = render(<Footer className="foot" />)
    const elements = getAllByText('foot')

    elements.forEach((element) => {
      expect(element.textContent).toBe('foot')
    })
  })
})
