import { useState } from "react";

const Authenticate = ({token}) => {

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [username, setUsername] = useState(null);
    // const userName = successMessage !== null && successMessage.data ? successMessage.data.username : "";

    const handleClick = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/authenticate",
                {
                    method: "GET",
                    headers: 
                    {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}` 
                    }
                }
            );

            const result  = await response.json();
            console.log(result);
            setSuccessMessage(result.message);
            console.log(result.data);
            setUsername(result.data.username);
            console.log(result.data.username);

        } catch (error) {
            setError(error.message)
        }
    }

    return(
        <section id="message">
            <h2>Authenticate</h2>
            {console.log("Success message: ", successMessage)}
            {(successMessage === "Correctly Authenticated!") && <p> Username: {username}. {successMessage}</p>}
            {error && <p>Please enter your username and password.</p>}

            <button onClick={handleClick}>Authenticate Token</button>
        </section>
    )
}

export default Authenticate