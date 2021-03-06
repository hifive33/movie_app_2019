import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/hooks/useState">Hooks_useState</Link>
      <Link to="/hooks/useEffect">Hooks_useEffect</Link>
      <Link to="/hooks/useTitle">Hooks_useTitle</Link>
      <Link to="/hooks/useClick">Hooks_useClick</Link>
    </div>
  );
}

export default Navigation;
