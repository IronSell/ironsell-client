import './SignUpCompanyForm.styles.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupCompany } from '../../services/auth';
import * as PATHS from '../../utils/paths';
import { Input, Button } from 'antd';
import { LockOutlined, MailOutlined, ShopOutlined } from '@ant-design/icons';

const SignUpForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    professionalSector: '',
    cif: '',
    address: '',
    province: '',
    companyUrl: '',
  });

  const {
    name,
    email,
    password,
    professionalSector,
    cif,
    address,
    province,
    companyUrl,
  } = form;

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(e) {
    const { name, value } = e.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(e) {
    e.preventDefault();
    const companyAccount = {
      name,
      email,
      password,
      professionalSector,
      cif,
      address,
      province,
      companyUrl,
    };
    signupCompany(companyAccount).then((res) => {
      if (!res.status) {
        return setError({ message: 'There was an error creating the account' });
      }
      navigate(PATHS.LOGINCOMPANYPAGE);
    });
  }

  return (
    <>
      <div className='container signup-form'>
        <form onSubmit={handleFormSubmission} className='auth__form'>
          <p className='form-titles'>IronJobs access data</p>
          <hr />
          <div className='form-input'>
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
          <div className='form-input'>
            <Input.Password
              prefix={<LockOutlined className='site-form-item-icon' />}
              id='input-password'
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={handleInputChange}
              required={true}
            />
            <p className='password-instructions'>
              It must container at least 8 characters, numbers, lowercase and
              uppercase letters.{' '}
            </p>
          </div>
          <p className='form-titles'>Your company data</p>
          <hr />
          <div className='form-input'>
            <Input
              id='input-name'
              type='name'
              name='name'
              placeholder='Company name'
              value={name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-input'>
            <Input
              id='input-cif'
              type='cif'
              name='cif'
              placeholder='C.I.F'
              value={cif}
              onChange={handleInputChange}
              required={true}
              minLength={9}
            />
          </div>
          <div className='form-input'>
            <Input
              id='input-professionalSector'
              type='professionalSector'
              name='professionalSector'
              placeholder='Professional Sector'
              value={professionalSector}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-input'>
            <Input
              id='input-address'
              type='address'
              name='addres'
              placeholder='Company Address'
              value={address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-input'>
            <Input
              id='input-province'
              type='province'
              name='province'
              placeholder='Province'
              value={province}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-input'>
            <Input
              id='input-companyUrl'
              type='companyUrl'
              name='companyUrl'
              placeholder='Company website'
              value={companyUrl}
              onChange={handleInputChange}
              required
            />
          </div>
          <p className='form-titles-centered'>Then you can publish your first offer!</p>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
