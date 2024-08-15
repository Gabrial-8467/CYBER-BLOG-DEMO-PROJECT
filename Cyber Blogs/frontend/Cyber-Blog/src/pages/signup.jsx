import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import './signlog.css';
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      console.log(values);
      const res = await axios.post('http://localhost:4444/auth/register', values);
     alert(res.data.message)
      
      navigate('/login');
    },
  });

  return (
    <div className='auth-container'>
      <div className='auth-form'>
        <h2 className='auth-title'>Sign Up</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={formik.touched.name && formik.errors.name ? 'input-error' : ''}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className='error'>{formik.errors.name}</div>
            ) : null}
          </div>
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
          <button type='submit' className='auth-button'>Sign Up</button>
        </form>
        <p className='auth-footer'>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
