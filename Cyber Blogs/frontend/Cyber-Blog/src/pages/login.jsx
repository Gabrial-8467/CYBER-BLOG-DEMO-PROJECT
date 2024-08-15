import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import './signlog.css';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: async(values) => {
      const res = await axios.post('http://localhost:4444/auth/login', values);
      console.log(res.data);
      const token = res.data.token; // assuming the token is returned in the response data
      localStorage.setItem('token', token);
      localStorage.setItem("user",JSON.stringify(res.data));
      alert(res.data.message)
      navigate('/home');
    }});

  return (
    <div className='auth-container'>
      <div className='auth-form'>
        <h2 className='auth-title'>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={formik.touched.email && formik.errors.email ? 'input-error' : ''}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='error'>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              placeholder='Enter your password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={formik.touched.password && formik.errors.password ? 'input-error' : ''}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className='error'>{formik.errors.password}</div>
            ) : null}
          </div>
          <button type='submit' className='auth-button'>Login</button>
        </form>
        <p className='auth-footer'>
          Don't have an account? <Link to='/signup'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
