import React, { useState } from 'react';
import axios from 'axios';

const Home: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/data', { name, email });
      console.log('Data saved:', response.data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Submit Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home



// import { Link } from "react-router-dom"
// import React, { useState }  from "react"
// //import Snoop from "./AUTH/Snoop"
// import Mangai from "./Mangai"


// const Home: React.FC = () => {
    
//     // <Link to="/complain">complain</Link>
     
//     const [pages, setpages] = useState<boolean>(false)


//     const handleclick = () => {
//      setpages(prev => !prev)
//     }


//     return (
//         <div>
//         <div>hello in home</div>
//         <Link to="/complain">complain</Link>
        
//         <button onClick={handleclick}>Show</button>
//         {pages ? <Mangai /> : false}
//         </div>
        
//     )
// }

// export default Home