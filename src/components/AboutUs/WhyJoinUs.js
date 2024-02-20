import React from 'react'
import './WhyJoinUs.css';
import {Typography, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

const WhyJoinUs = () => {
  return (
    <div className='maincontainer'>
        <Typography variant='h3' style={{ margin:'0 0 3rem 0', fontWeight:'', fontFamily:'"Fredoka", sans-serif' }}>Join us</Typography>
        {/* <hr /> */}
        <Typography className='main-content'>
            <Typography variant='h4'>Why should one join IEEE?</Typography>
            <Typography variant='subtitle1' style={{ margin:'0 0 2rem 0' }}>
                <List>
                    <ListItem disablePadding>
                        1. Networking opportunities with students, researchers, and professionals in your field.
                    </ListItem>
                    <ListItem disablePadding>2. Access to resources such as conferences, journals and other publications.</ListItem> 
                    <ListItem disablePadding>3. Professional development through seminars, workshops, and training sessions.</ListItem> 
                    <ListItem disablePadding>4. Career advancement by being updated with latest trends and technologies.</ListItem> 
                    <ListItem disablePadding>5. Leadership opportunities by getting involved in committees, chapters, and projects.</ListItem> 
                    <ListItem disablePadding>6. Recognition through awards, scholarships, and publications.</ListItem> 
                    <ListItem disablePadding>7. Collaboration on projects and research initiatives with fellow members.</ListItem> 
                    <ListItem disablePadding>8. Build industry connections with industry leaders and potential employers.</ListItem> 
                    <ListItem disablePadding>9. Community engagement through outreach programs and initiatives.</ListItem> 
                    <ListItem disablePadding>10. Personal growth by expanding your knowledge, skills, and experiences.</ListItem>
                    
                    
                </List>                
            </Typography>
            <Link to='/add_member'>Click Here to register</Link>

        </Typography>
    </div>
  )
}

export default WhyJoinUs