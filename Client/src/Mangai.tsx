import React, { useState } from "react";

const Mangai: React.FC = () => {
    const [page, setPage] = useState<boolean>(true);

    const handleClick = () => {
        setPage(false);
    };

    return (
        <div>
            {page ? (
                <div>
                    <p>close this add <button onClick={handleClick}>close</button></p>
                    <h1>Hello Welcome</h1>
                </div>
            ) : (
                true
            )}
        </div>
    );
};

export default Mangai;
