'use client'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../lib/store';
import { toggleTodo, removeTodo } from '@/lib/slices/todoSlice';

const Todolist = () => {
    const dispatch = useDispatch();
    const todoS = useSelector((state: RootState) => state.todoS.todoS);

    const handleToggleTodo = (id: string) => {
        dispatch(toggleTodo(id));
    }

    const handleRemoveTodo = (id: string) => {
        dispatch(removeTodo(id));
    }

    if(!Array.isArray(todoS)) {
        console.error('Expected todoS to be an array', todoS);
        return null;
    }

    return (
        <div>
            {todoS.map((todo) => (
                <div key={todo.id}>
                    <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none'}}></span>
                    {todo.text}
                    <button onClick={() => handleToggleTodo(todo.id)} style={{ marginLeft: '10px'}}>
                        {todo.isCompleted ? 'Не виконано' : 'Виконано'}    
                    </button>    
                    <button onClick={() => handleRemoveTodo(todo.id)} style={{ marginLeft: '10px' }}>
                        Видалити
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Todolist;