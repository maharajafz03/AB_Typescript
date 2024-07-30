import React from "react";

const Dog: React.FC = () => {

    return (
        <div>
            <div>
                <input type="mailid"/>
                <p>MailId</p>
            </div>
            <div>
                <input type="password"/>
                <p>Password</p>
            </div>
            <button>Login</button>
        </div>
    )
}

export default Dog;