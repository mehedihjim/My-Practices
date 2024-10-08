import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../slices/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [text, setText] = useState('');
    // Use the correct state structure based on your store
    const todos = useSelector((state) => state.todos); // This should match the slice name
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-bold">Todo List</h1>
            <div className="flex space-x-2">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="border border-gray-300 rounded p-2"
                    placeholder="Add a new task"
                />
                <button
                    onClick={handleAddTodo}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Add
                </button>
            </div>
            <div className="w-full max-w-md mt-4">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
