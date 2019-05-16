import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <p>Options Component here</p>
            <button onClick={props.onRemoveAll}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {
                props.options.map((option) => (
                         <Option 
                            key={option} 
                            option={option} 
                            onRemoveOption={props.onRemoveOption} />
                ))
            }
            
        </div>
    );
};

export default Options;