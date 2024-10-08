import { render, screen } from '@testing-library/react';
import Header from './header';

test('renders pomodoro in Header title', () => {
  render(<Header title="pomodoro" />);
  const appTitle = screen.getByText(/pomodoro/i);
  expect(appTitle).toBeInTheDocument();
});