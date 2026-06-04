import '../styles/components/NavBar.css';
import { useState, useEffect } from 'react';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return (
        <nav className={isScrolled ? 'scrolled' : ''}>
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