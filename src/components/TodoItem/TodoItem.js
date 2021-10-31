import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import './TodoItem.scss';

import checkCompleted from 'img/check-completed.svg';
import closeIcon from 'img/close.svg';

export default function TodoItem(props) {
    const { item, todos, setTodos, onClickIcon, onClickDestroy } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(item.title);

    useEffect(() => setTitle(item.title), [item]);

    const onKeyUp = (e) => {
        const value = e.target.value;
        const index = todos.indexOf(item);

        if (e.key === 'Enter' && value.trim() !== '') {
            setTodos([
                ...todos.slice(0, index),
                {
                    ...item,
                    title: value
                },
                ...todos.slice(index + 1)
            ]);
            setIsEditing(false);
        }
    };

    return(
        <div
            className={classNames("todo-item", {
                'todo-item-completed': item.completed && !isEditing
            })}
            onDoubleClick={() => setIsEditing(true)}
        >
            <img 
                className="icon" 
                onClick={!isEditing && onClickIcon} 
                src={checkCompleted} 
                alt='' 
            />
            {
                !isEditing ?
                    <p> {item.title} </p> :
                    <input 
                        className='todo-title'
                        type='text' 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        onKeyUp={onKeyUp}
                        autoFocus 
                        onFocus={e => e.target.select()} 
                        onBlur={() => setIsEditing(false)}
                        spellCheck='false'
                    />
            }
            {
                !isEditing &&
                <img 
                    className='close-icon'
                    onClick={onClickDestroy} 
                    src={closeIcon} 
                    alt='' 
                />
            }
        </div>
    );
}