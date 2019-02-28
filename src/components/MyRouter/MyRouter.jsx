import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavLinks from '../NavLinks/NavLinks';
import HomePage from '../HomePage/HomePage'
import TwitterFeed from '../TwitterFeed/TwitterFeed'
import TacosFeed from '../TacosFeed/TacosFeed'
const data = "Hello";

function MyRouter() {
    return (
        <BrowserRouter>
            <div>
                <NavLinks/>
                <Switch>
                    <Route
                        path="/twitter"
                        render={(props) => <TwitterFeed data={data} { ...props }/>}/>
                    <Route path="/tacos/:id/:userid" component={TacosFeed}/>
                    <Route path="/tacos" component={TacosFeed}/>
                    <Route path="/" component={HomePage}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default MyRouter;
