import React, { Component } from 'react';

class Logger extends Component {
    constructor(props) {
        super(props);
        console.log('construtor running')
    }
    componentWillMount() {
        console.log('component will mount method');
    }
    componentDidMount() {
        console.log('component did mount method');
    }
    componentWillReceiveProps(nextProps){
        console.log('next props: ',  );
    }
    shouldComponentUpdate(newProps, newState){
        console.log('should component update');
        console.log('new Props: ', newProps);
        console.log('new state: ',newState);
        return true;
    }

    componentWillUpdate(newProps, newState){
        console.log('component will update');
        console.log('new Props: ', newProps);
        console.log('new state: ',newState);
    }
    componentDidUpdate(oldProps, oldState){
        console.log('component did update');
        console.log('old Props: ', oldProps);
        console.log('old state: ',oldState);
    }

    componentWillUnmount(){
        console.log('component will unmount trigered');
    }

    render() {
        console.log('render method');
        return (
            <h1>{this.props.time}</h1>
        )
    }
}
export default Logger;