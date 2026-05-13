import { test, expect, describe } from 'vitest';
import Counter from './Counter';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Counter component', () => {
    render(<Counter />)

    test('Initializing the counter with 0', () => {
        expect(screen.getAllByRole('heading', { level: 2, name: '0' })).toBeDefined()
    })

})