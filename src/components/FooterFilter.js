import React, { useState } from 'react';

export default function(props) {
    const { numItems } = props;

    return(
        <div className="footer">
            <span className="items-left"> 
                {numItems} {numItems > 1 ? 'items' : 'item'} left
            </span>
        </div>
    );
}