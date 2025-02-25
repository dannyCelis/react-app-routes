import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        sessionStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTc0MDY5MjQxMywiaWF0IjoxNzQwNTE5NjEzfQ.8LibxOxEExG3f6hw7UWjx2R17GazgKqSUPB55glbCWg');
        setIsAuthenticated(true);
    }
    const logout = () => {
        sessionStorage.removeItem('token');
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}