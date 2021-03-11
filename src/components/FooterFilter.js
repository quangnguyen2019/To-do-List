import React from 'react';
import classNames from 'classnames';

export default function FooterFilter(props) {
    const { filterMode, setFilterMode, numItems } = props;

    const filterAll = () => {
        setFilterMode('all');
    }

    const filterActive = () => {
        setFilterMode('active');
    }

    const filterCompleted = () => {
        setFilterMode('completed');
    }

    return(
        <div className="footer">
            <span className="items-left"> 
                {numItems} {numItems > 1 ? 'items' : 'item'} left
            </span>

            <div className="filter">
                <button 
                    onClick={filterAll}
                    className={classNames('filter-mode filter-all', {
                        'active': filterMode === 'all'
                    })}
                > 
                    All 
                </button>

                <button 
                    onClick={filterActive}
                    className={classNames('filter-mode filter-active', {
                        'active': filterMode === 'active'
                    })}
                > 
                    Active 
                </button>

                <button 
                    onClick={filterCompleted}
                    className={classNames('filter-mode filter-completed', {
                        'active': filterMode === 'completed'
                    })}
                > 
                    Completed 
                </button>
            </div>
        </div>
    );
}