import React, { Component } from 'react';
import Global from './Global';

class Loader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({loading: false})
		}, 1000)
	}

	render() {
		let content = this.state.loading ?
		<div id='loader' /> : <Global />
		return (
			<div>
				{content}
			</div>
		)
	}
}

export default Loader;