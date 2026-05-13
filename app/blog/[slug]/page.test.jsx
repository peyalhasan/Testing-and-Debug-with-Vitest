import {expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import BlogPage from './page';

test('Test the blog dynamic route', () => {
    render(<BlogPage params={{slug: 'test'}} />)

    expect(screen.getByRole('heading', {lavel: 1, name: 'Slug: test'})).toBeDefined();
});