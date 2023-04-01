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
            <div className='qa'>
                <h4>1. Props vs state?</h4>
                <p>Ans: State is referred to the local state of the component which cannot be accessed and modified outside of the component and only can be used & modified inside the component. Props, on the other hand,make components reusable by giving components the ability to receive data from the parent component in the form of props.</p>

                <h4>1. How does useState work??</h4>
                <p>Ans: useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>

                <h4>1. Props vs state?</h4>
                <p>Ans: State is referred to the local state of the component which cannot be accessed and modified outside of the component and only can be used & modified inside the component. Props, on the other hand,make components reusable by giving components the ability to receive data from the parent component in the form of props.</p>
            </div>
        </div>
    );
};

export default Blog;