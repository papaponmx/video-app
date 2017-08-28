import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ''};
	}


	render() {
		return (
			<div className="search-bar">
				<input 
				formEncType="text" onChange={(event) => this.setState({ term: event.target.value }) } />
				</div>
		);
	}

}
