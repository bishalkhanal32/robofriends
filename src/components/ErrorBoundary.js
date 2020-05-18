import React, { Component } from 'react';

class ErrorBoundary extends Component{
	constructor(props){
		super(props);
		this.state = {
			haserror: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true })
	}	


	render(){
		if (this.state.haserror){
			return (<h1> Ooops, This is not good </h1>);
		}
		else{
			return this.props.children;
		}
	}
}

export default ErrorBoundary;