import React, { useState } from "react";
import Mydata from "./Mydata";

const Complain: React.FC = () => {
    const [count, setCount] = useState<number>(10); // State to manage user input
    const [message, setMessage] = useState<string>("Welcome back");

    const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCount(Number(event.target.value)); // Update count based on user input
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value); // Update message based on user input
    };

    const handleSubmit = () => {
        // Any additional logic if needed
    };

    return (
        <div>
            <input 
                type="number" 
                value={count}
                onChange={handleCountChange}
                placeholder="Enter count value"
            />
            <input 
                type="text" 
                value={message}
                onChange={handleMessageChange}
                placeholder="Enter message"
            />
            <button onClick={handleSubmit}>Submit</button>
            <Mydata manage={count} message={message} /> {/* Pass count and message as props */}
            <p>Welcome back</p>
        </div>
    );
}

export default Complain;
