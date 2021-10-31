import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth()

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri)
            })
    }

    return (
        <div>
            <div className="mt-5 pt-5 ">
                <div className=" w-100 w-lg-25 py-5 mx-auto">
                    <h2 className="mb-3">Please Login</h2>
                    <button className="btn btn-danger" onClick={handleGoogleSignIn}><i className="fab fa-google"></i> Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;