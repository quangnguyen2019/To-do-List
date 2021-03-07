import React from 'react';
import classNames from 'classnames';

import './CSS/Components.css';

import circle from '../img/circle.svg';
import checkCompleted from '../img/check-completed.svg';
import closeIcon from '../img/close.svg';

export default function TodoItem(props) {
    const { item, onClickIcon, onClickDestroy } = props;
    const src = item.completed ? checkCompleted : circle;

    return(
        <div className={classNames("todo-item", {
            'todo-item-completed': item.completed
        })}>
            <img className="icon" onClick={onClickIcon} src={src} alt='' />
            <p>{item.title}</p>
            <img className='close-icon' onClick={onClickDestroy} src={closeIcon} alt='' />
        </div>
    );
}