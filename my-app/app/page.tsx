'use client'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../lib/slices/todoSlice';
import { fetchSwapi } from '../lib/thunks/swapi';
import InputField from './components/InputField';
import AddButton from './components/AddButton';
import TodoList from './components/TodoList';
import FetchSwapiButton from './components/FetchSwapiButton';
import { AppDispatch } from '../lib/store';

const Page = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const updateText = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value);

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    const handleFetchSwapi = () => {
        dispatch(fetchSwapi());
    };

    return (
        <div>
            <InputField text={text} updateText={updateText} />
            <AddButton onClick={handleAdd} />
            <TodoList />
            
            
            <div style={{ marginTop: '20px' }}>
                <button onClick={handleFetchSwapi}>свапі</button>
                <FetchSwapiButton />
            </div>
        </div>
    );
};

export default Page;
