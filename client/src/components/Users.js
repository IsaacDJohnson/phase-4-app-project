import React from 'react'

function Users({userData}){
    return (
        <div>
            <ul>
            {userData ? userData.map((user)=> 
                    <li>{user.username}</li>) : []}
            </ul>
        </div>
    )
}

export default Users;