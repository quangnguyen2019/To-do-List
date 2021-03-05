import React, { useState } from 'react';
import classNames from 'classnames';

import TodoItem from './TodoItem';

import './CSS/Components.css';

import checkAll from '../img/check-all.svg';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { title: 'Đi Chơi', completed: true },
        { title: 'Nấu Ăn', completed: false },
        { title: 'Đi Dạo', completed: false },
    ]);
    const [inputValue, setInputValue] = useState('');

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

            setInputValue('');
        }
    }

    const onChange = (e) => {
        setInputValue(e.target.value);
    }

    const checkAllClassNames = classNames('icon', {
        'all-completed': numTodosDone(todos) === todos.length,
        'no-item': todos.length === 0
    })
    
    return(
        <div className="todo-list">
            <div className="header">
                <img 
                    src={checkAll} 
                    className={checkAllClassNames}
                    onClick={checkAllItem}
                    alt=''
                />
                <input 
                    type="text" 
                    placeholder="What needs to be done?" 
                    onKeyUp={onKeyUp}
                    value={inputValue}
                    onChange={onChange}
                />
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

function numTodosDone(arr) {
    return arr.reduce((sum, item) =>
        item.completed ? sum + 1 : sum
    , 0);
}