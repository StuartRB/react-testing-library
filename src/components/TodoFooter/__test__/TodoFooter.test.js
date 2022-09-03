import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

//Have to mock a component wrapped in Router
const MockRouter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}

it('renders with task count', () => {
    render(<MockRouter numberOfIncompleteTasks={5} />);
    const text = screen.getByText("5 tasks left");
    expect(text).toBeInTheDocument();
});

it('renders with "task" if one task passed in', () => {
    render(<MockRouter numberOfIncompleteTasks={1} />);
    const text = screen.getByText("1 task left");
    expect(text).toBeInTheDocument();
});

it('renders with paragraph html element', () => {
    render(<MockRouter numberOfIncompleteTasks={1} />);
    const text = screen.getByText("1 task left");
    expect(text).toContainHTML("p");
});

it('renders with text get by role with text content assert', () => {
    render(<MockRouter numberOfIncompleteTasks={1} />);
    const text = screen.getByRole('paragraph');
    expect(text).toHaveTextContent("1 task left");
});

it('renders with text get by role with text content attribute assert', () => {
    render(<MockRouter numberOfIncompleteTasks={1} />);
    const text = screen.getByRole('paragraph');
    expect(text.textContent).toBe("1 task left");
});

describe("this is a decribe block", () => {
    describe("this in an inner describe", () => {
        it('renders with invisible text', () => {
            render(<MockRouter numberOfIncompleteTasks={1} />);
            const text = screen.getByText("not visibile but in document");
            expect(text).toBeInTheDocument();
            expect(text).not.toBeVisible();
        });
    })
})

