import React from "react";


interface countProps{
    number: number;
    name: string;
}

const Dance: React.FC<countProps> = ({number, }) => {

    return (
        <div>
            <p>{number}</p>
        </div>
    )
}

export default Dance