export const changeText = text => dispatch => dispatch({
    type: 'CHANGE_TEXT',
    payload: text
});

export const submitForm = () => dispatch => {
    dispatch({
        type: 'SUBMIT',
        payload: new Promise((resolve, rej) => {
                    fetch('/submitForm').then((res) => {
                        console.log('res', res);
                    if(res.status === 200) {
                        resolve(res.text());
                    } else {
                        rej(res.statusText);
                    }
            })
        })
        });
    };

