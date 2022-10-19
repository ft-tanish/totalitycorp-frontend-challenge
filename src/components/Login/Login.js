import React from 'react'
import './Login.css'
import loginlogo from "../../assests/login-logo.svg"

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
                section
            </div>

        </div>
    )
}

export default Login