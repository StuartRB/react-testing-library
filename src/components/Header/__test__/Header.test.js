import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('renders with a title - text', () => {
  render(<Header title={"Poops"} />);
  const title = screen.getByText("Poops");
  expect(title).toBeInTheDocument();
});

it('renders with a title - role', () => {
  render(<Header title={"Poops"} />);
  const title = screen.getByRole("heading", {name: "Poops"});
  expect(title).toBeInTheDocument();
});

it('renders with a title - testid', () => {
  render(<Header title={"Poops"} />);
  const title = screen.getByTestId("header2");
  expect(title).toBeInTheDocument();
});

// FindBy - is Async 
it('renders with a title - findby', async () => {
  render(<Header title={"Poops"} />);
  const title = await screen.findByText("Poops");
  expect(title).toBeInTheDocument();
});

// QueryBy - doesn't exception 
it('renders with a title - findby', () => {
  render(<Header title={"Poops"} />);
  const title = screen.queryByText("Poopiess");
  expect(title).not.toBeInTheDocument();
});

// GetAllBy - returns array 
it('renders with a title - findby', () => {
  render(<Header title={"Poops"} />);
  const title = screen.getAllByRole("heading");
  expect(title.length).toBe(3);
});