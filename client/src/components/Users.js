import React from 'react'

function Users({userData}){
    return (
        <div className='card'>
            <ul>
            {userData ? userData.map((user)=> <li>{user.username}</li>) : []}
            </ul>
        </div>
    )
}

export default Users;