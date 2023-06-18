import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { useState } from 'react';


export const Navbar = () => {

    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const [isNavOpen, setIsNavOpen] = useState(false);


    const onLogout = () => { 
        logout()

        navigate('/login', {
            replace: true
        });
    }

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <button 
                className="navbar-toggler" 
                type="button" 
                onClick={toggleNav}
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink 
                            className="nav-link" 
                            activeClassName="active" 
                            to="/marvel"
                            onClick={toggleNav}
                        >
                            Marvel
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className="nav-link" 
                            activeClassName="active" 
                            to="/dc"
                            onClick={toggleNav}
                        >
                            DC
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className="nav-link" 
                            activeClassName="active" 
                            to="/search"
                            onClick={toggleNav}
                        >
                            Search
                        </NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <span className="nav-link text-primary">{user.name}</span>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn" onClick={onLogout}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}