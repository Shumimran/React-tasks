import { useState } from "react";

const Greetings = () => {
    const [message, setMessage] = useState("Hello World!");

    const changeMessage = () => {
        setMessage("Goodbye World!");
    };

    return (
        <div className="size">
            <h1 className="GreetMsg">{message}</h1>
            <button className="greetBtn" onClick={changeMessage}>Change Message</button>
        </div>
    );
};

export default Greetings;