// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders k8collab heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: 'K8E Collab',
    })

    expect(heading).toBeInTheDocument()
  })
})