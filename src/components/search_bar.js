import React, { Component } from 'react';

export default class SearchBar extends Component {
	render() {
		return (
			<input formEncType="text" onChange={this.onInputChange} />
		);
	}

	onInputChange(event) {
		console.log(event.target.value);
	}

}
