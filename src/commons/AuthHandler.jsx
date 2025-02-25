import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./AuthProvider";

function AuthHandler() {
    const navigate = useNavigate();
    const { login, logout } = useAuth();

    useEffect(() => {
        // debugger;
        const token = sessionStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                if (decoded.exp * 1000 > Date.now()) {
                    login(true);
                    navigate('/');
                } else {
                    sessionStorage.removeItem('token');
                    logout(false);
                    navigate('/login');
                }
            } catch (error) {
                console.error("Invalid token:", error);
                sessionStorage.removeItem('token');
                logout(false);
                navigate('/login');
            }
        } else {
            logout(false);
            navigate('/login');
        }
    }, [login, logout, navigate]);

    return null; // This component does not render anything
}

export default AuthHandler;
