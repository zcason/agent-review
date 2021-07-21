import axios from 'axios';
import type  { FC } from 'react';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './AgentForm.css';

interface IFormInputs {
    firstName: string;
    lastName: string;
    photoUrl: string | null; 
    agentLicence: string; 
    address: string; 
    practiceAreas: string;
    aboutMe: string | null;
}

const AgentForm: FC = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<IFormInputs>();
    const [error, setError] = useState<string>("");
    const [eventCreated, setEventCreated] = useState<boolean>(false);

    const submitForm: SubmitHandler<IFormInputs> = async (agent: IFormInputs) => {
        if (!agent.photoUrl) {
            agent.photoUrl = null;
        }
        if (!agent.aboutMe) {
            agent.aboutMe = null;
        }

        try {
            await axios.post('/agents', agent);
            setEventCreated(true);
            setError('');
        } catch (error) {
            setError(error.message);
        }  
    }

  return (
    <>
        {eventCreated && <div className='event-created'>Event Created</div>}
        {error && <div className='error'>{error.toString()}</div> }
        <form 
        onSubmit={handleSubmit(submitForm)}
        className={'agent-form'}
        >
            {/* first name */}
            <label htmlFor='firstName'>First name</label>
            <input
                {...register('firstName')}
                id='firstName'
                className='form-control'
                type='text'
                placeholder='Joe'
                required
            />
            {errors.firstName && <span>This field is required</span>}
            {/* last name */}
            <label htmlFor='lastName'>Last Name</label>
            <input
                {...register('lastName')}
                id='lastName'
                className='form-control'
                type='text'
                placeholder='Persons'
                required
            />
            {errors.lastName && <span>This field is required</span>}
            {/*  photo url*/}
            <label htmlFor='photoUrl'>Photo Url</label>
            <input
                {...register('photoUrl')}
                id='photoUrl'
                className='form-control'
                placeholder='https://unsplash.com/photos/KBzb07tXYWA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'
                type='text'
            />
            {/* agent license */}
            <label htmlFor='agentLicence'>Agent License</label>
            <input
                {...register('agentLicence')}
                id='agentLicence'
                className='form-control'
                type='text'
                placeholder='123456'
                required
            />
            {errors.agentLicence && <span>This field is required</span>}
            {/* address */}
            <label htmlFor='address'>Address</label>
            <input
                {...register('address')}
                id='address'
                className='form-control'
                type='text'
                placeholder="555 Some Place Rd, Los Angeles, CA 90077"
                required
            />
            {errors.address && <span>This field is required</span>}
            {/* practice areas */}
            <label htmlFor='practiceAreas'>Practice Areas</label>
            <input 
                {...register('practiceAreas')}
                id='practiceAreas'
                className='form-control'
                type='text'
                placeholder='Los Angeles, San Francisco, Miami'
                required
            />
            {errors.practiceAreas && <span>This field is required</span>}
            {/* about me */}
            <label htmlFor='aboutMe'>About Me</label>
            <textarea
                {...register('aboutMe')}
                id='aboutMe'
                className='agent-text-area'
            />
            <button className='submit-agent' type='submit'>Submit</button>
        </form>
    </>
  );
};

export default AgentForm;