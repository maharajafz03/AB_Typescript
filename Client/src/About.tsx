import React from "react";
//import { PromptProps } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthToggle from "./AUTH/AuthToggle";


type Mprops = {
    name: string;
    age: number
}

const About: React.FC<Mprops> = (props) => {
 
    

    return (
        <div>
        <p>props:`my name is {props.name} im {props.age} old`</p>
        <p>Hello in about</p>
        <Link to="/">Home</Link>  
        <AuthToggle />  
        </div>
         
    )
}

export default About