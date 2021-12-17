import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import Store from './store/reducer';
import { Provider } from 'react-redux';
import Counters from './Counters';
import MultiAutoComplete from 'multiautocomplete';
import Button from '@material-ui/core/Button';
import "./static/style.css";

const options = [
    {
        "name": "Assignee",
        "opts": [
            "Sairam Singireesu",
            "ramya Maredi",
            "Elon Musk",
            "Jeff Bezos"
        ]
    },
    {
        "name": "reporter",
        "opts": [
            "Sairam Singireesu",
            "ramya Maredi",
            "Elon Musk",
            "Jeff Bezos"
        ]
    },
    {
        "name": "status",
        "opts": [
            "Open",
            "In Progress",
            "In Code Review",
            "Resolved",
            "Verified",
            "Closed"
        ]
    },
    {
        "name": "Updated Date",
        "type": "Date"
    },
    {
        "name": "Created Date",
        "type": "Date"
    }
];

if ('navigator' in window) {
    navigator.serviceWorker.register('service-worker.js')
        .then(reg => console.log('registered sw', reg))
        .catch(err => console.log('error registering sw', err))
}

function MyFunc() {
    console.log('window', window.QW);
    const [subOptions, setSubOptions] = React.useState([]);
    const buttonAction = action => () => {
        console.log('get diff');
        if(action === 'getDifference') {
            window.QW.sendQuery(action, Math.floor(Math.random() * 100), Math.floor(Math.random() * 100));
        } else {
            window.QW.sendQuery(action, Math.floor(Math.random()*10));
        }
    };
    return (
        <Provider store={Store}>
            <div className='myHeading'>
                Hello world with webpack
            </div>
            <MultiAutoComplete options={options} subOptions={subOptions} changeSubOptions={setSubOptions} />
            <Counters />
            <div style={{ marginTop: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    The below buttons use web workers
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Button onClick={buttonAction('getDifference')} variant='contained' color='secondary'>Get Difference</Button>
                    <Button onClick={buttonAction('waitSometime')} variant='contained' color='secondary'>Wait some time</Button>
                </div>
                <div className='printHere'>
                </div>
            </div>
        </Provider>
    )
}

ReactDOM.render(
    <MyFunc />,
    document.getElementById('root')
);