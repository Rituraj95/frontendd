import React from 'react'
import './NewsBox.css'
import { Button, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const NewsBox = ({newsItems, setSelectedNewsID}) => {
    const navigate = useNavigate();

    const gotoDetailNews =(newsID)=>{
        setSelectedNewsID(newsID);
        navigate('/sample_news');
    }

    return (
        <div className="newsfeed-container">
            <h4 className='newsfeed-header'>Information Bulletin</h4>
            <div className='newsfeed-boundary'>
            <div className="newsfeed">
                {newsItems.map((item, index) => (
                <Card className='cardStyle'>
                {/* <Card.Header as="h5">Featured</Card.Header> */}
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    {/* {
                    item.body.length > 50 ? 
                    (<Card.Text>
                        {item.body.substring(0,50)}
                    </Card.Text>):(<Card.Text>
                        {item.body}
                    </Card.Text>)
                    
                    } */}
                    <Card.Text>
                        {item.body.substring(0,100) + '...'}
                    </Card.Text>
                    
                    {/* <Button variant="primary" style={{ backgroundColor:'#0a75ad' }}>read more...</Button> */}
                    <Button className='button' onClick={e=>gotoDetailNews(item.id)}>Read more</Button>
                </Card.Body>
                </Card>
                ))}
            </div>

            </div>
        </div>
    )
}

export default NewsBox