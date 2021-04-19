import React from 'react';

const Country = (props) => {
    const country = props;
    console.log(JSON.stringify(props));
    return (
        <div className="country">
            <img src={country.flag} alt={country.name}/>
            <ul>
                <li>{country.name}</li>
                <li>{country.capital}</li>
                <li>{country.population}</li>
            </ul>
        </div>
    );
};

export default Country;
