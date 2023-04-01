import React, { useEffect, useState } from 'react';
import './Bookmark.css'
import { ToastContainer, toast } from 'react-toastify';

const Bookmark = (props) => {
    const { bookmark } = props;
    const readTime = props.readTime;
    
    const[time, setTime] = useState(readTime);

    useEffect(()=>{
        const getReadTimeStorage = localStorage.getItem('ReadTime');
        setTime(getReadTimeStorage);
    },[readTime])

    return (
        <div>
            <div className='spent-time'>
                <h5>Spent time on read : {time} min</h5>
            </div>
            <h4>Bookmarked Blogs: {bookmark.length}</h4>
            {
                bookmark.map(data => <div className='selected-bookmark'>
                    <h6>{data.title}</h6>
                </div>)
            }

        </div>
    );
};

export default Bookmark;