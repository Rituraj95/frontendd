import React from 'react'
import './NewsDetails.css';
import {Typography, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

const NewsDetail = ({ newsItems, selectedNewsID }) => {

    return (
        <div className='maincontainer'>
            <Typography variant='h3' style={{ margin:'0 0 3rem 0', fontWeight:'', fontFamily:'"Fredoka", sans-serif' }}>News and Notifications</Typography>
            {/* <hr /> */}
            <Typography className='main-content'>
                <Typography variant='h4' style={{ marginBottom:'2rem' }}>{newsItems[selectedNewsID].title}</Typography>
                <Typography variant='subtitle1' style={{ margin:'0 0 2rem 0' }}>
                    {newsItems[selectedNewsID].body}
                </Typography>

            </Typography>
        </div>
    )
}

export default NewsDetail