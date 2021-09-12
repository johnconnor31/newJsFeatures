import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store/reducer';
import { Provider } from 'react-redux'; 
import Counters from './Counters';
import "./static/style.css";

function MyFunc() {
    return(
        <Provider store={Store}>
        <div className='myHeading'>
            Hello world with webpack
        </div>
        <Counters />
        </Provider>
    )
}

ReactDOM.render(
    <MyFunc />,
  document.getElementById('root')
);