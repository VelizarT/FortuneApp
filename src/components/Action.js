import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button onClick={props.onMakeDecision}>What should I do?</button>
        </div>
    );
};

export default Action;