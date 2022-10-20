import React from 'react'
import './Header.css'
import homelogo from '../../assests/home-logo.svg'
import SearchIcon from '../../assests/search-icon.svg'
import NavHomeIcon from '../../assests/nav-home.svg'
import Network from '../../assests/nav-network.svg'
import Jobs from '../../assests/nav-jobs.svg'
import Message from '../../assests/nav-messaging.svg'
import Notifications from '../../assests/nav-notifications.svg'
import User from '../../assests/user.svg'
import DownIcon from '../../assests/down-icon.svg'
import Work from '../../assests/nav-work.svg'



const Header = () => {
    return (
        <div className="headcontainer">
            <div className="content">
                <div className='logo'>
                    <a href="/home">
                        <img src={homelogo} alt="" />
                    </a>
                </div>
                <div className='search'>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className='searchicon'>
                        <img src={SearchIcon} alt='' />
                    </div>
                </div>

                <div className='headnav'>
                    <div className='navlistwrap'>
                        <div className='navlist'>
                            <a href="/home">
                                <img src={NavHomeIcon} alt="" />
                                <span>Home</span>
                            </a>
                        </div>
                        <div className='navlist'>
                            <a href=" ">
                                <img src={Network} alt="" />
                                <span>My Network</span>
                            </a>
                        </div>
                        <div className='navlist'>
                            <a href=" ">
                                <img src={Jobs} alt="" />
                                <span>Jobs</span>
                            </a>
                        </div>
                        <div className='navlist'>
                            <a href=" ">
                                <img src={Message} alt="" />
                                <span>Messaging</span>
                            </a>
                        </div>
                        <div className='navlist'>
                            <a href=" ">
                                <img src={Notifications} alt="" />
                                <span>Notifications</span>
                            </a>
                        </div>
                        <div className='navlist'>
                            <div className='user'>
                                <a href=" ">
                                    <img src={User} alt='' />
                                    <span>Me</span>
                                    <img src={DownIcon} alt="" />
                                </a>
                                <div className='signout'>
                                    <a href=" ">
                                        Sign Out
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='navlist'>
                            <div className='user'>
                                <div className='work'>
                                    <a href=" ">
                                        <img src={Work} alt='' />
                                        <span>Work
                                            <img src={DownIcon} alt="" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header