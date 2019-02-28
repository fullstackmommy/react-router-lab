import React from 'react'
import {Redirect} from 'react-router-dom'

function TacosFeed({match, history, userIsLoggedIn}) {

    const onBackClick = () => {
        //history.push("/"); history.goBack(); history.go(-2);
        history.push("/");
    }

    /*     const onForwardClick = () => {
        //history.push("/"); history.goForward();
        history.go(1);
    } */

    if (userIsLoggedIn) {
        return (
            <div>
                <h1>This is your TacosFeed page</h1>
                <h2>{match.params.id}</h2>
                <button onClick={onBackClick}>Back</button>
            </div>
        )
    } else {
        return <Redirect to="/unauthorized"/>
    }
}

export default TacosFeed
