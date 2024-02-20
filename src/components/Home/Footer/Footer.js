import React, { useState } from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import XIcon from '@mui/icons-material/X';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import counsellor from '../../../resource/Members/Bhavesh deka.png';
import chairPerson from '../../../resource/Members/Kabyashree_chairp.jpg';
import viceChairPerson from '../../../resource/Members/vishalda.jpg';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {Typography, Button, Tooltip} from '@mui/material';



const Footer = () => {
  return (
	<div style={{ display:'flex', flexDirection:'column' }}>

		<div className='footer-container'>
			<div className="footer-left">
				<div className='footer-left-up'>
					<Link className='social-media'><FacebookIcon style={{ fontSize:'2rem' }}  /></Link>
					<Link className='social-media'><XIcon  style={{ fontSize:'2rem' }} /></Link>
					<Link to='https://www.instagram.com/ieee.tu?igsh=bXI5ZWU4aWlucW81' className='social-media'><InstagramIcon  style={{ fontSize:'2rem' }} /></Link>
					<Link className='social-media'><RedditIcon  style={{ fontSize:'2rem' }} /></Link>
					<Link to='https://www.linkedin.com/company/ieee-tezpur-university/' className='social-media'><LinkedInIcon  style={{ fontSize:'2rem' }} /></Link>	
				</div>
				<div className='footer-left-middle'>
					<p style={{ fontSize:'1.2rem', fontWeight:'600' }}>Contact Information</p> 
					<Typography variant='h6' sx={{ margin:'0 0 1rem 0',  }} style={{ textDecoration:'underline' }}>Contact us</Typography>
					<p style={{ fontSize:'1.2rem', fontWeight:'400' }}><LocalPhoneIcon style={{ color:'yellow' }} /> +918250722234</p>
					<p style={{ fontSize:'1.2rem', fontWeight:'400', margin:'0 0 0 0' }}><MailOutlineIcon style={{ color:'yellow' }} /> ieeechapter.tu@gmail.com</p>
				</div>
				<div className='footer-left-down'>
					<button className='btn'><Tooltip title='back to top'><ArrowCircleUpIcon style={{
							fontSize:'2rem'
						}} /></Tooltip>
					</button>
				</div>
			</div>
			
			<div className="footer-middle" style={{ 
				fontFamily: "'Nunito', sans-serif",
                fontWeight:'600', 
			}}>
				<div className="team-member">
					<img src={counsellor} alt="Team member 1" />
					<h2>Bhabesh Deka</h2>
					<p>Counsellor</p>
					<Link className='profile-link'>
						View Profile
					</Link>
				</div>
				<div className="team-member">
					<img src={chairPerson} alt="Team member 2" />
					<h2>Kabyashree Hazarika</h2>
					<p>Chairpersion</p>
					<Link className='profile-link'>View Profile</Link>
				</div>
				<div className="team-member">
					<img src={viceChairPerson} alt="Team member 3" />
					<h2>Bishal Kumar Nath</h2>
					<p>Vice Chairpersion</p>
					<Link className='profile-link'>View Profile</Link>
				</div>
			</div>

			<div className="footer-right">
				
				<div className='footer-right-up'>
					<p align='right'>This IEEE student community serves as a vital hub for fostering interdisciplinary collaboration, knowledge exchange, and professional development among aspiring engineers, thereby enhancing their academic and career trajectories.</p>
				</div>

				<div className='footer-right-middle'>
					<Link className='btn' to='/create_idea'>Submit your ideas</Link>
				</div>
				

			</div>
		</div>
		<div  style={{ height:'3rem', backgroundColor:'#033a57', lineHeight:'3rem', color:'#fff', fontFamily:'monospace' 
     }}>
			<p className='footertext' >© IEEE Student Branch, Tezpur University, All Rights Reserved. Developed By Abinash, Webmaster@IEEEStudentBranch</p>
		</div>
	</div>
  )
}

export default Footer