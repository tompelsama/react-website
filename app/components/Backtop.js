import React, { Component } from 'react';
let Scroll = require('react-scroll');
let scroll = Scroll.animateScroll;

class Backtop extends Component {
	render() {
		return (
			<a className='top' onClick={() => scroll.scrollToTop()}>
				<img src='./assets/media/arrow-up.png' alt='arrow' className='arrow-up' />	
			</a>
		)
	}
}

export default Backtop;