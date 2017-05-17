import React, { Component } from 'react';
import { Media } from 'react-bootstrap';

class Experience extends Component {
	render() {
		return (
			<div>
				<h3 data-aos='fade-left' data-aos-delay='300'>Professional Experience</h3>
				<div>
				<Media className='border' data-aos='fade-left' data-aos-delay='400'>
					<Media.Left>
						<img src='./assets/media/vigilantIT.png' alt='Vigilant.IT' />
					</Media.Left>
					<Media.Body>
						<Media.Heading>
							<a href="https://vigilant.it" target="_blank" className='exper-link'>Vigilant.IT</a>
						</Media.Heading>
						<p><strong>Web Developer</strong>, <em>Nov 2016 - May 2017</em></p>
						<p>Description</p>
					</Media.Body>
				</Media>
				</div>

				<h3 data-aos='fade-left' data-aos-delay='600'>Clients</h3>
				<div>
				<Media className='border' data-aos='fade-left' data-aos-delay='800'>
					<Media.Left>
						<img src='./assets/media/marchand.png' alt='Marchandwatches' />
					</Media.Left>
					<Media.Body>
						<Media.Heading>
							<a href="https://Marchandwatches.com" target="_blank" className='exper-link'>Marchand Watch Company</a>
						</Media.Heading>
						<p><strong>Freelance Web Developer</strong>, <em>March 2017 - Apr 2017</em></p>
						<p>Description</p>
					</Media.Body>
				</Media>
				<Media className='border' data-aos='fade-left' data-aos-delay='1200'>
					<Media.Left>
						<img src='./assets/media/birdbrain.png' alt='BirdBrain' />
					</Media.Left>
					<Media.Body>
						<Media.Heading>
							<a href="https://birdbrain.io/VGW/" target="_blank" className='exper-link'>BirdBrain</a>
						</Media.Heading>
						<p><strong>Freelance Web Developer</strong>, <em>Feb 2017</em></p>
						<p>Description</p>
					</Media.Body>
				</Media>
				<Media className='border' data-aos='fade-left' data-aos-delay='1600'>
					<Media.Left>
						<img src='./assets/media/landpearl.png' alt='Landpearl' />
					</Media.Left>
					<Media.Body>
						<Media.Heading>
							<a href="http://landpearl.com.au" target="_blank" className='exper-link'>Landpearl Real Estate Developer</a>
						</Media.Heading>
						<p><strong>Freelance Web Developer</strong>, <em>Dec 2016</em></p>
						<p>Description</p>
					</Media.Body>
				</Media>
				</div>
				
			</div>
		)
	}
}

export default Experience;