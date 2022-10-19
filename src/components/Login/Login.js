import React from 'react'
import './Login.css'
import loginlogo from "../../assests/login-logo.svg"
import loginhero from "../../assests/login-hero.svg"
import google from "../../assests/google.svg"

const Login = (props) => {
    return (
        <div className='cointainer'>
            <div className='nav'>
                <a href="/">
                    <img src={loginlogo} alt="" />
                </a>
                <div className='top'>
                    <div className='join'>
                        Join Now
                    </div>
                    <div className='signin'>
                        Sign in
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='hero'>
                    <h1>Welcome to your professional community</h1>
                    <img src={loginhero} alt='' />
                </div>
                <div className='form'>
                    <div >
                        <button className='google'>
                            <img src={google} alt="" />
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login