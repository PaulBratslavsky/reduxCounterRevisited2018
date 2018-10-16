import React from 'react';

const Counter = (props) => {
    return(
        <div>
            <h1>This Is The Counter</h1>
            <h2>{props.count}</h2>
            <button onClick={props.add}>Increment</button>
            <button onClick={props.remove}>Decrement</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    );
}

export default Counter;

