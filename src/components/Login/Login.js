import React from 'react'
import './Login.css'
import loginlogo from "../../assests/login-logo.svg"
import loginhero from "../../assests/login-hero.svg"
import google from "../../assests/google.svg"

const Login = () => {
    return (
        <div className='cointainer'>
            <div className='nav'>
                <a href="/">
                    <img src={loginlogo} alt="" />
                </a>
                <div className='top'>
                    <a href="/home">
                        <div className='join'>
                            Join Now
                        </div>
                    </a>
                    <a href='/home'>
                        <div className='signin'>
                            Sign in
                        </div>
                    </a>
                </div>
            </div>
            <div className='section'>
                <div className='hero'>
                    <h1>Welcome to your professional community</h1>
                    <img src={loginhero} alt='' />
                </div>
                <div className='form'>
                    <div >

                        <a href="/home" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                            <button className='google'>
                                <img src={google} alt="" />
                                Sign in with Google
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login