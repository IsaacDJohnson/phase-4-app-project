import React from 'react';

function Header({username, user}){

    return (
        <div className='header'>
            {!user ? <h1>Welcome to From the Vine WineClub and Catalogue</h1> : <h1>Welcome {username}</h1>}
        </div>
    )
}

export default Header;