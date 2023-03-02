import React from "react";

function LogInUser (){
    return (
        <div>
            <h1>Log in</h1>
            <form>
                <input defaultValue="Username"/><br/>
                <input defaultValue="Password"/>
            </form>
        </div>
    )
}

export default LogInUser;