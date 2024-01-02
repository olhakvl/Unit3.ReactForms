import { useState } from "react"

const SignUpForm = ({setToken}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [usernameError, setUsernameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const min = 8;
        if(username.length < min){
            setUsernameError("Please enter a username at least 8 characters long.")
        }
        if(password.length < min){
            setPasswordError("Please enter a password at least 8 characters long.")
        }
        console.log("Handle Submit function");
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            setToken(jsonResponse.token);
            
        } catch (error) {
            setError(error.message);
        }

        setUsername("");
        setPassword("");
    }


    return(
        <section>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            {/* or */}
            {/* {error ? <p>{error}</p> : null} */}

            <form id="signUpForm" onSubmit={handleSubmit}>
                <label>
                    Username: <input value={username} type="text" onChange={(event) => setUsername(event.target.value)} required/>
                    <div id="invalidUsername"><br/>{usernameError}</div>
                </label><br />
                <label>
                    Password: <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required/>
                    <div id="invalidPassword"><br/>{passwordError}</div>
                </label><br />
                <button>Submit</button>
            </form>
        </section>
    )
}



// or
// export default function SignUpForm() {
//     return <h2>Sign Up!</h2>;
//   }

export default SignUpForm