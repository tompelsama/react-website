import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import Slider from 'react-slick';

class Experience extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div>
				<h3 data-aos='fade-left' data-aos-delay='300' data-aos-once='true' className="exper-title">Professional Experience</h3>
				<div>
				<Media className='border' data-aos='fade-left' data-aos-delay='400' data-aos-once='true'>
					<Media.Left>
						<img src='./assets/media/vigilantIT.png' alt='Vigilant.IT' />
					</Media.Left>
					<Media.Body>
						<Media.Heading>
							<a href="https://vigilant.it" target="_blank" className='exper-link'>Vigilant.IT</a>
						</Media.Heading>
						<p><strong>Web Developer</strong>, <em>Nov 2016 - May 2017</em></p>
						<p>
							Vigilant.IT gave me an opportunity to learn and grow in IT working environment.
							My job here was to recreate and redesign Vigilant.IT&#39;s website.
							The website used WordPress including HTML, CSS, Javascript, and PHP. 
						</p>
					</Media.Body>
				</Media>
				</div>

				<h3 data-aos='fade-left' data-aos-delay='600' data-aos-once='true' className="exper-title">Clients</h3>
				
				<div>
					<Slider {...settings}>
						<div>
							<Media className='border' data-aos='fade-left' data-aos-delay='800' data-aos-once='true'>
								<Media.Left>
									<img src='./assets/media/marchand.png' alt='Marchandwatches' className="align-center"/>
								</Media.Left>
								<Media.Body>
									<Media.Heading>
										<a href="https://Marchandwatches.com" target="_blank" className='exper-link'>Marchand Watch Company</a>
									</Media.Heading>
									<p><strong>Freelance Web Developer</strong>, <em>March 2017 - Apr 2017</em></p>
									<p>
										Marchand Watch Company was one of the successful campaign at Kickstarter.
										They sell a modern and retro watch inspired by a motor racing.
										I was introduced to the owner of this cool company and he trusted me to edited and rebuild his website.
										My first task here is to edit and take over the website from previous developer.
										After the campaign successful, I rebuild the website to become an e-commerce website.
									</p>
									<p>
										I setup the domain, hosting, email server, <a href="https://www.shopify.com.au/" target="_blank">Shopify</a>.
										I also customise the template and the interface.
									</p>
								</Media.Body>
							</Media>
						</div>
						<div>
							<Media className='border'>
								<Media.Left>
									<img src='./assets/media/birdbrain.png' alt='BirdBrain' className="align-center" />
								</Media.Left>
								<Media.Body>
									<Media.Heading>
										<a href="https://birdbrain.io/VGW/" target="_blank" className='exper-link'>BirdBrain</a>
									</Media.Heading>
									<p><strong>Freelance Web Developer</strong>, <em>Feb 2017</em></p>
									<p>
										While I was looking for a permanent job, BirdBrain gave me the opportunity to build a website for <a href="https://birdbrain.io/VGW/" target="_blank">Virtual Gaming Worlds</a>.
										The website used WordPress, HTML, CSS, and PHP. I also have to make sure the website is responsive and follow the requirements.
										BirdBrain want me to applied Bourbon Neat to this project rather than 
										others framework such as Bootstrap or Foundation.
									</p>
									<p>
										This is the first time I applied <a href="http://gulpjs.com/" target="_blank">Gulp</a>
										, <a href="http://sass-lang.com/" target="_blank">Sass</a>
										, and <a href="http://neat.bourbon.io/" target="_blank">Bourbon Neat</a> to the professional environment.
										It&#39;s my pleasure to work with BirdBrain.
									</p>
								</Media.Body>
							</Media>
						</div>
						<div>
							<Media className='border'>
								<Media.Left>
									<img src='./assets/media/landpearl.png' alt='Landpearl' className="align-center"/>
								</Media.Left>
								<Media.Body>
									<Media.Heading>
										<a href="http://landpearl.com.au" target="_blank" className='exper-link'>Landpearl Real Estate Developer</a>
									</Media.Heading>
									<p><strong>Freelance Web Developer</strong>, <em>Dec 2016</em></p>
									<p>
										Landpearl let me experience my first freelance job as a Web Developer.
										My job here is to recreate Landpearl&#39;s website by communicated with their designer.
										It tooks me 2 months to working on this project. I learned how to build a website from ground-up such as
										setting up a web server, domain, and WordPress.
									</p>
								</Media.Body>
							</Media>
						</div>
					</Slider>
				</div>
			</div>
		)
	}
}

export default Experience;