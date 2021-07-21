import type { FC } from "react";
import { useState } from 'react';
import Agents from "../../components/Agents/Agents";
import './HomePage.css';

const HomePage: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className='input-box'>
        <input 
        type='text' 
        placeholder='Enter Your City' 
        onChange={event => setSearchTerm(event.target.value)}
        />
        <hr/>
      </div>
      <Agents  searchTerm={searchTerm}/>
    </>
  );
};

export default HomePage;