import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockSetTodos = jest.fn()

describe("AddInput", () => {
    describe("render", () => {
        it('should show input element', () => {
            render(<AddInput todos={[]} setTodos={mockSetTodos}/>);
            const inputElement = screen.getByPlaceholderText("Add a new task here...");
            expect(inputElement).toBeInTheDocument();
        });
    })

    describe("events", () => {
        it("should be able to type input", () => {
            render(<AddInput todos={[]} setTodos={mockSetTodos}/>);
            const inputElement = screen.getByPlaceholderText("Add a new task here...");
            fireEvent.change(inputElement, {target: {value: "Toilets"}});
            expect(inputElement.value).toBe("Toilets");
        })

        it("should clear input when button is clicked", () => {
            render(<AddInput todos={[]} setTodos={mockSetTodos}/>);
            const inputElement = screen.getByPlaceholderText("Add a new task here...");
            fireEvent.change(inputElement, {target: {value: "Toilets"}});
            expect(inputElement.value).toBe("Toilets");
            const addButton = screen.getByRole('button');
            fireEvent.click(addButton);
            expect(inputElement.value).toBe("");
        })
    })
})

