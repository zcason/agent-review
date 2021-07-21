import type { FC } from "react";
import './AgentForm.css';


const AgentForm: FC = () => {
  return (
    <>
      <form
                    className={'agent-form'}
                    // onSubmit={this.handleSubmit}
                >
                    {/* first name */}
                    <label htmlFor='first-name'>First name</label>
                    <input
                        id='first-name'
                        className='form-control'
                        type='text'
                        required
                    />
                    {/* last name */}
                    <label htmlFor='last-name'>Last Name</label>
                    <input
                        id='last-name'
                        className='form-control'
                        type='text'
                        required
                    />
                    {/*  photo url*/}
                    <label htmlFor='photo-url'>Photo Url</label>
                    <input
                        id='photo-url'
                        className='form-control'
                        type='text'
                    />
                    {/* agent license */}
                    <label htmlFor='agent-license'>Agent License</label>
                    <input
                        id='agent-license'
                        className='form-control'
                        type='text'
                        required
                    />
                    {/* address */}
                    <label htmlFor='address'>Address</label>
                    <input
                        id='address'
                        className='form-control'
                        type='text'
                        required
                    />
                    {/* practice areas */}
                    <label htmlFor='practice-areas'>Practice Areas</label>
                    <input
                        id='practice-areas'
                        className='form-control'
                        type='text'
                        required
                    />
                    <label htmlFor='about-me'>About Me</label>
                    <textarea
                        id='about-me'
                        className='agent-text-area'
                    />
                    <button className='submit-agent' type='submit'>Submit</button>
                </form>
    </>
  );
};

export default AgentForm;