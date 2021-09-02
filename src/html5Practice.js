import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import html5Slider from './html5Slider';
import './static/html5Form.css';

export default function html5Practice (props) {
    return (
        <>
        <BrowserRouter>
        <ul>
            <li>
            <Link to='/html5Slider'>html5Slider</Link>
            </li>
        </ul>
            <Route path='/html5Slider' component={html5Slider} />
        </BrowserRouter>
        <h1>Newsletter Registration</h1>
        <div>
            <progress value='4' max='5'></progress>
        </div>
        
        <form action='' method='post' encType='multipart/form-data' name='detailForm' id='form-register'>
        <fieldset>
            <legend>Personal Information</legend>
            <label><span>Full Name:</span><input type='text' id='name' name='fullName' placeholder='Full name' pattern='[a-zA-Z]{3-99}' required></input></label>
            <label><span>Address:</span><input type='text' id='address' name='address' placeholder='Address' required></input></label>
            <label><span>Email:</span><input type='email' id='email' name='emailId' placeholder='Email' required></input></label>
            <label><span>Phone Number:</span><input type='number' id='Phone' name='PhoneNumber' placeholder='Number' pattern='[0-9]{10-20}'></input></label>
        </fieldset>
        <fieldset>
        <legend>Company Details</legend>
            <label><span>Name:</span><input type='text' id='name' name='company' placeholder='Name' pattern=''></input></label>
            <label><span>Number of Employees:</span><input type='number' id='noOfEmployees' name='noOfEmp' placeholder='Employees Number' pattern='[0-9]{1-100}'></input></label>
            <label><span>Name:</span><input type='url' id='website' name='webUrl' placeholder='Website'></input></label>
            <label><span>Preferred Date:</span><input type='date' id='doj' name='dateofJoin'></input></label>
            <label><span>Color:</span><input type='color' id='symbol' name='signatureColor'></input></label>
        </fieldset>
        <fieldset>
        <legend>Other Info</legend>
        <label><span>Favourite War:</span><input type='text' id='favWar' name='favouriteWar' list='warList'></input></label>
        <datalist id='warList'>
            <option value='WW1'></option>
            <option value='WW2'></option>
            <option value='Corona'></option>
        </datalist>
        </fieldset>
        <input type='submit' value='Sign me Up'></input>
        <input type='hidden' value='Form details'></input>
        </form>
        </>
    );
}