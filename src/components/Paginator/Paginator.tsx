import type { FC } from "react";
import './Paginator.css';

interface Props {
    agentsPerPage: number;
    totalAgents: number;
    paginate: (number: number) => void;
    currentPage: number;
}

const Paginator: FC <Props>= ({ agentsPerPage, totalAgents, paginate, currentPage }) => {
    const pageNumbers: number[] = [];

    for(let i =1; i <= Math.ceil(totalAgents/ agentsPerPage); i++) {
        pageNumbers.push(i);
    }

    return ( 
        <>
            <ul className="paginator">
                {pageNumbers.map(number => (
                    <li 
                    key={number} 
                    className={ number === currentPage ? "page-number-active" : "page-number"}
                    >
                        <p onClick={() => paginate(number)}>
                            {number}
                        </p> 
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Paginator;



