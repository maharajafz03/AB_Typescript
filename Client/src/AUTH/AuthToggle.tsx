import React, { useState } from "react";
import Dog from "./Dog";
import Snoop from "./Snoop";

const AuthToggle: React.FC = () => {

const [snoopdog, setsnoopdog] = useState<boolean>(true)


    return (
        <div>
         <button onClick={() => setsnoopdog(true)}>Snoop</button>
         <button onClick={() => setsnoopdog(false)}>Doog</button>
         {snoopdog ? <Snoop /> : <Dog />}
         
        </div>
    )
}

export default AuthToggle;