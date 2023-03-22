import React, {useState} from "react";
import { useLoggedUpdate } from "./UserContextProvider"

function LoginUser({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const toggleLoggedIn = useLoggedUpdate() 
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            username: username,
            password: password 
        }),
      })
        .then((r) => {
            if (r.ok) {
              r.json().then((user) => onLogin(user));
            } else {
              r.json().then((errorData) => setErrors(errorData));
            }
        });
    }
  
    return (
        <div>
          <h3>Login</h3>
          <form onSubmit={ handleSubmit }>
            <>username: </>
            <input
              type="text"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
           /><br/>
           <>password: </>
           <input
             type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
            {errors.status}<br/> 
            {errors.error}
            </div>
            <button type="submit" onClick={toggleLoggedIn}>Login</button>
         </form>
      </div>
    );
  }

  export default LoginUser