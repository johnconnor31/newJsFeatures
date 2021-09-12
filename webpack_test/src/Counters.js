import React from 'react';
import { connect } from 'react-redux';

function Counters(props) {
    const { dispatch, count } = props;
    return (
        <div>
            <div>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
                <button onClick={() => dispatch({ type: 'INCREMENT_ASYNC' })}>Increment Async</button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            </div>
            <div>{count}</div>
        </div>
    )
};

const mapState = a => a;

export default connect(mapState)(Counters);
