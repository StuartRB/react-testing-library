import { fireEvent, render, screen } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom'

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
};

const addTasks = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: "Add" });
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    });
};

describe("Todo", () => {
    it('integration test single task', () => {
        const a = render(<MockTodo />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button", { name: "Add" });
        fireEvent.change(inputElement, { target: { value: "go to bed smelly joe" } });
        fireEvent.click(buttonElement);
        const divElement = screen.getByText(/go to bed smelly joe/i);
        expect(divElement).toBeInTheDocument();
    });

    it('integration test multiple tasks', () => {
        const a = render(<MockTodo />);
        const tasks = ["Go to bed", "Eat breakfast", "Look at cheese"];
        addTasks(tasks)
        tasks.forEach(task => {
            const divElement = screen.getByText(task);
            expect(divElement).toBeInTheDocument();
        })
    });

    it('integration test multiple tasks better solution', () => {
        const a = render(<MockTodo />);
        const tasks = ["Go to bed", "Eat breakfast", "Look at cheese"];
        addTasks(tasks);
        const taskElements = screen.getAllByTestId("task-item");
        expect(taskElements.length).toBe(3);
    });

    it('tasks are not stikethru when initially added', () => {
        const a = render(<MockTodo />);
        const tasks = ["Go to bed"];
        addTasks(tasks);
        const taskElement = screen.getByText("Go to bed");
        expect(taskElement).not.toHaveClass("todo-item-active");
    });

    it('tasks are stikethru when completed', () => {
        const a = render(<MockTodo />);
        const tasks = ["Go to bed"];
        addTasks(tasks);
        const taskElement = screen.getByText("Go to bed");
        fireEvent.click(taskElement)
        expect(taskElement).toHaveClass("todo-item-active");
    });
});


