import React from 'react';
import './Card.css'

const Card = (props) => {
    const { img, author_img, name, title } = props.blog;
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
                    <p>05 min read</p>
                    <button className='btn'>BookMark</button>
                </div>
            </div>
        </div>
    );
};

export default Card;