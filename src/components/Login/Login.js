import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    return (
        <div>
            <div className="mt-5 pt-5 ">
                <div className="box-shadow w-25 py-5 mx-auto">
                    <button className="btn btn-danger" onClick={signInUsingGoogle}>Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;