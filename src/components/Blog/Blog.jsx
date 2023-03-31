import React, { useEffect, useState } from 'react';
import './Blog.css'
import Card from '../Card/Card';

const Blog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='blog-container'>
            <div className='blogs-container'>
                {
                    blogs.map(blog => <Card
                        key={blog.id}
                        blog = {blog}
                    ></Card>)
                }
            </div>
            <div className='bookmark-container'>
                <h4>Bookmarked Blogs</h4>
            </div>
        </div>
    );
};

export default Blog;