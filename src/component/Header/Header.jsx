import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: '50px' , paddingLeft:'200px'}}>
            <Link style={{paddingLeft:'750px', color:'red'}} to="/">Home</Link>
            <Link style={{paddingLeft:'50px',color:'red'}} to="/login">Login</Link>
        </div>
    );
};

export default Header;