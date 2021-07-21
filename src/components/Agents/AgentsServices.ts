import { IAgent } from "../../types/Agent"

// filters the list of agents based on there areas of practice
function filterAgents(searchTermParam: string, agents: IAgent[]): IAgent[]{
    // eslint-disable-next-line array-callback-return
    return agents.filter(agent => {
        const searchTerm: string = searchTermParam.toLowerCase();
        const areas: string = agent.practiceAreas.toString().toLowerCase();
        
            if (searchTerm === ""){
                return agent;
            } else if (areas.includes(searchTerm)){
                return agent;
            }
    })
}

export default filterAgents;