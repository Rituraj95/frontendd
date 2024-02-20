import Container from 'react-bootstrap/Container';
import {Navbar, Nav, Row, Col, Image, Form, Button, ListGroup} from 'react-bootstrap';
import TU_Logo from '../../../resource/tu-logo.png';
import IEEELogo from '../../../resource/IEEE-Logo.jpg';
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';



const styleHover = {
    margin:'0 3rem',
    padding:'0.5rem 1rem 0.2rem 1rem',
    border:'none',
    borderTopRightRadius:'0',
    borderTopLeftRadius:'0',
    borderBottomLeftRadius:'15px',
    borderBottomRightRadius:'15px',
    backgroundColor:'#0a75ad',
    color:'#ffffff',
}

const headerMenuStyle = { 
    backgroundColor:'#0a75ad',
    color:'#ffffff',
    border:'none',
    fontWeight:'600',
    
 }

 const headerMenuStyleOnHover = { 
  
 }

const dropDownMenuItemStyle = { 
    listStyleType:'none',
    fontFamily: "'Nunito', sans-serif",
    color:'#222222',
    fontSize:'1rem',
    margin:'0',
    padding: '0 1rem 0 0'
}

// dropdown link styles
const dropDownLinkStyleNone = { 
    textDecoration:'none',
    color:'#222222',
 }

 const dropDownLinkStyleOnHover = { 
    
 }


function SiteHeader() {

    // hover effect states
    const [isMouseHoveringOnAbout, setIsMouseHoveringOnAbout] = useState(false);
    const [isMouseHoveringOnLogin, setIsMouseHoveringOnLogin] = useState(false);
    const [isMouseHoveringMembers, setIsMouseHoveringMembers] = useState(false);
    const [isMouseHoveringOnEvents, setIsMouseHoveringOnEvents] = useState(false);
    const [isMouseHoveringOnJoinus, setIsMouseHoveringOnJoinus] = useState(false);
    const [isMouseHoveringOnWIE, setIsMouseHoveringOnWIE] = useState(false);
    const [isMouseHoveringOnPublications, setIsMouseHoveringOnPublications] = useState(false);
    const [isMouseHoveringOnCommunity, setIsMouseHoveringOnCommunity] = useState(false);

    // hover effect states member
    const [isMouseHoveringOnLinkMemberJoinus, setIsMouseHoveringOnLinkMemberJoinus] = useState(false);
    const [isMouseHoveringOnLinkMemberViewProfile, setIsMouseHoveringOnLinkMemberViewProfile] = useState(false);
    const [isMouseHoveringOnLinkMemberViewMembers, setIsMouseHoveringOnLinkMemberViewMembers] = useState(false);

    // hover effect states events
    const [isMouseHoveringOnLinkCreateEvents, setIsMouseHoveringOnLinkCreateEvents] = useState(false);
    const [isMouseHoveringOnLinkShowEventList, setIsMouseHoveringOnLinkShowEventList] = useState(false);


    return (
        <div >
            <div id='navbar' >
                <div>
                    <img src={TU_Logo} alt='' className='tuLogo'/>
                </div>
                <div>
                    <h1 className='navbarText'>IEEE Tezpur University Student Branch</h1>
                </div>
                <div>
                    <img src={IEEELogo} alt='' className='ieeeLogo' />
                </div>
                
            </div>
            <div>
                <ListGroup className='menuStyle'>
                    {/* about tab */}
                    <ListGroup.Item className='menuDetails'>
                            <Dropdown>
                                <Link to='/aboutus'><MenuButton className='headerMenu' 
                                onMouseEnter={e=>setIsMouseHoveringOnAbout(true)} 
                                onMouseLeave={e=>setIsMouseHoveringOnAbout(false)}>About Us</MenuButton></Link>
                                {/* <Menu style={{ 
                                    margin:'1.3rem 0',
                                    padding: '0 0 0 0',
                                    borderRight: '1px solid #cccccc',
                                    borderTop:'1px solid #cccccc',
                                    borderBottom:'1px solid #cccccc',
                                    borderLeft: '5px solid #0a75ad',
                                    backgroundColor:'#ffffff',
                                 }}>
                                    
                                </Menu> */}
                            </Dropdown>
                    </ListGroup.Item>

                    {/* login tab */}
                    <ListGroup.Item className='menuDetails'>
                            <Dropdown>
                                <Link to='/login'><MenuButton className='headerMenu'
                                onMouseEnter={e=>setIsMouseHoveringOnLogin(true)} 
                                onMouseLeave={e=>setIsMouseHoveringOnLogin(false)}>Login</MenuButton></Link>
                                
                            </Dropdown>
                    </ListGroup.Item>

                    {/* join us tab */}
                    <ListGroup.Item className='menuDetails'>
                            <Dropdown>
                                <Link to='/whyjoinus'><MenuButton className='headerMenu'
                                onMouseEnter={e=>setIsMouseHoveringOnJoinus(true)} 
                                onMouseLeave={e=>setIsMouseHoveringOnJoinus(false)}>Join Us</MenuButton></Link>
                                
                            </Dropdown>
                    </ListGroup.Item>

                    <ListGroup.Item className='menuDetails'>
                            <Dropdown>
                                <MenuButton className='headerMenu'
                                    onMouseEnter={e=>setIsMouseHoveringMembers(true)} 
                                    onMouseLeave={e=>setIsMouseHoveringMembers(false)}>Members</MenuButton>
                                <Menu className='menuDetailsStyle' >
                                    <MenuItem style={dropDownMenuItemStyle}><Link to="/add_member" 
                                            style={isMouseHoveringOnLinkMemberJoinus?(dropDownLinkStyleOnHover):(dropDownLinkStyleNone)}
                                            onMouseEnter={e=>setIsMouseHoveringOnLinkMemberJoinus(true)} 
                                            onMouseLeave={e=>setIsMouseHoveringOnLinkMemberJoinus(false)}
                                        >
                                            Join Us
                                        </Link>
                                    </MenuItem>
                                    <MenuItem style={dropDownMenuItemStyle}><Link to="/member_profile" 
                                           className='headerMenu'
                                            onMouseEnter={e=>setIsMouseHoveringOnLinkMemberViewProfile(true)} 
                                            onMouseLeave={e=>setIsMouseHoveringOnLinkMemberViewProfile(false)}
                                        >
                                            View Profile
                                        </Link>
                                    </MenuItem>

                                    <MenuItem style={dropDownMenuItemStyle}>
                                        <Link to="/" 
                                           className='headerMenu'
                                            onMouseEnter={e=>setIsMouseHoveringOnLinkMemberViewMembers(true)} 
                                            onMouseLeave={e=>setIsMouseHoveringOnLinkMemberViewMembers(false)}
                                        >
                                            View All Committee Members
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </Dropdown>
                        </ListGroup.Item>
                        {/* woman in engg */}
                        <ListGroup.Item className='menuDetails'>
                                <Dropdown>
                                    <Link to='/womanie'><MenuButton className='headerMenu' 
                                    onMouseEnter={e=>setIsMouseHoveringOnWIE(true)} 
                                    onMouseLeave={e=>setIsMouseHoveringOnWIE(false)}>Women in Engg</MenuButton></Link>
                                    
                                </Dropdown>
                        </ListGroup.Item>

                    {/* <ListGroup.Item style={!isMouseHoveringOnEvents?(styleStatic):(styleHover)} 
                        onMouseEnter={e=>setIsMouseHoveringOnEvents(true)} 
                        onMouseLeave={e=>setIsMouseHoveringOnEvents(false)}>WIE</ListGroup.Item> */}

                    {/* <ListGroup.Item style={!isMouseHoveringOnCommunity?(styleStatic):(styleHover)} 
                        onMouseEnter={e=>setIsMouseHoveringOnCommunity(true)} 
                        onMouseLeave={e=>setIsMouseHoveringOnCommunity(false)}>
                            <Dropdown>
                                <MenuButton style={headerMenuStyle}>About</MenuButton>
                                <Menu style={{ 
                                    margin:'1.3rem 0',
                                    padding: '0 0 0 0',
                                    borderRight: '1px solid #cccccc',
                                    borderTop:'1px solid #cccccc',
                                    borderBottom:'1px solid #cccccc',
                                    borderLeft: '5px solid #0a75ad',
                                    backgroundColor:'#ffffff',
                                 }}>
                                    
                                </Menu>
                            </Dropdown>
                    </ListGroup.Item> */}

                    <ListGroup.Item className='menuDetails'>
                            <Dropdown>
                                <MenuButton className='headerMenu'
                                    onMouseEnter={e=>setIsMouseHoveringOnEvents(true)} 
                                    onMouseLeave={e=>setIsMouseHoveringOnEvents(false)}>Events</MenuButton>
                                <Menu style={{ 
                                    margin:'1.3rem 0',
                                    padding: '0.5rem 0 0 0',
                                    borderRight: '1px solid #cccccc',
                                    borderTop:'1px solid #cccccc',
                                    borderBottom:'1px solid #cccccc',
                                    borderLeft: '5px solid #0a75ad',
                                    backgroundColor:'#ffffff',
                                 }}>
                                    <MenuItem style={dropDownMenuItemStyle}><Link to="/add_events" 
                                           className='headerMenu'
                                            onMouseEnter={e=>setIsMouseHoveringOnLinkCreateEvents(true)} 
                                            onMouseLeave={e=>setIsMouseHoveringOnLinkCreateEvents(false)}
                                        >
                                            Create Event
                                        </Link>
                                    </MenuItem>
                                    <MenuItem style={dropDownMenuItemStyle}><Link to="" 
                                            style={isMouseHoveringOnLinkShowEventList?(dropDownLinkStyleOnHover):(dropDownLinkStyleNone)}
                                            onMouseEnter={e=>setIsMouseHoveringOnLinkShowEventList(true)}
                                            onMouseLeave={e=>setIsMouseHoveringOnLinkShowEventList(false)}
                                        >
                                            Upcoming Events
                                        </Link>
                                    </MenuItem>
                                    <MenuItem style={dropDownMenuItemStyle}><Link to="" 
                                            style={isMouseHoveringOnLinkShowEventList?(dropDownLinkStyleOnHover):(dropDownLinkStyleNone)}
                                            onMouseEnter={e=>setIsMouseHoveringOnLinkShowEventList(true)}
                                            onMouseLeave={e=>setIsMouseHoveringOnLinkShowEventList(false)}
                                        >
                                            Past Events
                                        </Link>
                                    </MenuItem>

                                </Menu>
                            </Dropdown>
                    </ListGroup.Item>

                    
                </ListGroup>
            </div>

        </div>
    );
}

export default SiteHeader;