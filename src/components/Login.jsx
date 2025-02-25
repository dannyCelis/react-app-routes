import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../commons/AuthProvider';

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        // debugger;
        login();
        navigate('/');
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Log in</button>
        </div>
    );
}
export default Login;