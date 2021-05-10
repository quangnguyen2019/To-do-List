import React, { useState } from 'react';
import classNames from 'classnames';

import checkAll from '../img/check-all.svg';

export default function HeaderInput(props) {
    const [inputValue, setInputValue] = useState('');
    const { todos, onClick, onKeyUp, numTodosDone } = props;
    

    const onKeyUpInput = (e) => {
        onKeyUp(e);

        if (e.key === "Enter" && 
            e.target.value.trim() !== '') 
        {
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
        <div className="header">
            <img 
                src={checkAll} 
                className={checkAllClassNames}
                onClick={onClick}
                alt=''
            />

            <input 
                type="text" 
                placeholder="What needs to be done?" 
                onKeyUp={onKeyUpInput}
                value={inputValue}
                onChange={onChange}
                autoFocus
                spellCheck='false'
            />
        </div>
    );
}