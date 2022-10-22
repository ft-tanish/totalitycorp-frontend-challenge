import React from 'react'
import Left from '../Left/Left'
import Main from '../Main/Main'
import Right from '../Right/Right'
import './Home.css'

const Home = () => {
    return (
        <div className='homecontainer'>
            <div className='layout'>
                <div className='left'>
                    <Left />
                </div>
                <div className='main'>
                    <Main />
                </div>
                <div className='right'>
                    <Right />
                </div>
            </div>
        </div>
    )
}

export default Home