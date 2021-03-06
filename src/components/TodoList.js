import React, { useState } from 'react';

import TodoItem from './TodoItem';
import HeaderInput from './HeaderInput';

import './CSS/Components.css';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { title: 'Đi Chơi', completed: true },
        { title: 'Nấu Ăn', completed: false },
        { title: 'Đi Dạo', completed: false },
    ]);

    const clickItem = (index) => {
        setTodos([
            ...todos.slice(0, index),
            {
                ...todos[index],
                completed: !todos[index].completed
            },
            ...todos.slice(index + 1)
        ]);
    };

    const checkAllItem = () => {
        setTodos(
            todos.length === numTodosDone(todos) ?
                todos.map(item => { return { ...item, completed: false }}) :
                todos.map(item => { return { ...item, completed: true }})
        );
    }

    const onKeyUp = (event) => {
        let value = event.target.value;

        if (event.key === "Enter" && value.trim() !== '') {
            setTodos([
                ...todos,
                {
                    title: value,
                    completed: false
                }
            ]);
        }
    }

    return(
        <div className="todo-list">
            <HeaderInput 
                todos={todos} 
                onClick={checkAllItem} 
                numTodosDone={numTodosDone}
                onKeyUp={onKeyUp}
            />

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

function numTodosDone(arr) {
    return arr.reduce((sum, item) =>
        item.completed ? sum + 1 : sum
    , 0);
}