import type { FC } from "react";
import { useState, useEffect } from "react";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import filterAgents from "./AgentsServices";
import Agent from "../Agent/Agent";
import Paginator from "../Paginator/Paginator";
import './Agents.css';
import { Link } from "react-router-dom";

const Agents: FC<{searchTerm: string}>= ({ searchTerm }) => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  // The filtered list of agents from searching for the city an agent can practice in
  const filteredAgents: IAgent[] = filterAgents(searchTerm, agents);
  // The current page that the user is on in the paginator
  const [currentPage, setCurrentPage] = useState<number>(1);
  // The number of agents allowed to be shown per page
  const agentsPerPage: number = 4; 
  // The index of the last page of the paginator
  const indexOfLastAgent: number = currentPage * agentsPerPage;
  // The index of the first page in the paginator
  const indexOfFirstAgent: number = indexOfLastAgent - agentsPerPage;
   // The total number of agents recieved from the search
   const totalAgents: number = filteredAgents.length;
   // Gets a set agents based on the page number
   const currentAgents: IAgent[] = filteredAgents.slice(indexOfFirstAgent, indexOfLastAgent);
   // Changes page
   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
   function fetchInitialData() {
      axios.get("/agents").then(res => setAgents(res.data as IAgent[]))
      
    }
    fetchInitialData();
  }, []);

  return (
    <>
      <div className="agents">
        {currentAgents.map((agent) => (
          <Link className='agent-link' to={`agent/${agent.id}`}>
            <Agent key={agent.id} agent={agent} />
          </Link>
          ))}
      </div>
        <Paginator 
        perPage={agentsPerPage} 
        total={totalAgents} 
        paginate={paginate}
        currentPage={currentPage}
        />
      </>
  );
};

export default Agents;
