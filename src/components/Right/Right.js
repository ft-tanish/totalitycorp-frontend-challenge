import React from 'react'
import './Right.css'
import FeedIcon from '../../assests/feed-icon.svg'
import RightIcon from '../../assests/right-icon.svg'

const Right = () => {
    return (
        <div className="containerRight">
            <div className='followCard'>
                <div className='title'>
                    <h2>Add to your feed</h2>
                    <img src={FeedIcon} alt="feed" />
                </div>

                <div className='feedList'>
                    <li>
                        <a href=" ">
                            <div className='avtar'></div>
                        </a>
                        <div>
                            <span>#Linkedin</span>
                            <button>Follow</button>
                        </div>
                    </li>
                    <li>
                        <a href=" ">
                            <div className='avtar'></div>
                        </a>
                        <div>
                            <span>#Video</span>
                            <button>Follow</button>
                        </div>
                    </li>
                </div>

                <div className='recommendation'>
                    View all recommendations
                    <img src={RightIcon} alt="view all" />
                </div >
            </div>
            <div className='followCard'>
                <div className='bannerCard'>
                    <img
                        src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
                        alt="linked"
                    />
                </div>
            </div>
        </div>
    )
}

export default Right