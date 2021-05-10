import React from 'react';
import classNames from 'classnames';

export default function FooterFilter(props) {
    const { 
        filterMode, setFilterMode, 
        todos, setTodos, 
        numTodosDone 
    } = props;

    const clearCompleted = () => {
        const arrTemp = todos.filter(item => !item.completed);
        setTodos(arrTemp);
    }

    return(
        <div className="footer">
            <span className="items-left"> 
                {todos.length} {todos.length > 1 ? 'items' : 'item'} left
            </span>

            <div className="filter">
                <button 
                    onClick={() => setFilterMode('all')}
                    className={classNames('filter-mode filter-all', {
                        'active': filterMode === 'all'
                    })}
                > 
                    All 
                </button>

                <button 
                    onClick={() => setFilterMode('active')}
                    className={classNames('filter-mode filter-active', {
                        'active': filterMode === 'active'
                    })}
                > 
                    Active 
                </button>

                <button 
                    onClick={() => setFilterMode('completed')}
                    className={classNames('filter-mode filter-completed', {
                        'active': filterMode === 'completed'
                    })}
                > 
                    Completed 
                </button>
            </div>

            {
                numTodosDone(todos) > 0 &&
                <span className='clear-completed' onClick={clearCompleted}> 
                    Clear completed 
                </span>
            }
        </div>
    );
}