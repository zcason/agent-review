import type { FC } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IAgent } from "../../types/Agent";
import { IReview } from "../../types/Review";
import Paginator from "../Paginator/Paginator";
import AgentReviews from "../AgentReviews/AgentReviews";

interface Details {
    details: IAgent;
    reviews: IReview[];
}

interface Props {
    id: string
}


const AgentDetails: FC = () => {
    const { id }  = useParams<Props>();
    const [agent, setAgent] = useState<Details>();
    // The current page that the user is on in the paginator
    const [currentPage, setCurrentPage] = useState<number>(1);
    // The number of reviews allowed to be shown per page
    const reviewsPerPage: number = 3; 
    // The index of the last page of the paginator
    const indexOfLastReview: number = currentPage * reviewsPerPage;
    // The index of the first page in the paginator
    const indexOfFirstReview: number = indexOfLastReview - reviewsPerPage;
     // The total number of reviews recieved from the search
     const totalReviews: number = agent ? agent?.reviews.length : 0;
     // Gets a set reviews based on the page number
     const currentReviews: IReview[] = agent ? agent?.reviews.slice(indexOfFirstReview, indexOfLastReview) : [];
     // Changes page
     const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

     useEffect(() => {
        async function fetchInitialData() {
          const response = await axios.get(`/agents/${id}`);
          setAgent(response.data);
        }
        fetchInitialData();
      }, [id]);
  return (
    <>
      { agent && <div>
            <h2>
              {agent.details.firstName + ' ' + agent.details.lastName}
            </h2>
            <img src={agent.details.photoUrl} className="avatar" alt={agent.details.firstName} />
            <span>Address: {agent.details.address}</span>
            <span>Agent Licence: {agent.details.agentLicence}</span>
            <span>Areas of Practice: {agent.details.practiceAreas}</span>
            <div>
                <span>About Me</span>
                <div>{agent.details.aboutMe}</div>
            </div>
      </div>}
      {currentReviews.map((review) => (
          <AgentReviews key={review.id} review={review} />
      ))}
      <Paginator
      perPage={reviewsPerPage} 
      total={totalReviews} 
      paginate={paginate}
      currentPage={currentPage}
      />
    </>
  );
};

export default AgentDetails;