import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function FlexForm (){
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
return (
    <form encType='multipart/form-data' action='/upload' method='POST'>
        <input name='inputfile' type='file'></input>
        <Button className='submit' type='submit' variant='contained' color='primary'>Submit</Button>
    </form>
);

}
