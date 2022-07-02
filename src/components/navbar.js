// functional component
const NavBar = () => {
    return (
        <div>
            <nav className="navbar">
                <h1>Skillspire</h1>
                <div>
                    <a href="/">List</a>
                    <a href="/create">Creat New</a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;