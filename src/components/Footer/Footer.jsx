import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer className="footer">

                <div className="footer-container">
                    <div className="footer-box">
                        <h2>FoodieHub </h2>
                        <p>
                            Delicious burgers and creamy pasta delivered fresh to
                            your doorstep. Order your favorite food anytime.
                        </p>
                    </div>

                    <div className="footer-box">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Home</li>
                            <li>Menu</li>
                            <li>Categories</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="footer-box">
                        <h3>Contact</h3>
                        <p>India</p>
                        <p>+91 79473993902</p>
                        <p>food@foodiehub.com</p>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>© 2026 FoodieHub | All Rights Reserved</p>
                </div>

            </footer>
        </>
    )
}

export default Footer