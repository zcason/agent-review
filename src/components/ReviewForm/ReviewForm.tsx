import  { FC, useEffect } from 'react';
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
  const [formValues, setFormValues] = useState<IFormInputs>({review: ""});
  const { register, handleSubmit } = useForm<IFormInputs>();
  const [reviewCreated, setReviewCreated] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { id }  = useParams<Props>();

  useEffect(() => {
    const data: string | null = localStorage.getItem('form-inputs');
    if (data) {
        setFormValues(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
      localStorage.setItem('form-inputs', JSON.stringify(formValues));
  });

  const submitForm: SubmitHandler<IFormInputs> = async (review: IFormInputs) => {

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
              value={formValues.review}
              onChange={(e) => setFormValues({ review: e.target.value})}

              required
          />
          <button className='submit-review' type='submit'>Submit</button>
      </form>
  </>
  );
};

export default ReviewForm;