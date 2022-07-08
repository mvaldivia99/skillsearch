import { Link } from 'react-router-dom';

// functional component
const NavBar = () => {
    return (
        <div>
            <nav className="navbar">
                <h1>Skillspire</h1>
                <div className='links'>
                    <Link to="/list">List</Link>
                    <Link to="/create">Creat New</Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;