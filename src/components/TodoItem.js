import React from 'react';
import classNames from 'classnames';

import './CSS/Components.css';

export default function TodoItem(props) {
    const { item, onClick } = props;

    return(
        <div onClick={onClick} className={classNames("todo-item", {
            'todo-item-completed': item.completed
        })}> 
            {item.title} 
        </div>
    );
}