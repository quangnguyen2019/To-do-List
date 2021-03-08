import React, { useState, useEffect } from 'react';

import TodoItem from './TodoItem';
import HeaderInput from './HeaderInput';
import { 
    numTodosDone, 
    checkAllItem, 
    onKeyUp, 
    clickItem, 
    destroyItem 
} from './Functions';

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

    return(
        <div className="todo-list">
            <HeaderInput 
                todos={todos} 
                onClick={() => checkAllItem(todos, setTodos)}
                numTodosDone={numTodosDone}
                onKeyUp={(event) => onKeyUp(todos, setTodos, event)}
            />

            { todos.map((item, index) => 
                <TodoItem 
                    item={item} 
                    key={index}
                    onClickIcon={() => clickItem(todos, setTodos, index)}
                    onClickDestroy={() => destroyItem(todos, setTodos, index)}
                />
            )}
        </div>
    );
}