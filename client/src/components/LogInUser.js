import React, {useState} from "react";

function LoginUser({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

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
        .then((r) => r.json())
        .then((user) => onLogin(user));
    }
  
    return (
        <div>
    <h3>Login</h3>
      <form onSubmit={handleSubmit}>
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
        /><br/>
        <button type="submit">Login</button>
      </form>
      </div>
    );
  }

  export default LoginUser