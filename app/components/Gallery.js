import React, { Component } from 'react';

class Gallery extends Component {
	render() {
		
		let alternate = 'http://www.underconsideration.com/brandnew/archives/google_broken_image_00_b_logo_detail.gif';

		return (
			<div>
			{
				// list of items
				this.props.items.map ((item, index) => {
					let {title, imageLinks, infoLink} = item.volumeInfo;
					return (
						<a 
							key={index} 
							className='book'
							href={infoLink}
							target='_blank'>
								<img 
								src={imageLinks !== undefined ? imageLinks.thumbnail : alternate} 
								alt="book image"
								className='book-img'
								/>
								<div className='book-text'>
									{title}
								</div>
						</a>
					)
				})
			}
			</div>
		)
	}
}

export default Gallery;