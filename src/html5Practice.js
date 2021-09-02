import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import html5Slider from './html5Slider';
import html5Form from './html5Form';
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
        </ul>
            <Route path='/html5Form' component={html5Form} />
            <Route path='/' component={html5Slider} />
        </BrowserRouter>
        </>
    );
}