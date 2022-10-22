import React from 'react';

const Country = (props) => {
    console.log(props.country)
    const {capital, population, region, flags} = props.country;
    const hendleAddButton = props.hendleAddButton
    return (
        <div>
            <h5>hello country:{capital}</h5>
            <h4>country population:{population}</h4>
            <p>region: {region}</p>
            <img src={flags} alt=""/>
            <button onClick={() => hendleAddButton(props.country)}>click me</button>
        </div>
    );
};

export default Country;