import React from 'react'
import { Link } from 'react-router-dom';

export default function header() {
    return (
        <div>
            <ul>
                <Link to="/home"><li>Home</li></Link>
                <Link to="/posts"><li>Posts</li></Link>
                <Link to="/register"><li>Register</li></Link>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/login"><li>Logout</li></Link>
            </ul>
        </div>
    )
}
