import React from 'react';

const Nayok = (props) => {
    const nayokStyle={
        border: "5px solid purple",
        borderRadius: "10px",
        margin: "10px"

    }
    return (
        <div style={nayokStyle}>
            <h1>Im learning the project-{props.id} {props.name} </h1>
            <p>I have done 5 moives in {props.age || 90} yours </p>
        </div>
    );
};

export default Nayok;