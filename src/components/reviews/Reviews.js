import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {reviews, deleteReview} = this.props
    const reviewsList = reviews.map(review => {
      return(
        <Review
          key={review.id} 
          review={review}
          deleteReview={deleteReview}
          />
      )
    })
    return (
      <ul>
        {reviewsList}
      </ul>
    );
  }
};

export default Reviews;