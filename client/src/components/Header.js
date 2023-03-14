import React from 'react';
import { useLogged } from './UserContextProvider';

function Header({username}){
    return (
        <div className='header'>
            {useLogged ? <h1>Welcome to From the Vine WineClub and Catalogue</h1> : <h1>Welcome {username}</h1>}
        </div>
    )
}

export default Header;