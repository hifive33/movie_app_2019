import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/hooks">Hooks</Link>
    </div>
}

export default Navigation;