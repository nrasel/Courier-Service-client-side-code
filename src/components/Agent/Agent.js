import React from 'react';
import '../Agents/Agents.css'

const Agent = (props) => {
    const { title, outlet, img } = props.agent
    return (
        <div>
            <img className="agent-img" src={img} alt="" />
            <h5 className="mt-3">{title}</h5>
            <p>{outlet}</p>
        </div>
    );
};

export default Agent;