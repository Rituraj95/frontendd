import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import SiteHeader from './components/Home/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Footer from './components/Home/Footer/Footer';
import HomePage from './components/Home/HomePage';
import Login from './components/user/Login';
import CreateActivity from './components/Activities/CreateActivity';
import Container from 'react-bootstrap/Container';
import MemberReg from './components/Member/Member_reg';
import ProfilePage from './components/Member/MemberProfile';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CottageSharpIcon from '@mui/icons-material/CottageSharp';
import AboutUs from './components/AboutUs/AboutUs';
import WhyJoinUs from './components/AboutUs/WhyJoinUs';
import Tooltip from '@mui/material/Tooltip';
import NewsDetail from './components/News/NewsDetails';
import { useState } from 'react';
import WomanInEngg from './components/WIE/WomanInEngg'
import CreateIdea from './components/Ideas/CreateIdea';

const newsItems = [
  {
      id:0,
      title:'Celebration of IEEE Foundation Day',
      body:'On February 16, 2024, the IEEE will celebrate its first IEEE Foundation Day - a Celebration of Heart, commemorating over 50 years since the establishment of the IEEE Foundation, its philanthropic partner. The day honours the contributions of donors, volunteers, and beneficiaries who have made significant impacts through IEEE philanthropic programs. Across various program pillars, such as Illuminate, Educate, Engage, Energize, and Future, notable achievements were highlighted, including improvements in underserved communities worldwide, support for STEM education initiatives, museum exhibits showcasing technological history, grants for student chapters, and initiatives promoting diversity in engineering. Looking forward, the Foundation aims to attract new donors, forge partnerships, and support transformative initiatives to shape a more sustainable and equitable technological future.',
      source:'',
  },
  {
      id:1,
      title:'AUTONOMOUS CARS TRANSFORM SMART CITIES WITH CUTTING-EDGE TECH',
      body:'Advancements in AI, sensors, and connectivity are driving the integration of autonomous vehicles in smart cities, promising safer, more efficient, and sustainable urban transportation. Notable deployments of autonomous cars include cities like Phoenix, Arlington, San Francisco, Stockholm, The Woven City in Japan, Singapore, and Hwaseong in South Korea. These vehicles offer benefits beyond convenience, shaping interconnected urban landscapes and transforming the concept of transportation.The evolution of autonomous cars has been propelled by developments in artificial intelligence, sensor technology, and connectivity. Machine learning algorithms enable vehicles to interpret surroundings, while sensors like cameras, LIDAR, RADAR, and ultrasonic sensors provide real-time data for navigation. Safety is a paramount concern, addressed through IEEE standards and technology such as LIDAR, sensor fusion, V2X communication, edge computing, and 5G networks.Autonomous vehicles utilize machine learning and neural networks for dynamic road recognition, LIDAR for precise distance measurement, sensor fusion for accurate perception, V2X communication for interaction with infrastructure, edge computing for real-time decision-making, and 5G for seamless connectivity. As these technologies continue to advance, autonomous vehicles are becoming integral to smart cities, fostering safer, more sustainable urban environments.',
      source:'some kind of source'
  },
  {
      id:2,
      title:'INNOVATIONS IN BATTERY TECHNOLOGY ARE CRITICAL TO CLEAN TECH FUTURE',
      body:'The focus is on developing clean tech solutions through improved battery manufacturing processes, which reduce dependence on scarce raw materials and enhance recyclability. Lithium-ion batteries have seen advancements, increasing energy density for extended range and improved performance. Emerging technologies like solid-state, lithium-sulfur, and flow batteries show potential for even greater storage capacities. Battery advancements contribute to the growth of electric vehicles (EVs), with projections suggesting over 60% of vehicles sold by 2030 will be EVs. Batteries also enhance power-grid resilience by providing backup during outages and managing electricity demand fluctuations. Efficient battery recycling technology becomes crucial with rising battery demand, and alternative batteries are being explored to reduce reliance on rare earth metals. Closed-loop systems, incorporating artificial intelligence and data analytics, play a role in sustainable battery recycling and contribute to a cleaner tech energy future.',
      source:'',
  },
]

function App() {
  const currentURL = window.location.pathname
  const [selectedNewsID, setSelectedNewsID] = useState(null)

  return (
    <BrowserRouter>
      <div className="App">
        <SiteHeader />
        <Tooltip title='goto home'>
			{<Link to='/'>
			{/* <IconButton color='primary' style={{ fontSize:'3rem', marginLeft:'3rem', position:'absolute' }}> */}
				<CottageSharpIcon 
          style={{ 
            fontSize:'4rem', 
            marginLeft:'3rem', 
            position:'absolute', 
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', 
            borderRadius:'50%', 
            padding:'0.8rem', 
            backgroundColor:'#0a75ad',
            color:'#fff'
          }} 
          fontSize="inherit" />
			{/* </IconButton> */}
			</Link>}
        </Tooltip>
        {/* all routes */}
          <Routes>
            <Route path='/' exact element={<HomePage newsItems={newsItems} setSelectedNewsID={setSelectedNewsID} />} />
            <Route path='/aboutus' exact element={<AboutUs />} />
            <Route path='/whyjoinus' exact element={<WhyJoinUs />} />
            <Route path='/womanie' exact element={<WomanInEngg />} />
                        
            <Route path='/login' element={<Login />}></Route>
            <Route path='/add_member' element={<MemberReg />}></Route>
            <Route path='/member_profile' element={<ProfilePage />}></Route>
            <Route path='/create_idea' element={<CreateIdea />}></Route>

            <Route path='/add_events' element={<CreateActivity />}></Route>
            <Route path='/sample_news' element={<NewsDetail selectedNewsID={selectedNewsID} newsItems={newsItems} />}></Route>
            
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
