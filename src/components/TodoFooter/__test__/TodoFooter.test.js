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
    const title = screen.getByText("5 tasks left");
    expect(title).toBeInTheDocument();
});

it('renders with "task" if one task passed in', () => {
    render(<MockRouter numberOfIncompleteTasks={1} />);
    const title = screen.getByText("1 task left");
    expect(title).toBeInTheDocument();
});

it('renders with invisible text', () => {
    render(<MockRouter numberOfIncompleteTasks={1} />);
    const text = screen.getByText("not visibile but in document");
    expect(text).toBeInTheDocument();
    expect(text).not.toBeVisible();
});
