import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const { img, author_img, name, title, time } = props.blog;
    const handleBookmark = props.handleBookmark;
    const handleTime = props.handleTime;
    
    // const handleTime = (time) => {
    //     // console.log('time updated');
    //     let time = 0;
    // for (const blog of bookmark) {
    //     time = time + blog.time;
    // }
    // }

    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='author-container'>
                <div className='author'>
                    <div>
                        <img src={author_img} alt="" />
                    </div>
                    <div className='author-details'>
                        <h4>{name}</h4>
                        <p>Mar 14 (4 Days ago)</p>
                    </div>
                </div>
                <div className='bookmark'>
                    <p>{time} min read</p>
                    <button onClick={() => handleBookmark (props.blog)} className='btn'>
                        <FontAwesomeIcon icon={faBookBookmark} />
                    </button>
                </div>
            </div>
            <h2 className='title'>{title}</h2>
            <p >#react #js #vite</p>
            <button onClick={() => handleTime(time)} className='mark-read'>Mark as read</button>
        </div>
    );
};

export default Card;