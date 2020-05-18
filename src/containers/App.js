import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import './App.css';


class App extends Component{
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	onSearchChange = (event) =>{
		this.setState({ searchfield: event.target.value})
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(resource => resource.json())
		.then(users => {this.setState({robots: users})});
	}

	render(){
		const { robots, searchfield } = this.state;
		const matchedrobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})

		if (robots.length === 0){
			return <h1> Loading... </h1>
		}
		else{
			return(
			<div className = 'tc'>
				<h1 className='f1'> Robofriends </h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots = {matchedrobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		);
		}
		
	}
}

export default App;