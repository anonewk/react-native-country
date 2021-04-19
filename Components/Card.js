import React from 'react';
import Country from "../Pages/Country";
import {NavLink} from "react-router-dom";

const Card  = (props) => {
    // const {country} = props = props.country
    const {country} = props;
    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    console.log(JSON.stringify(country));

    return (
        <div className="card">
            <NavLink exact to="/country" activeClassName="nav-active">
                <img src={country.flag} alt="flag"/>
                <div className="data-container">
                    <ul>
                        <li>{country.name}</li>
                        <li>{country.capital}</li>
                        <li>{numberFormat(country.population)}</li>
                    </ul>
                </div>
            </NavLink>
        </div>
    );
};

export default Card ;
