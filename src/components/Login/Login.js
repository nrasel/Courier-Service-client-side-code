import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    return (
        <div>
            <button onClick={signInUsingGoogle}>Login</button>
        </div>
    );
};

export default Login;