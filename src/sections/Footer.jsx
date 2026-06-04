import '../styles/sections/Footer.css'

const Footer = () => {
    return (
        <footer>
            <div id="logo-container">
                <h1 id='logo'>team<span>.</span></h1>
                <p id='logo-footer'>Collaboration platform for mordern team</p>
            </div>

            <div id="menus">
                <div id="company">
                    <h2 className='foot-header'>Company</h2>
                    <a href="#" className='foot-menu'>Product</a>
                    <a href="#" className='foot-menu'>Blog</a>
                    <a href="#" className='foot-menu'>Support</a>
                </div>

                <div id="features">
                    <h2 className='foot-header'>Features</h2>
                    <a href="#" className='foot-menu'>Screen Sharing</a>
                    <a href="#" className='foot-menu'>IOS & Android Apps</a>
                    <a href="#" className='foot-menu'>File Sharing</a>
                    <a href="#" className='foot-menu'>User Management</a>
                </div>

                <div id="contact">
                    <h2  className='foot-header'>Contact Us</h2>
                    <p className='foot-contact-info'>info@teamapp.com</p>
                    <p className='foot-contact-info'>1-800-200-300</p>
                    <p className='foot-contact-info'>1010 Sunset Blv. <br /> Pala Alto. California</p>
                </div>

                <div id="sutd">
                    <h2 className="foot-header">Stay Up To Date</h2>
                    <p id='sutd-desc'>Subscribe to our newseller</p>
                    <input type="email" placeholder='Email' />
                    <button type='submit' id='footer-input-btn'>&#8594;</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer