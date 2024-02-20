import React, { useState } from 'react';
import './Member_reg.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';

const MemberReg = () => {
    const [fullName, setFullName] = useState('');
    const [ieeeID, setieeeID] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle form submission, validation, API calls, etc.
    };

    return (
        <div className="container">
            <Typography variant='h5'>Registration</Typography>
            <form onSubmit={handleSubmit}>
                <div className="userDetails">
                    <div className="inputBox">
                        <span className="details">First Name</span>
                        <input type="text" placeholder="Enter your first name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                    </div>
                    <div className="inputBox">
                        <span className="details">Last Name</span>
                        <input type="text" placeholder="Enter your last name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                    </div>
                    <div className="inputBox">
                        <span className="details">IEEE-ID</span>
                        <input type="text" placeholder="Enter your IEEE-ID" value={ieeeID} onChange={(e) => setieeeID(e.target.value)} required />
                    </div>
                    <div className="inputBox">
                        <span className="details">Email</span>
                        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="inputBox">
                        <span className="details">Phone Number</span>
                        <input type="tel" placeholder="Enter your number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                    </div>
                    <div className="inputBox">
                        <span className="details">Password</span>
                        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="inputBox">
                        <span className="details">Confirm Password</span>
                        <input type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                </div>
                <div className="genderDetails">
                    <span className="genderTitle">Gender</span>
                    <div className="category">
                        <label>
                            <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} />
                            <span className="dot one"></span>
                            <span className="gender">Male</span>
                        </label>
                        <label>
                            <input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} />
                            <span className="dot two"></span>
                            <span className="gender">Female</span>
                        </label>
                        <label>
                            <input type="radio" name="gender" value="Prefer not to say" checked={gender === 'Prefer not to say'} onChange={(e) => setGender(e.target.value)} />
                            <span className="dot three"></span>
                            <span className="gender">Prefer not to say</span>
                        </label>
                    </div>
                </div>
                <div className=".reg-form-button" style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', gap:'1rem', margin:'2rem 0' }}>
                    <Button variant='contained'>Register</Button>
                    <Button className='event-form-clear' variant='outlined' style={{ borderColor:'red', color:'red' }} endIcon={<DeleteIcon />}>Clear</Button>
                </div>
            </form>
        </div>
    );
}

export default MemberReg