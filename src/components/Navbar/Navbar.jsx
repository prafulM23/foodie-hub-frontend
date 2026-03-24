import "./Navbar.css"
import { Link } from "react-router-dom"
import { CircleStar, House, Menu, Search, ShoppingCart, User } from "lucide-react"
import { useState } from "react"
const Navbar = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [isMenu, setisMenu] = useState(false)


    // handleHumberg
    const handleHumbergMenu = () => {
        setisMenu(prev => !prev)
    }
    return (
        <>
            <nav className="navbar">

                {/* logo Section */}
                <Link className="nav-logo-link" to="/">
                    <div className="navbar-logo-box">
                        <h1>Foodie</h1>
                        <p>Hub</p>
                    </div>
                </Link>

                {/* search section */}
                <div className="navbar-search-box">
                    <input type="search" placeholder="Whats your mind" />
                    <Search size={23} color="#ffff" />
                </div>

                {/* menu section */}
                <div className="navbar-menu">
                    <ul>
                        {
                            isLoggedIn ? <>
                                <li><Link className="nav-link" to="/cart"><ShoppingCart size={25} color="red" />Cart</Link></li>
                                <li><Link className="nav-link" to="/logout"><User size={25} color="red" />Logout</Link></li>
                                <li><Link className="nav-link" to="/myorder"><CircleStar size={25} color="red" />My Order</Link></li>
                            </> : <>
                                <li><Link className="nav-link" to="/"> <House size={25} color="red" />Home</Link></li>
                                <li><Link className="nav-link" to="/cart"><ShoppingCart size={25} color="red" />Cart</Link></li>
                                <li><Link className="login-nav-box" to="/login"><User size={25} color="white" />Login</Link></li>

                            </>
                        }
                    </ul>
                </div>

                {/* Humbuerge section */}
                <div className="navbar-humburg-box">
                    <Menu size={28} color="#ff0000" onClick={handleHumbergMenu} />
                </div>

            </nav>

            {/* Humbuerge  menu section */}
            {
                isMenu ?
                    <div className="navbar-humburg-ismenu">
                        <ul>
                            {
                                isLoggedIn ? <>
                                    <li><Link className="nav-link" to="/cart"><ShoppingCart size={25} color="red" />Cart</Link></li>
                                    <li><Link className="nav-link" to="/logout"><User size={25} color="red" />Logout</Link></li>
                                    <li><Link className="nav-link" to="/myorder"><CircleStar size={25} color="red" />My Order</Link></li>
                                </> : <>
                                    <li><Link className="nav-link" to="/"> <House size={25} color="red" />Home</Link></li>
                                    <li><Link className="nav-link" to="/cart"><ShoppingCart size={25} color="red" />Cart</Link></li>
                                    <li><Link className="nav-link" to="/login"><User size={25} color="red" />Login</Link></li>

                                </>
                            }
                        </ul>
                    </div>
                    : ""}
        </>
    )
}
export default Navbar