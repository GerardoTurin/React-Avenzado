import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import logo from "../assets/react.svg";

const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" style={{ width: '100px', marginTop: '20px' }} />

                        <ul>
                            <li>
                                <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/home" element={<h1>Home</h1>} />
                        <Route path="/about" element={<h1>About</h1>} />
                        <Route path="/contact" element={<h1>Contact</h1>} />
                        <Route path="*" element={ <Navigate to="/home" replace /> } />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
};

export default Navigation;