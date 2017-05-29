import React, { Component } from 'react';
import Loader from './Loader';
import Experience from './Experience';
import Skills from './Skills';
import Logo from './Logo';
import Explore from './Explore';
import Contact from './Contact';
import Sosmed from './Sosmed';
import Backtop from './Backtop';

let Scroll = require('react-scroll');
let scroller = Scroll.scroller;
let Element = Scroll.Element;

class Global extends Component {
	render() {
		return (
			<div className='animate-bottom'>

				<div className='front' onClick={() => scroller.scrollTo('about-me', {
					smooth: true
				})}>
					<div className='divider' />
					<div className="text-container">
						<div className='name'>
							<h2 className='pad-5'>Tommy Saputra</h2>
						</div>
						<div className='title'>
							<h3 className='pad-8'>Front End Developer</h3>
						</div>
					</div>
				</div>

				<div className='wrapper' onClick={() => scroller.scrollTo('my-experience', {
					smooth: true
				})}>
					<Element name='about-me' />
					<div id='about'>
						<div className='container-40 white'>
							<h1>Hello world!</h1>
							<p>
								I&#39;m Tommy Saputra, an Indonesian guy living in Sydney, Australia.
							</p>
							<p>
								I currently looking for a dream job, place where I can develop my self and
								create something cool. I work as a Web Developer Freelance at the moment.
							</p>
							<p>
								Please say hi if you see me and wait for my next project...
							</p>
						</div>
					</div>
					<div className='about-photo'>
							<img src="./assets/media/me.jpg" alt='my picture' className='photo'/>
					</div>
				</div>

				<div className='wrapper no-scroll'>
					<Element name='my-experience' />
					<div className='container-40 align-center' onClick={() => scroller.scrollTo('my-skill', {
					smooth: true
				})}>
						<img src="./assets/media/user.png" alt='experience' className='middle-history'/>
					</div>
					<div id='experience'>
						<div className='container-10 white'>
						<Experience />
						</div>
					</div>
				</div>

				<div className='wrapper no-scroll' onClick={() => scroller.scrollTo('book-search', {
					smooth: true
				})}>
					<Element name='my-skill' />
					<div id='skills'>
						<div className='container-20 white'>
						<Skills />
						</div>
					</div>
					<div className='about-photo'>
						<div className='middle'>
							<Logo />
						</div>
					</div>
				</div>

				<div className='wrapper'>
					<Element name='book-search' />
					<div className='about-photo' onClick={() => scroller.scrollTo('contact', {
						smooth: true
					})}>
						<div className="circles mid-react">
						  <div></div>
						  <div></div>
						  <div></div>
						  <span></span>
						</div>
						<h3 className='react-desc'>React</h3>
					</div>
					<div id='experiment'>
						<Explore />
					</div>
				</div>

				<div className='footer'>
					<Element name='contact' />
					<div className='divider-bottom' />
					<div className='front-footer'>
						<div id='contact'>
							<Contact />
							<Sosmed />
						</div>
					</div>
					<div className='back-top'>
						<Backtop />
					</div>
				</div>
			</div>
		)
	}
}

export default Global;