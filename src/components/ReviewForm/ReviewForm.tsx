import type  { FC } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import './ReviewForm.css';

interface IFormInputs {
  review: string;
}

interface Props {
  id: string;
}

const ReviewForm: FC = () => {
  const { register, handleSubmit } = useForm<IFormInputs>();
  const [error, setError] = useState<string>("");
  const [reviewCreated, setReviewCreated] = useState<boolean>(false);
  const { id }  = useParams<Props>();

  const submitForm: SubmitHandler<IFormInputs> = async (review: IFormInputs) => {
    // console.log(review)
      try {
          await axios.post(`http://localhost:3001/agents/${id}`, review);
          setReviewCreated(true);
          setError('');
      } catch (error) {
          setError(error.message);
      }  
  }

return (
  <>
      {reviewCreated && <div className='review-created'>Review Created</div>}
      {error && <div className='error'>{error.toString}</div> }
      <form 
      onSubmit={handleSubmit(submitForm)}
      className={'review-form'}
      >
          {/* Review */}
          <label htmlFor='review'>Review</label>
          <textarea
              {...register('review')}
              id='review'
              className='review-text-area'
              required
          />
          <button className='submit-review' type='submit'>Submit</button>
      </form>
  </>
  );
};

export default ReviewForm;