import React, { Component } from 'react';
import { Grid, Col, Row, Image, Button, Glyphicon } from 'react-bootstrap';

class Contact extends Component {
	render() {
		return (
			<div className='contact-addr'>
				<div>
					<Glyphicon glyph='envelope' className='white'></Glyphicon>
					<p className='address'>&nbsp; <a href='mailto:contact@tommysaputra.com' target='_blank' className='mail'>contact@tommysaputra</a></p>
				</div>
				<div>
					<Glyphicon glyph='earphone' className='white'></Glyphicon>
					<p className='address'>&nbsp; 0479195517</p>
				</div>
				<div>
					<Glyphicon glyph='home' className='white'></Glyphicon>
					<p className='address'>&nbsp; 5709/91-93 Liverpool St, NSW Sydney 2000</p>
				</div>
			</div>
		)
	}
}

export default Contact;