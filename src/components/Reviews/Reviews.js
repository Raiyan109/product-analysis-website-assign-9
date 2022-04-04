import React from 'react';
import useReview from '../Hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReview()
    return (
        <div>
            <h1>What our Customers say ! </h1>
            {
                reviews.map(review => <Review review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;