import React from 'react'
import { useRef } from 'react'
import axios from '../axiosConfig'
import {Link, useNavigate} from 'react-router-dom'
function Register() {
    const navigate=useNavigate()
    const userNameDom=useRef()
    const firstnameDom=useRef()
    const lastnameDom=useRef()
    const emailDom=useRef()
    const passwordDom=useRef()
    
    async function handleSubmit(e) {
        e.preventDefault()
        const usernameValue=userNameDom.current.value;
        const firstValue=firstnameDom.current.value;
        const lastValue=lastnameDom.current.value;
        const emailValue=emailDom.current.value;
        const passValue=passwordDom.current.value;
        if (
            !usernameValue ||
            !firstValue ||
            !lastValue ||
            !emailValue ||
            !passValue
        ) {
            alert("please provide all required information")
        }

        
        try {
             await axios.post('/users/register', {
                username:usernameValue,
                firstname:firstValue,
                lastname:lastValue,
                email:emailValue,
                password:passValue
             })
             alert('register successfull. please login')
             navigate('/login')
        } catch (error) {
            alert('something went wrong')
           console.log(error.response)
        }
    }

  return (
    <section>
        <form onSubmit={handleSubmit}>
            <div>
                <span>username : ----</span>
                <input ref={userNameDom} type="text" placeholder='username' />
            </div>
            <br/>
            <div>
                <span>First name : ----</span>
                <input ref={firstnameDom} type="text" placeholder='First name' />
            </div>
            <br/>
            <div>
                <span>Last name : ----</span>
                <input ref={lastnameDom} type="text" placeholder='Last name' />
            </div>
            <br/>
            <div>
                <span>email : ----</span>
                <input ref={emailDom} type="text" placeholder='email' />
            </div>
            <br/>
            <div>
                <span>password : ----</span>
                <input ref={passwordDom} type="text" placeholder='password' />
            </div>
            <button type='submit '>Register</button>
        </form>
        <Link to="/login">Login</Link>
    </section>
  )
}

export default Register
