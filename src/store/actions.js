export const changeText = text => dispatch => dispatch({
    type: 'CHANGE_TEXT',
    payload: text
});

export const submitForm = () => dispatch => {
    dispatch({
        type: 'SUBMIT',
        payload: new Promise((resolve, rej) => fetch('/submitForm').then((res) => {
            if(res.status !== 200) {
                throw new Error('There was an error');
            }    
            resolve(res.text());
        })
        .catch(error => {
            rej(error.toString());
        })
    )
    })
}
