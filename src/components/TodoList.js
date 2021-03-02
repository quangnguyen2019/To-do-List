import React, { useState } from 'react';

import TodoItem from './TodoItem';

import './CSS/Components.css';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { title: 'Đi Chơi', completed: true },
        { title: 'Nấu Ăn', completed: false },
        { title: 'Đi Dạo', completed: false },
    ]);

    function clickItem(index) {
        setTodos([
            ...todos.slice(0, index),
            {
                ...todos[index],
                completed: !todos[index].completed
            },
            ...todos.slice(index + 1)
        ]);
    };
    
    return(
        <div className="todo-list">
            <div className="header">
                <input type="text" placeholder="What needs to be done?" />
            </div>

            { todos.map((item, index) => 
                <TodoItem 
                    item={item} 
                    key={index} 
                    onClick={() => clickItem(index)}
                />
            )}
        </div>
    );
}
