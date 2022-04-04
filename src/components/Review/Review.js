import React from 'react';
import './Review.css'
const Review = (props) => {
    const { name, rating, review } = props.review
    return (
        <div className='review-container'>
            <h2>Review by : {name}</h2>
            <p>He tells : {review}</p>
            <p><small>Rating : {rating} star</small></p>

        </div>
    );
};

export default Review;