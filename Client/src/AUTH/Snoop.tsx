import React from "react";

const Snoop: React.FC = () => {

    return (
        <div>
            <input type="name" />
            <p>UserName</p>
            <div>
                <input type="mailid"/>
                <p>MailId</p>
            </div>
            <div>
                <input type="password"/>
                <p>Password</p>
            </div>
            <button>Submit</button>
        </div>
    )
}

export default Snoop;