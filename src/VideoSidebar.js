import React, { useState } from 'react';
import './VideoSidebar.css'
import ShareIcon from '@material-ui/icons/Share';
import MessageIcon from '@material-ui/icons/Message';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function VideoSidebar({likes, shares, messages}) {

    const [liked, setLiked] = useState(false)


    return (
        <div className='videoSidebar'>
            <div className='videoSidebar__button'>
                {
                    liked ? (
                        <FavoriteIcon 
                            onClick={() => setLiked(false)}
                        />
                    ) : (
                            <FavoriteBorderIcon
                                onClick={() => setLiked(true)}

                            />
                        )
                }
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className='videoSidebar__button'>
                <MessageIcon />
                <p>{shares}</p>
            </div>
            <div className='videoSidebar__button'>
                <ShareIcon />
                <p>{messages}</p>
            </div>
        </div>
    );
}

export default VideoSidebar;