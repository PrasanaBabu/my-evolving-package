import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface TodoState {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    message: string;
    error: Record<string, any>;
    todoList: any[]; // Define a more specific type if possible
    addTodo: (formData: any) => void;
    getTodos: () => void;
}

const initialTodoState: TodoState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
    error: {},
    todoList: [],
    addTodo: () => {},
    getTodos: () => {},
};

export const useTodosStore = create<TodoState>()(
    devtools((set) => ({ // redux devtools
        ...initialTodoState,
        getTodos: async () => {

            try {
                set({
                    isLoading: true,
                    isError: false,
                    isSuccess: false,
                });

                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/todos`
                );

                console.log(response)

                set({
                    todoList: response.data,
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    error: {},
                });
            } catch (error: any) {
                set({
                    isLoading: false,
                    isError: true,
                    isSuccess: false,
                    error: error,
                });
            }
        },
        addTodo: async (formData: any) => {
            try {
                set({ isLoading: true, isError: false });
                const response = await axios.post(
                    `https://jsonplaceholder.typicode.com/todos`,
                    formData,
                );

                set((state) => ({
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    todoList: [...state.todoList, response.data],
                }));
            } catch (error: any) {
                set({ isLoading: false, error: error, isSuccess: false });
                throw error; // Throw the error to be caught in the hook
            }
        },
    }))
);
