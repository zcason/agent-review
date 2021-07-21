import type { FC } from "react";
import { Link } from "react-router-dom";
import AgentForm from "../../components/AgentForm/AgentForm";
import './AgentFormPage.css';


const AgentFormPage: FC = () => {
  return (
    <div className='agent-form-container'>
      <Link className='back-link' to='/'>Back</Link>
      <AgentForm/>
    </div>
  );
};

export default AgentFormPage;