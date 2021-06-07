import './Navbar.css';
import { Link, BrowserRouter as Router } from "react-router-dom";

function Navbar(props) {
    return (
        <nav id='navbar'>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/About">About</Link></li>
            </ul>
            <div className="nav-details">
            <p className="nav-username"> Bob </p>
            </div>
        </nav>
    );
}

export default Navbar;