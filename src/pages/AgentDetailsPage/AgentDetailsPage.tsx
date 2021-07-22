import type { FC } from "react";
import { Link, useParams } from "react-router-dom";
import AgentDetails from "../../components/AgentDetails/AgentDetails";
import './AgentDetailsPage.css';

interface Props {
  id: string
}
const AgentDetailsPage: FC = () => {
  const { id }  = useParams<Props>();

  return (
    <>
      <div className='agent-header-box'>
         <Link className='back-link' to='/'>Back</Link>
          <Link to={`/agent/${id}/review-form`}>
            <button>Add Review</button>
          </Link>
       </div>
      <AgentDetails />
    </>
  );
};

export default AgentDetailsPage;