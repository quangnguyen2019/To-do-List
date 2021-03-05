import React from 'react';
import classNames from 'classnames';

import './CSS/Components.css';

import circle from '../img/circle.svg';
import checkCompleted from '../img/check-completed.svg';

export default function TodoItem(props) {
    const { item, onClick } = props;
    const src = item.completed ? checkCompleted : circle;

    return(
        <div className={classNames("todo-item", {
            'todo-item-completed': item.completed
        })}>
            <img className="icon" onClick={onClick} src={src} alt='' />
            <p>{item.title}</p>
        </div>
    );
}