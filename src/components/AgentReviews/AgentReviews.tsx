import type { FC } from "react";
import { IReview } from "../../types/Review";
import './AgentReviews.css';


const AgentReviews: FC<{review: IReview}> = ({ review }) => {
  return (
    <>
      <div className='review-card'>
        {review.details}
      </div>
    </>
  );
};

export default AgentReviews;