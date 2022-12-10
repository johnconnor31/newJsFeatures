import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';

function Counters(props) {
    const { dispatch, count } = props;
    return (
        <div>
            <div style={{ marginTop: 20, display: 'flex', justifyContent:'space-between' }}>
                <Button variant='contained' onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</Button>
                <Button variant='contained' onClick={() => dispatch({ type: 'INCREMENT_ASYNC' })}>Increment Async</Button>
                <Button variant='contained' onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>{count}</div>
        </div>
    )
};

const mapState = a => a;

export default connect(mapState)(Counters);
