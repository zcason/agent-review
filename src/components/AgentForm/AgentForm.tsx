import axios from 'axios';
import  React, { FC, useEffect } from 'react';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './AgentForm.css';

interface IFormInputs {
    firstName: string;
    lastName: string;
    photoUrl: string; 
    agentLicence: string; 
    address: string; 
    practiceAreas: string;
    aboutMe?: string;
}

const AgentForm: FC = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<IFormInputs>();
    const [formValues, setFormValues] = useState<IFormInputs>({
        firstName: "",
        lastName: "",
        photoUrl: "",
        agentLicence: "",
        address: "",
        practiceAreas: "",
        aboutMe: ""
    });
    const [error, setError] = useState<string>("");
    const [eventCreated, setEventCreated] = useState<boolean>(false);

    useEffect(() => {
        const data: string | null = localStorage.getItem('form-inputs');
        if (data) {
            setFormValues(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('form-inputs', JSON.stringify(formValues));
    });

    const submitForm: SubmitHandler<IFormInputs> = async (agent: IFormInputs) => {
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
                value={formValues.firstName}
                onChange={(e) => setFormValues({...formValues, firstName: e.target.value})}
                placeholder='Joe'
                type='text'
                required
            />
            {errors.firstName && <span>This field is required</span>}
            {/* last name */}
            <label htmlFor='lastName'>Last Name</label>
            <input
                {...register('lastName')}
                id='lastName'
                className='form-control'
                value={formValues.lastName}
                onChange={(e) => setFormValues({...formValues, lastName: e.target.value})}
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
                value={formValues.photoUrl}
                onChange={(e) => setFormValues({...formValues, photoUrl: e.target.value})}
                placeholder='https://unsplash.com/photos/KBzb07tXYWA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'
                type='text'
            />
            {/* agent license */}
            <label htmlFor='agentLicence'>Agent License</label>
            <input
                {...register('agentLicence')}
                id='agentLicence'
                className='form-control'
                value={formValues.agentLicence}
                onChange={(e) => setFormValues({...formValues, agentLicence: e.target.value})}
                placeholder='123456'
                type='text'
                required
            />
            {errors.agentLicence && <span>This field is required</span>}
            {/* address */}
            <label htmlFor='address'>Address</label>
            <input
                {...register('address')}
                id='address'
                className='form-control'
                value={formValues.address}
                onChange={(e) => setFormValues({...formValues, address: e.target.value})}
                placeholder="555 Some Place Rd, Los Angeles, CA 90077"
                type='text'
                required
            />
            {errors.address && <span>This field is required</span>}
            {/* practice areas */}
            <label htmlFor='practiceAreas'>Practice Areas</label>
            <input 
                {...register('practiceAreas')}
                id='practiceAreas'
                className='form-control'
                value={formValues.practiceAreas}
                onChange={(e) => setFormValues({...formValues, practiceAreas: e.target.value})}
                placeholder='Los Angeles, San Francisco, Miami'
                type='text'
                required
            />
            {errors.practiceAreas && <span>This field is required</span>}
            {/* about me */}
            <label htmlFor='aboutMe'>About Me</label>
            <textarea
                {...register('aboutMe')}
                id='aboutMe'
                className='agent-text-area'
                value={formValues.aboutMe}
                onChange={(e) => setFormValues({...formValues, aboutMe: e.target.value})}
            />
            <button className='submit-agent' type='submit'>Submit</button>
        </form>
    </>
  );
};

export default AgentForm;