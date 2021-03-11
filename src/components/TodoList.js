import React, { useState, useEffect } from 'react';

import './CSS/Components.css';

import TodoItem from './TodoItem';
import HeaderInput from './HeaderInput';
import FooterFilter from './FooterFilter';
import { 
    numTodosDone, 
    checkAllItem, 
    onKeyUp, 
    clickItem, 
    destroyItem 
} from './Functions';

export default function TodoList() {
    // get to-do list from localStorage
    const todoList = JSON.parse(localStorage.getItem('todosArr'));

    const [todos, setTodos] = useState(
        todoList ? todoList : []
    );
    const [filterMode, setFilterMode] = useState('all');

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

            {   
                filterMode === 'all' &&
                todos.map((item, index) => {
                    return (
                        <TodoItem 
                            item={item} 
                            key={index}
                            onClickIcon={() => clickItem(todos, setTodos, index)}
                            onClickDestroy={() => destroyItem(todos, setTodos, index)}
                        />
                    );
                })
            }
            {   
                filterMode === 'active' &&
                todos.map((item, index) => {
                    if (!item.completed) {
                        return (
                            <TodoItem 
                                item={item} 
                                key={index}
                                onClickIcon={() => clickItem(todos, setTodos, index)}
                                onClickDestroy={() => destroyItem(todos, setTodos, index)}
                            />
                        );
                    }
                    return true;
                })
            }
            {   
                filterMode === 'completed' &&
                todos.map((item, index) => {
                    if (item.completed) {
                        return (
                            <TodoItem 
                                item={item} 
                                key={index}
                                onClickIcon={() => clickItem(todos, setTodos, index)}
                                onClickDestroy={() => destroyItem(todos, setTodos, index)}
                            />
                        );
                    }
                    return true;
                })
            }

            <FooterFilter 
                numItems={todos.length} 
                filterMode={filterMode}
                setFilterMode={setFilterMode}
            />
        </div>
    );
}