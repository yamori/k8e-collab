// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react'
import Home from '../pages/about/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders k8collab heading', () => {
    render(<Home />)

    const heading = screen.getByText("Goals and motivation:")
    // Unable to actually test for dynamic SWR loaded data, shows up as "failed to load"

    expect(heading).toBeInTheDocument()
  })
})

describe('Home', () => {
  it('renders k8collab heading', () => {
    render(<Home />)

    // this text from pages/api/profile.js, and won't be present in jest test
    // due to the client fetching this data, 
    expect(() => screen.getByText('FEnd, ultimately with dynamic data fetched from Client side')).toThrow();
  })
})