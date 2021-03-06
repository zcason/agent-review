import type { FC } from "react";
import { Link, useParams } from "react-router-dom";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import './ReviewFormPage.css';

interface Props {
  id: string
}

const ReviewFormPage: FC = () => {
  const { id }  = useParams<Props>();
  return (
    <div className='review-form-container'>
      <Link className='back-link' to={`/agent/${id}`}>Back</Link>
      <ReviewForm />
    </div>
  );
};

export default ReviewFormPage;