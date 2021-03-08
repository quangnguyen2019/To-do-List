import React, { useState, useEffect } from 'react';

import TodoItem from './TodoItem';
import HeaderInput from './HeaderInput';

import './CSS/Components.css';

export default function TodoList() {
    // get to-do list from localStorage
    const todoList = JSON.parse(localStorage.getItem('todosArr'));

    const [todos, setTodos] = useState(
        todoList ? todoList : []
    );

    useEffect(
        () => {
            localStorage.setItem('todosArr', JSON.stringify(todos));
        }, 
        [todos]
    );

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

    const destroyItem = (index) => {
        setTodos([
            ...todos.slice(0, index),
            ...todos.slice(index + 1)
        ]);
    }

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
                {
                    title: value,
                    completed: false
                },
                ...todos
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
                    onClickIcon={() => clickItem(index)}
                    onClickDestroy={() => destroyItem(index)}
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