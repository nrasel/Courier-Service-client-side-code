import React, { useEffect, useState } from 'react';
import Agent from '../Agent/Agent';

const Agents = () => {
    const [agents, setAgents] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/agents`)
            .then(res => res.json())
            .then(data => setAgents(data))
    }, [])
    return (
        <div>
            <div className="container">
                <div class="section-title mt-3">
                    <h1 class="position-relative">Our Agent Location</h1>
                    <p> Agent locations are places where you can transfer and receive money or pay a bill in person with Western Union</p>
                </div>

                <div className="row">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {
                            agents.map(agent => <Agent
                                key={agent._id}
                                agent={agent} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agents;