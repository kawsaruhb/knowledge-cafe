import React, { useState } from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    const { bookmark } = props;

    let time = 0;
    for(const blog of bookmark){
        time = time + blog.time;
    }

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