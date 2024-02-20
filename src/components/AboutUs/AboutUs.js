import React from 'react'
import './AboutUs.css';
import {Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <div className='maincontainer'>
        <Typography variant='h3' style={{ margin:'0 0 3rem 0', fontWeight:'', fontFamily:'"Fredoka", sans-serif' }}>About us</Typography>
        {/* <hr /> */}
        <Typography className='main-content'>
            <Typography variant='h4'>IEEE</Typography>
            <Typography variant='subtitle1' style={{ margin:'0 0 2rem 0' }}>The Institute of Electrical and Electronics Engineers (IEEE), founded in 1884, boasts over 370,000 members across 160 countries. With a focus on electrical engineering, computer science, and related fields, IEEE publishes 30% of the related literature globally and sets crucial technical standards. Its student branch network fosters tomorrow's engineers. A not-for-profit organization, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. </Typography>

            <Typography variant='h4'>IEESB</Typography>
            <Typography variant='subtitle1' style={{ margin:'0 0 1rem 0' }}>
                The IEEE Student Branch at Tezpur University, proudly affiliated with the Kolkata section, serves as a dynamic hub for burgeoning engineers. Dedicated to empowering its members, the branch encompasses various facets including:</Typography>
            
            <Typography variant='h6'>Branch Administration:</Typography>
            <Typography variant='subtitle1'  style={{ margin:'0 0 1rem 0' }}>
                A well-structured leadership team ensures smooth functioning, fostering a vibrant community of learners.</Typography>
            
            <Typography variant='h6'>Branch Operations:</Typography>
            <Typography variant='subtitle1'  style={{ margin:'0 0 1rem 0' }}>
                From workshops and seminars to competitions and guest lectures, the branch curates a diverse range of activities that equip members with practical skills and theoretical knowledge.</Typography>

            <Typography variant='h6'>Fundraising: </Typography>
            <Typography variant='subtitle1'  style={{ margin:'0 0 1rem 0' }}>
                Collaborative efforts support branch activities and ensure continued growth, offering unique opportunities for personal development</Typography>

            <Typography variant='h6'>Awards and Achievements:</Typography>
            <Typography variant='subtitle1'  style={{ margin:'0 0 1rem 0' }}>
                Recognizing excellence, the branch celebrates the outstanding accomplishments of its members, inspiring future generations.</Typography>

        </Typography>
    </div>
  )
}

export default AboutUs