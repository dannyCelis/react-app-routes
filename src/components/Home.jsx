import { useAuth } from '../commons/AuthProvider';
import { useNavigate } from 'react-router-dom';

function Home() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };
    return (<>
        <h1>Home 2</h1>
        <button onClick={handleLogout}>Log out</button>
    </>);
}
export default Home;
