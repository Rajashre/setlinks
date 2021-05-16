import React from 'react';
import { Route, Switch } from "react-router";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";

const App = () => {
    const Name = () =>{
       return <h1>Hiii, iAm Name page</h1>; 
    }    
    return(
    
        <>
        <Switch>
            <Route eaxct path= "/"component={About}/>
            <Route exact path= "contact" component={Contact}/>
            <Route path="/contact/Name" component={Name}/>
            <Route component ={Error}/>
            </Switch>
        </>
         
       
    )

}; 
export default App; 