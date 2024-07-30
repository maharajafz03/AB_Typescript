import React from "react";
import { Link } from "react-router-dom";
//import Dog from "./AuthToggle";

const Home: React.FC = () => {
    
    //<Link to="/complain">complain</Link>

    return (
        <div>
        <div>hello in home</div>
        <Link to="/complain">complain</Link>
        {/* <Dog /> */}
        </div>
    )
}

export default Home