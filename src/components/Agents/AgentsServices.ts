import { IAgent } from "../../types/Agent"

// filters the list of agents based on there areas of practice
function filterAgents(searchTermParam: string, agents: IAgent[]) {
    // eslint-disable-next-line array-callback-return
    return agents.filter((agent) => {
        const searchTerm = searchTermParam.toLowerCase();
        const areas = agent.practiceAreas.toString().toLowerCase();
        
            if (searchTerm === ""){
                return agent;
            } else if (areas.includes(searchTerm)){
                return agent;
            }
    })
}

export default filterAgents;


