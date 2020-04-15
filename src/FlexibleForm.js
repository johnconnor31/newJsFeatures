import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { changeText, submitForm } from './store/actions';

function FlexForm (props){
    console.log('props are', props);
    function makeAmount(amount, coins, i) {
        if(amount === 0) {
            return 1;
        }
        if(amount<0) {
            return 0;
        }
        if(i=== coins.length)
        return 0;
        return makeAmount(amount-coins[i], coins, i) + makeAmount(amount, coins, i+1); 
    }

    function dynamicChange(amount, coins){
        const tmp = new Array(amount+1).fill();
        const result = tmp.map(() => new Array(coins.length+1));
        console.log('result', result);
        
        for(let i=0;i<=amount;i++) {
            result[i][0] = 0
        }

        for(let i=0;i<=coins.length;i++) {
            result[0][i] = 1;
        }

        for(let i=1;i<=amount;i++){
            for(let j=1;j<=coins.length;j++) {
                if(i>=coins[j-1]) {
                    result[i][j] = result[i-coins[j-1]][j] + result[i][j-1];
                } else {
                    result[i][j] = result[i][j-1];
                }
            }
        }
        return result;
    }

    console.log('count of change combinations for amount', makeAmount(10, [1,2,3,4],0));
    console.log('count of change combinations for amount', dynamicChange(10, [1,2,3,4],0));
    const textChange = (e) => {
        props.changeText(e.target.value);
    };
    const formSubmit = () => {
        props.submitForm();
    }
return (
    <>
    <div className='menu'>
        <div className='menuItem'>WantMore?</div>
        <div className='menuItem'>PlayGames</div>
        <div className='menuItem'>AboutMe</div>
        <div className='menuItem'>Stuff</div>
    </div>
    <div id='inputForm' >
        <TextField onChange={textChange} 
        autoComplete= {"abc def"}
        helperText={props.error &&'Please enter text'}
        value={props.textVal || ''} />
        <Button className='submit' type='submit' variant='contained' color='primary' onClick={formSubmit}>Submit</Button>
        <div className='submitResponse'>{props.pendingSubmit ? 'Submitting form' : props.submitResponse}</div>
    </div>
    <div className='flexContainer'>
        <div className='flexDiv1'>1</div>
        <div className='flexDiv2'>2</div>
        <div className='flexDiv3'>3</div>
        <div className='flexDiv4'>4</div>
        <div className='flexDiv5'>5</div>
        <div className='flexDiv6'>6</div>
        <div className='flexDiv7'>7</div>
    </div>
    </>
);
}

const mapStateToProps = (state) => {
    return { ...state};
}

export default connect(mapStateToProps, { changeText, submitForm })(FlexForm);
