import {expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import HomePage from './page';


test("renders heading", () => {
  render(<HomePage />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Home" })
  ).toBeDefined();
});

test("renders about link", () => {
  render(<HomePage />);
  expect(
    screen.getByRole("link", { name: "About" })
  ).toBeDefined();
});