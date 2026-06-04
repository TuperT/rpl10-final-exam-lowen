import '../styles/components/NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <div id="nav-header">
                team<span>.</span>
            </div>
            <div id="nav-menus">
                <a href="#" className="menu">Product</a>
                <a href="#" className="menu">Blog</a>
                <a href="#" className="menu">Support</a>
                <a href="#" className="menu">Log In</a>
                <button id="menu-btn">Get Access</button>
            </div>
        </nav>
    )
}

export default NavBar