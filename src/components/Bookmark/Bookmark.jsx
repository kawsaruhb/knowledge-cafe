import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    const {bookmark} = props;

    let selectedBookmark = "";
    for(const blog of bookmark){
        selectedBookmark = selectedBookmark + blog.title;
    }

    return (
        <div>
            <h4>Bookmarked Blogs: {bookmark.length}</h4>
            <div className='selected-bookmark'>
                <p>{selectedBookmark}</p>
            </div>
        </div>
    );
};

export default Bookmark;