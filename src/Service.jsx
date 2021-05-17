import React from "react";
import { useEffect } from "react";


const Services =(props) =>{
    useEffect(()=>{
        document.addEventListener("click",handleClick);

        return function cleanup(){
            document.removeEventListener("click",handleClick);
        };
    });

    function handleClick(){
        console.log("Hii");
    }
    console.log("Hii ");
    return<h1>Hello, I am a {props.name} Service page</h1>
};
export default Services;