import React, { useState } from 'react'

function Login() {

  

  return (
    <>
  
      <div className="singin-form">
        <h1>Welcome</h1>
        <p>Sign in your account</p>
        <form action="">
          <input type="name" placeholder="Enter name" />
          <input type="email" placeholder="Enter you email address" />
          <input type="password" placeholder="Enter password" />
          <button type="submit">Sign In</button>
        </form>
      </div>
   
    
      
      </>
  )
}

export default Login