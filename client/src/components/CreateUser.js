import React, { useState } from "react";

function CreateUser({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          password_confirmation: passwordConfirmation,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        }
      });
    }
  
    return (
      <div>
        <h1>create account</h1>
        <form onSubmit={handleSubmit}>
          <>username: </>
          <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}/><br/>
          <>password: </>
          <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)}/><br/>
          <>confirm password: </>
          <input type="text" value={passwordConfirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)}/>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
  
  export default CreateUser;