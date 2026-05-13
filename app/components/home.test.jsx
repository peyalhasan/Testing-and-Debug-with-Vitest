import {test, expect} from 'vitest'
import Home from './Home'
import { render, screen } from '@testing-library/react'

test('Home component', () => {
    render(<Home />)
    expect(screen.getByText('Home')).toBeDefined()
})