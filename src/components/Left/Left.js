import React from 'react'
import './Left.css'
import itemIcon from '../../assests/item-icon.svg'
import plusIcon from '../../assests/plus-icon.svg'
import widgetIcon from '../../assests/widget-icon.svg'

const Left = (props) => {
    return (
        <div className='leftContainer'>
            <div className='artCard'>
                <div className='userInfo'>
                    <div className='cardBackground'></div>
                    <div className='photo'></div>

                    <a href=" ">
                        <div className='link'>
                            Tanish Chaurasia
                        </div>
                    </a>
                    <div className='bio'>
                        Software/Frontend Development Engineer
                    </div>
                </div>
                <div className="widget">
                    <a href=" ">
                        <div>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src={widgetIcon} alt="" />
                    </a>
                </div>
                <div className='itemleft'>
                    <span>
                        <img src={itemIcon} alt="" />
                        My Items
                    </span>
                </div>
            </div >
            <div className='artCard'>
                <div className='communityCard'>
                    <a href=" ">
                        <span>Groups</span>
                    </a>
                    <a href=" ">
                        <span>
                            Events
                            <img src={plusIcon} alt="" />
                        </span>
                    </a>
                    <a href=" ">
                        <span>Follow Hashtags</span>
                    </a>
                    <a href=" ">
                        <span>Discover more</span>
                    </a>
                </div>
            </div>
        </div >
    )
}


export default Left