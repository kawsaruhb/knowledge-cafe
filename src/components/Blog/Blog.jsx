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

    const [readTime, setReadTime] = useState(0);

    const handleTime = (time) =>{
      const previousTime = JSON.parse(localStorage.getItem("ReadTime"));
      if(previousTime){
        const sum = previousTime + time;
        localStorage.setItem("ReadTime", sum)
        setReadTime(sum);
      }
      else{
        localStorage.setItem("ReadTime", time)
        setReadTime(time);
      };
  }

    return (
        <div className='blog-container'>
            <div className='blogs-container'>
                {
                    blogs.map(blog => <Card
                        key={blog.id}
                        blog = {blog}
                        handleBookmark = {handleBookmark}
                        handleTime = {handleTime}
                        
                    ></Card>)
                }
            </div>
            <div className='bookmark-container'>
                <Bookmark bookmark={bookmark} readTime = {readTime}></Bookmark>
            </div>
            <div className='qa'>
                <h4>1. Props vs state?</h4>
                <p>Ans: State is referred to the local state of the component which cannot be accessed and modified outside of the component and only can be used & modified inside the component. Props, on the other hand,make components reusable by giving components the ability to receive data from the parent component in the form of props.</p>

                <h4>2. How does useState work??</h4>
                <p>Ans: useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>

                <h4>3. Purpose of useEffect other than fetching data?</h4>
                <p>Ans: The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.</p>

                <h4>4. How Does React work?</h4>
                <p>Ans: React is a JavaScript library that creates user interfaces in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilize it with other libraries. <br /> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. </p>
            </div>
        </div>
    );
};

export default Blog;