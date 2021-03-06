import React, { Component } from 'react';
import { Button, FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Tappable from 'react-tappable';
import PropTypes from 'prop-types';
import Gallery from './Gallery';

class Explore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			items: []
		}
	}

	search() {
		//JSON FETCH FROM GOOGLE
		const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
		fetch(`${BASE_URL}${this.state.query}`, { method: `GET`} )
			.then(response => response.json())
			.then(json => {
				let { items } = json;
				this.setState({items})
			});
		// console.log('search', this.state.query);
	}

	render() {
		return (
			<div className='Explore'>
				<h2 className="white">Book Explorer!</h2>
				<FormGroup>
					<InputGroup>
						<FormControl 
							type='text' 
							placeholder='Search for a book' 
							onChange={event => this.setState({query: event.target.value})}
							onKeyPress={event => {
								if (event.key === 'Enter') {
									this.search();
								}
							}} 
						/>
						<InputGroup.Button>
							<Button onClick={() => this.search()} className="pointer">
								<Glyphicon glyph='search'></Glyphicon>
							</Button>
						</InputGroup.Button>
					</InputGroup>
				</FormGroup>
				<Gallery items={this.state.items}/>
			</div>
		)
	}
}

export default Explore;