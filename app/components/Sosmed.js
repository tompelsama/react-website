import React, { Component } from 'react';
import { Grid, Col, Row, Image, Button } from 'react-bootstrap';

class Sosmed extends Component {
	render() {
		return (
			<div>
				<Grid className='sosmed-area'> 
					<Row>
						<Col xs={6} md={4} className='sosmed-icon'>
							<div>
								<Button bsStyle='link' href='https://github.com/tompelsama' target='_blank'><Image src='./assets/media/github-icon.png' responsive /></Button>
							</div>
						</Col>
						<Col xs={6} md={4} className='sosmed-icon'>
							<div>
								<Button bsStyle='link' href='https://www.linkedin.com/in/tommy-saputra-208a64103/' target='_blank'><Image src='./assets/media/linkedin-icon.png' responsive /></Button>
							</div>
						</Col>
						<Col xs={6} md={4} className='sosmed-icon'>
							<div>
								<Button bsStyle='link' href='https://twitter.com/tompelsama' target='_blank'><Image src='./assets/media/twitter.png' responsive /></Button>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default Sosmed;