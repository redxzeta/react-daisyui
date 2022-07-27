import { render, screen } from '@testing-library/react'
import Swap from './Swap'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('Swap', () => {
  test('render Swap', async () => {
    const user = userEvent.setup()

    render(<Swap onElement="ON" offElement="OFF" />)
    expect(screen.getByText('ON')).toHaveClass('swap-on')
    expect(screen.getByText('OFF')).toHaveClass('swap-off')
    await user.click(screen.getByRole('inpu'))
    expect(screen.getByText('ON')).not.toBeInTheDocument()
    expect(screen.getByText('OFF')).toHaveClass('swap-off')
  })
})
