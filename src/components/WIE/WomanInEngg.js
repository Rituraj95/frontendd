import React from 'react'
import './WomanInEngg.css';
import {Typography, List, ListItem, ListItemIcon } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const WIE = () => {
  return (
    <div className='maincontainer'>
        <Typography variant='h3' style={{ margin:'0 0 3rem 0', fontWeight:'', fontFamily:'"Fredoka", sans-serif' }}>About Women In Engineering, IEEE</Typography>
        {/* <hr /> */}
        <Typography className='main-content'>
            <Typography variant='subtitle1' style={{ margin:'0 0 2rem 0' }}>

                IEEE Women in Engineering (WIE) is a global network and community within the Institute of Electrical and Electronics Engineers (IEEE) that aims to promote women engineers and scientists, as well as inspire girls around the world to pursue careers in engineering and technology. WIE provides various programs, resources, and opportunities for networking, professional development, mentorship, and leadership training. The organization also advocates for diversity and inclusion within the engineering field, working to address the underrepresentation of women in STEM (science, technology, engineering, and mathematics) disciplines. Through its initiatives, IEEE WIE seeks to empower women in engineering and advance gender equity in the profession.
                IEEE Women in Engineering (WIE) is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists and inspiring girls around the world to follow their academic interests in a career in engineering and science.
            </Typography>

            <Typography variant='h4'>The WIE Mission</Typography>
            <Typography variant='subtitle1' style={{ margin:'0 0 1rem 0' }}>
            To connect, support, and inspire women and girls worldwide, and facilitate their recruitment and retention in STEM fields, fostering technological innovation and excellence for the benefit of humanity.</Typography>

            <Typography variant='h4'>The WIE Vision</Typography>
            <Typography variant='subtitle1' style={{ margin:'0 0 1rem 0' }}>
                To be globally recognized for its contributions to improving diversity, equity, and inclusion in STEM fields.
                Our goal is to facilitate the recruitment and retention of women in technical disciplines globally. We envision a vibrant community of IEEE women and men collectively using their diverse talents to innovate for the benefit of humanity.
            </Typography>

            <Typography variant='h4'>IEEE WIE Strives To</Typography>
            <List sx={{ listStyleType: 'disc', margin:'0 0 0 1rem' }}>
                    <ListItem sx={{ display: 'list-item', marginBottom:'1rem' }} disablePadding>Provide assistance with the formation of new IEEE WIE Affinity Groups and support ongoing activities.</ListItem>
                    <ListItem sx={{ display: 'list-item' , marginBottom:'1rem' }} disablePadding>Recognize the outstanding achievements of women in electrical and electronics engineering through IEEE Awards nominations.</ListItem> 
                    <ListItem sx={{ display: 'list-item' , marginBottom:'1rem' }} disablePadding>Professional development through seminars, workshops, and training sessions.</ListItem> 
                    <ListItem sx={{ display: 'list-item' , marginBottom:'1rem' }} disablePadding>Organize workshops at major technical conferences to enhance networking and to promote membership in IEEE WIE.</ListItem> 
                    <ListItem sx={{ display: 'list-item' , marginBottom:'1rem' }} disablePadding>Advocate women in leadership roles in IEEE governance and career advancement for women in the profession</ListItem> 
                    <ListItem sx={{ display: 'list-item' , marginBottom:'1rem' }} disablePadding>Promote member grade advancement for women to the IEEE membership grades of Senior Member and Fellow.</ListItem> 
                    <ListItem sx={{ display: 'list-item' , marginBottom:'1rem' }} disablePadding>Facilitate the development of programs and activities that promote the entry into, and retention of, women in engineering programs.</ListItem> 
                    <ListItem sx={{ display: 'list-item' , marginBottom:'1rem' }} disablePadding>Administer the IEEE Student-Teacher and Research Engineer/Scientist (STAR) Program to mentor young women in junior high and high schools.</ListItem> 
                    
                    
                </List> 
        </Typography>
    </div>
  )
}

export default WIE