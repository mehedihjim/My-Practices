import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../slices/todoSlice';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <div className="flex items-center justify-between bg-gray-100 p-2 rounded mb-2">
            <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                className={`flex-1 cursor-pointer ${todo.completed ? 'line-through' : ''}`}
            >
                {todo.text}
            </span>
            <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 hover:text-red-700"
            >
                Remove
            </button>
        </div>
    );
};

export default TodoItem;
