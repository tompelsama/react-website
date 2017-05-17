import React, { Component } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';

class Logo extends Component {
	render() {
		return (
			<div className='container-100'>
				<Grid className='container-100'> 
					<Row className='logo'>
						<Col xs={6} md={4} className='pad-skills'>
							<div data-aos='fade-up' data-aos-delay='300'>
								<Image src='./assets/media/html.png' responsive />
							</div>
						</Col>
						<Col xs={6} md={4} className='pad-skills'>
							<div data-aos='fade-up' data-aos-delay='600'>
								<Image src='./assets/media/css.png' responsive />
							</div>	
						</Col>
						<Col xs={6} md={4} className='pad-skills'>
							<div data-aos='fade-up' data-aos-delay='900'>
								<Image src='./assets/media/js.png' responsive />
							</div>
						</Col>
					
						<Col xs={6} md={4} className='pad-skills'>
							<div data-aos='fade-up' data-aos-delay='1200'>
								<Image src='./assets/media/bootstrap.png' responsive />
							</div>
						</Col>
						<Col xs={6} md={4} className='pad-skills'>
							<div data-aos='fade-up' data-aos-delay='1500'>
								<Image src='./assets/media/github.png' responsive />
							</div>
						</Col>
						<Col xs={6} md={4} className='pad-skills'>
							<div data-aos='fade-up' data-aos-delay='1800'>
								<Image src='./assets/media/ps.png' responsive />
							</div>
						</Col>

						<Col xs={6} md={4} className='pad-skills'>
							<div data-aos='fade-up' data-aos-delay='2100'>
								<Image src='./assets/media/windows.png' responsive />
							</div>
						</Col>
						<Col xs={6} md={4} className='pad-skills'>
							<div data-aos='fade-up' data-aos-delay='2400'>
								<Image src='./assets/media/os-x.png' responsive />
							</div>
						</Col>
						<Col xs={6} md={4} className='pad-skills'>
							<div data-aos='fade-up' data-aos-delay='2700'>
								<Image src='./assets/media/wp.png' responsive />
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default Logo;