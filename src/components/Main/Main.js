import React from 'react'
import './Main.css'
import TanishDp from '../../assests/Tanish_pp.jpg'
import UploadedImg from '../../assests/uploaded-img.png'
import EventIcon from '@mui/icons-material/Event';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import NotesIcon from '@mui/icons-material/Notes';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import PanToolIcon from '@mui/icons-material/PanTool';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';


const Main = () => {
    return (
        <div className='containerMain'>
            <div className='commonCard'>
                <div className='shareBox'>
                    <div className='post'>
                        <img src={TanishDp} alt="user" />
                        <button>Start a post</button>
                    </div>
                    <div>
                        <button>
                            <PhotoSizeSelectActualIcon color="primary" style={{ margin: "0 4px 0 -2px" }} />
                            <span>Photo</span>
                        </button>
                        <button>
                            <EventIcon style={{ margin: "0 4px 0 -2px", color: "green" }} />
                            <span>Video</span>
                        </button>
                        <button>
                            <PhotoSizeSelectActualIcon style={{ margin: "0 4px 0 -2px", color: "orange" }} />
                            <span>Event</span>
                        </button>
                        <button>
                            <NotesIcon style={{ margin: "0 4px 0 -2px", color: "red" }} />
                            <span>Write artical</span>
                        </button>


                    </div></div></div>

            <div className='commonCard'>
                <div className='artical'>
                    <div className='sharedActor'>
                        <a href=' '>
                            <img src={TanishDp} alt="" />
                            <div>
                                <span>Tanish Chaurasia</span>
                                <span>tanishchaurasia6@gmail.com          <b>follows</b></span>
                                <span>10 November</span>
                            </div>
                        </a>
                        <button>
                            <MoreHorizIcon />
                        </button>
                    </div>
                    <div className='description'>
                        Looking right place to learn Digital Marketing? Try our free Master Class!
                    </div>
                    <div className='sharedImg'>
                        <a href=" ">
                            <img src={UploadedImg} alt="" />
                        </a>
                    </div>
                    <div className='socialCount'>

                        <li>
                            <button>
                                <ThumbUpAltIcon style={{ color: "blue", }} />
                                <PanToolIcon style={{ color: "green", height: "21px" }} />
                                <span>165</span>
                            </button>
                        </li>
                        <li><a href=" ">
                            31 comments
                        </a></li>
                    </div>
                    <div className='socialAction'>
                        <button>
                            <ThumbUpAltOutlinedIcon style={{ color: "rgb(113, 113, 113)" }} />
                            <span>Like</span>

                        </button>
                        <button>
                            <CommentRoundedIcon style={{ color: "rgb(113, 113, 113)" }} />
                            <span>comments</span>
                        </button>
                        <button>
                            <ShareRoundedIcon style={{ color: "rgb(113, 113, 113)" }} />
                            <span>share</span>
                        </button>
                        <button>
                            <SendRoundedIcon style={{ color: "rgb(113, 113, 113)" }} />
                            <span>sent</span>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Main