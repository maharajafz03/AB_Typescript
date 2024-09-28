//"use client"

import {  useState } from "react"
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient();

export default function app () {


    const [name, setName] = useState<string | number | undefined>()
    const [email, setEmail] = useState<string | number | undefined>()


    
    const handleSubmit = async () => {
        try {
          // Create a new user in the database
          const newUser = await prisma.user.create({
            data: {
              name: name || '', // Use empty string if name is undefined
              email: email || '', // Use empty string if email is undefined
            },
          });
          console.log("User created:", newUser);
          // Optionally, reset the input fields after submission
          setName(undefined);
          setEmail(undefined);
        } catch (error) {
          console.error("Error creating user:", error);
        }
      };
    

    return (
        <div>
            <input type="name" placeholder="enter_emai" onChange={(e) => setName(e.target.value)}></input>
            <input type="email" placeholder="enter_password" onChange={(e) => setEmail(e.target.value)}></input>
            <button onClick={handleSubmit}>submit</button>

            <p>name:  {name} </p> 
            <p>email:  {email} </p>
        </div>
    )
}