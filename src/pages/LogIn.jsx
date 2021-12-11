import React, { useState } from 'react'
import { login } from '../services/auth'
import { useNavigate, Link } from 'react-router-dom'
import * as PATHS from '../utils/paths'
import * as USER_HELPERS from '../utils/userToken'
import { Modal, Button } from 'antd'

export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const { email, password } = form
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  function handleInputChange(event) {
    const { name, value } = event.target

    return setForm({ ...form, [name]: value })
  }

  function handleFormSubmission(event) {
    event.preventDefault()
    const credentials = {
      email,
      password,
    }
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: 'Invalid credentials' })
      }
      USER_HELPERS.setUserToken(res.data.accessToken)
      authenticate(res.data.user)
      navigate(PATHS.HOMEPAGE)
    })
  }
  const [visible, setVisible] = React.useState(false)
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  const [modalText, setModalText] = React.useState('Content of the modal')

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds')
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setVisible(false)
  }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleFormSubmission} className="auth__form">
        <label htmlFor="input-email">Email</label>
        <input
          id="input-email"
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-password">Password</label>
        <input
          id="input-password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          required
          minLength="8"
        />

        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}

      <Button className='button__submit' type="primary" htmlType='submit'>Log In</Button>
      </form>
      <p>Don´t have an account yet?</p>
      <Link to={PATHS.SIGNUPPAGE}>
      <Button type="default">Sign Up</Button>
      </Link>
    </div>
  )
}
