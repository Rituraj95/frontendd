import React from 'react'
import './HomePage.css';
import Display from './MainDisplay/Display';
import NewsBox from './NotificationBox/NewsBox';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = ({newsItems, setSelectedNewsID}) => {
  return (
	<div className='content-box'>
		<div className='carousal'>
			<Display />
			
		</div>
		<div className='newsBox'>
			<NewsBox newsItems={newsItems} setSelectedNewsID={setSelectedNewsID} />
			
		</div>
	</div>
  )
}

export default HomePage



