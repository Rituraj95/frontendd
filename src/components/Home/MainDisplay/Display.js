import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import TUImage from '../../../resource/csed.jpg'
import TUImage2 from '../../../resource/tu-image-gate.jpeg';
import TUImage3 from '../../../resource/ieee-image.jpeg';
import TechImage from '../../../resource/testimg.jpg';
import './Display.css'


const Display = () => {
  return (
	<div className='' style={{ 
		margin:'0 1rem 0 0',
	}}>
		<Carousel>
			<Carousel.Item>
				<Image src={TUImage} className='carouselImg'/>
				<Carousel.Caption>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<Image src={TUImage2} className='carouselImg' />
				<Carousel.Caption>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<Image src={TUImage3} className='carouselImg' />
				<Carousel.Caption>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<Image src={TechImage} className='carouselImg'/>
				<Carousel.Caption>
				</Carousel.Caption>
			</Carousel.Item>

			{/* <Carousel.Item>
				<Image src={TUImage2} fluid style={{ 
					borderRadius:'15px',
					height:'45rem'
				}}/>
				<Carousel.Caption>
				<h3>First slide label</h3>
				<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item> */}
		
		</Carousel>

	</div>
    
)
}

export default Display