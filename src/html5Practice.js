import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import html5Slider from './html5Slider';
import html5Form from './html5Form';
import twitterFeed from './twitterFeed';
import './static/html5Form.css';

export default function html5Practice (props) {
    return (
        <>
        <BrowserRouter>
        <ul>
            <li>
            <Link to='/html5Slider'>Slider</Link>
            </li>
            <li>
            <Link to='/html5Form'>Form</Link>
            </li>
            <li>
            <Link to='/twitterFeed'>Twitter feed</Link>
            </li>
        </ul>
            <Route exact path='/html5Slider' component={html5Slider} />
            <Route exact path='/html5Form' component={html5Form} />
            <Route path='/' component={twitterFeed} />
        </BrowserRouter>
        </>
    );
}