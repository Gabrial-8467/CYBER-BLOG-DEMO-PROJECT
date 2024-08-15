import React, { useState } from 'react';
import { registerUser, loginUser, getUserProfile } from '../api.js'; // Adjust path as needed

const MyComponent = () => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const [token, setToken] = useState('');

  const handleRegister = async () => {
    try {
      const result = await registerUser(userData);
      console.log('Registration successful:', result);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const result = await loginUser(userData);
      setToken(result.accessToken);
      console.log('Login successful:', result);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const fetchProfile = async () => {
    try {
      const profile = await getUserProfile(token);
      console.log('User profile:', profile);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  return (
    <div>
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={fetchProfile}>Get Profile</button>
    </div>
  );
};

export default MyComponent;
