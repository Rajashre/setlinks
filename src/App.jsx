import React from 'react';
import { Route, Switch } from "react-router";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service"
// import Error from "./Error";
import Menu from "./Menu";


const App = () => {
    const Name = () =>{
       return <h1>Hiii, i Am Name page</h1>; 
    }    
    return(
    
        <>
        <Menu/>
        <Switch>
            <Route exact path= "/"component={() => <About name="About"/>} />
            <Route exact path="/service" component={() => <Service name="Service"/>} /> 
            <Route exact path= "/contact" component={Contact}/>
            <Route path="/contact/Name" component={Name}/>
            {/* <Route component ={Error}/> */}
            </Switch>
        </>
         
       
    );

}; 
export default App;