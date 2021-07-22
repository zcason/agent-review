import type { FC } from "react";
import { IReview } from "../../types/Review";


const AgentReviews: FC<{review: IReview}> = ({ review }) => {
  return (
    <>
      <div>{review.details}</div>
    </>
  );
};

export default AgentReviews;