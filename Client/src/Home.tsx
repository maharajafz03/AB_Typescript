import { Link } from "react-router-dom"
import React, { useState }  from "react"
//import Snoop from "./AUTH/Snoop"
import Mangai from "./Mangai"


const Home: React.FC = () => {
    
    // <Link to="/complain">complain</Link>
     
    const [pages, setpages] = useState<boolean>(false)


    const handleclick = () => {
     setpages(prev => !prev)
    }


    return (
        <div>
        <div>hello in home</div>
        <Link to="/complain">complain</Link>
        
        <button onClick={handleclick}>Show</button>
        {pages ? <Mangai /> : false}
        </div>
        
    )
}

export default Home