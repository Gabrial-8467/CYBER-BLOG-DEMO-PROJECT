import axios from 'axios';

const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};
