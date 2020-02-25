import React from 'react';

const Nav = () => {
    return(
        <nav className='nav'>
            <div><a href="#">Profile</a></div>
            <div><a href="#">Massage</a></div>
            <div><a href="#">News</a></div>
            <div><a href="#">Music</a></div>
            <div className='settings'><a href="#">Settings</a></div>

        </nav>

    )
};

export default Nav;