import React from 'react';

const Review = (props) => {
    const { name, rating, review } = props.review
    return (
        <div>
            <h2>Review by : {name}</h2>
            <p>He tells : {review}</p>
            <p><small>Rating : {rating} star</small></p>

        </div>
    );
};

export default Review;