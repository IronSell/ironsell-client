import React, { useState } from 'react';
import { login } from '../services/auth';
import { useNavigate, Link } from 'react-router-dom';
import * as PATHS from '../utils/paths';
import * as USER_HELPERS from '../utils/userToken';
import { Button, Input, Form, Alert } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { email, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      email,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: 'Invalid credentials' });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <div className='container'>
      <h1>Access as a Candidate</h1>
      <form onSubmit={handleFormSubmission} className='auth__form'>
        <div className='email'>
          <Input
            prefix={<MailOutlined className='site-form-item-icon' />}
            id='input-email'
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='password'>
          <Input.Password
            prefix={<LockOutlined className='site-form-item-icon' />}
            id='input-password'
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={handleInputChange}
            required={true}
            minLength='8'
          />
        </div>

        {error && (
          <div className='error-msg'>
            <Alert message="Wrog credentials" type="error" showIcon />
          </div>
        )}

        <Button className='login-form-button' type='primary' htmlType='submit'>
          Log In
        </Button>
        <p>Don't have an account yet?</p>
        <Link to={PATHS.SIGNUPCANDIDATEPAGE}>
          <Button type='default'>Sign Up</Button>
        </Link>
      </form>
    </div>
  );
}
