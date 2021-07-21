import type { FC } from "react";
import { Link } from "react-router-dom";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import './ReviewFormPage.css';

const ReviewFormPage: FC = () => {
  return (
    <div className='review-form-container'>
      <Link className='back-link' to='/'>Back</Link>
      <ReviewForm />
    </div>
  );
};

export default ReviewFormPage;