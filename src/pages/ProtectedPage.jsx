import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
const ProtectedPage = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5005/api/users/profile/:_id').then((response) => {
      console.log(response)
      setUser(response.data.showUser)
    })
  }, [])

  return (
    <div>
      <h1>User Page</h1>
      
    </div>
  )
}

export default ProtectedPage
