import React from 'react';

export default class Catcher extends React.Component {
    constructor() {
        super();
        this.state={
            hasError: false
        }
    }
    componentDidCatch(error, info) {
        console.log('caught error', error, info);
    }
    static getDerivedStateFromError(props) {
        console.log('update error state', props);
        return {
            hasError: true
        }
    }
    render() {
        console.log('has error', this.state.hasError);
        if(this.state.hasError) {
        return (
            <div>There is an error</div> 
        );
        }  
        return this.props.children;
    }
}