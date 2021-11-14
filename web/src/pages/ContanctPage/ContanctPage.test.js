import { render } from '@redwoodjs/testing/web'

import ContanctPage from './ContanctPage'

describe('ContanctPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContanctPage />)
    }).not.toThrow()
  })
})
