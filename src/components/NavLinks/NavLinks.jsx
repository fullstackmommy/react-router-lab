import React from 'react';
import {Link} from "react-router-dom";

function NavLinks() {
    return (
        <div>
            <Link to="/">Home Page
            </Link>
            <Link to="/tacos">Tacos Feed
            </Link>
            <Link to="/tacos/10/20">Tacos with id 10
            </Link>
            <Link to="/twitter?searchTerm=obama&year=2016&topic=anything">Twitter Feed
            </Link>
        </div>
    )
}

export default NavLinks
