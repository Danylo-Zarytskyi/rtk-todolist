import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: string;
    text: string;
    isCompleted: boolean,
};

interface TodoState {
    todoS: Todo[]; 
}

const initialState: TodoState = {
    todoS: [],
}

const todoSlice = createSlice({
    name: 'todoS',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: Date.now().toString(),
                text: action.payload,
                isCompleted: false
            }
            state.todoS.push(newTodo);
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const todo = state.todoS.find(todo => todo.id === action.payload);
            if (todo) {
                todo.isCompleted = !todo.isCompleted;
            }
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todoS = state.todoS.filter(todo => todo.id !== action.payload);
        }
    }
})

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;