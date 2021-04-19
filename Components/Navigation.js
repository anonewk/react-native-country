import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            {/* equivalent à <a>*/}
            {/*exact pour url exact*/}
            {/*activeClassName = Donner un style particulier à une classe*/}
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to='about' activeClassName="nav-active">
                About
            </NavLink>

        </div>
    );
};

export default Navigation;
