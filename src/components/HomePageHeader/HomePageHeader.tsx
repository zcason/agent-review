import type { FC } from "react";
import { Link } from "react-router-dom";
import './HomePageHeader.css';

interface Props {
    cityOfPracitce: (searchTerm: string) => void

}

const HomePageHeader: FC<Props> = ({ cityOfPracitce }) => {
  return (
    <div className="header-box">
      <div className='input-box'>
        <input 
        type='text' 
        placeholder='Enter Your City' 
        onChange={event => cityOfPracitce(event.target.value)}
        />
        <hr/>
      </div>
      <Link to={'/agent-form'}>
        <button>Add an agent</button>
      </Link>
    </div>
  );
};

export default HomePageHeader;