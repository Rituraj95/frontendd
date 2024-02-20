import React, { useState } from 'react';
import './profile.css';

const ProfilePage = () => {
  const [name, setName] = useState('John Doe');
  const [ieeeId, setIeeeId] = useState('IEEE123');
  const [email, setEmail] = useState('john@example.com');
  const [phone, setPhone] = useState('1234567890');
  const [address, setAddress] = useState('123 Main St, City, Country');
  const [status, setStatus] = useState('Active');

  const handleNameChange = (e) => setName(e.target.value);
  const handleIeeeIdChange = (e) => setIeeeId(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleStatusChange = (e) => setStatus(e.target.value);

  const handleSave = () => {
    // Code to save the updated details, e.g., send them to the server
    console.log('Details saved:', { name, ieeeId, email, phone, address, status });
  };

  return (
    <div className='profile-container'>
      <h2>Profile</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>IEEE ID:</label>
          <input type="text" value={ieeeId} onChange={handleIeeeIdChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" value={phone} onChange={handlePhoneChange} />
        </div>
        <div>
          <label>Address:</label>
          <textarea value={address} onChange={handleAddressChange}></textarea>
        </div>
        <div>
          <label>Status:</label>
          <select value={status} onChange={handleStatusChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <button type="button" onClick={handleSave}>Save Changes</button>
      </form>
    </div>
  );
};

export default ProfilePage;