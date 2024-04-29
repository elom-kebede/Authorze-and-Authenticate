import React from 'react'
import { useRef } from 'react'
import axios from '../axiosConfig'
import {Link, useNavigate} from 'react-router-dom'


function Login() {
  const navigate=useNavigate()
  const emailDom=useRef()
  const passwordDom=useRef()

  async function handleSubmit(e) {
    e.preventDefault()
    
    const emailValue=emailDom.current.value;
    const passValue=passwordDom.current.value;
    if (!emailValue ||!passValue) {
        alert("please provide all required information")
    }

    
    try {
         const {data} = await axios.post('/users/login', {
            
            email:emailValue,
            password:passValue
         })
         alert('login  successfull.')

         localStorage.setItem('token',data.token)
         navigate('/')
       
    } catch (error) {
        alert(error?.response?.data?.msg)
       console.log(error.response)
    }
}
 
  return (
    <section>
       <form onSubmit={handleSubmit}>
            
            <div>
                <span>email : ----</span>
                <input ref={emailDom} type="text" placeholder='email' />
            </div>
            <br/>
            <div>
                <span>password : ----</span>
                <input ref={passwordDom} type="text" placeholder='password' />
            </div>
            <button type='submit '>Login</button>
        </form>
        <Link to = "/register">Register</Link>
    </section>
  )
}

export default Login
