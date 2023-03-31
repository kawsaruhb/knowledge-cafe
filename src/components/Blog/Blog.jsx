import React, { useEffect, useState } from 'react';
import './Blog.css'
import Card from '../Card/Card';
import Bookmark from '../Bookmark/Bookmark';

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const [bookmark, setBookmark] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleBookmark = (blog) =>{
        // console.log(blog)
        const newBookmark = [...bookmark, blog]
        setBookmark(newBookmark);
    }

    return (
        <div className='blog-container'>
            <div className='blogs-container'>
                {
                    blogs.map(blog => <Card
                        key={blog.id}
                        blog = {blog}
                        handleBookmark = {handleBookmark}
                    ></Card>)
                }
            </div>
            <div className='bookmark-container'>
                <Bookmark bookmark={bookmark}></Bookmark>
            </div>
        </div>
    );
};

export default Blog;