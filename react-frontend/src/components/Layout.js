import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/global.css';

const Layout = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="app-container">
            {/* ===== NAVBAR (First Version Style) ===== */}
            <nav className="navbar" style={{
                background: 'white',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: '15px 0'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 20px'
                }}>
                    {/* Logo - Simple PWMS text like first version */}
                    <Link to="/" style={{
                        textDecoration: 'none'
                    }}>
                        <h2 style={{
                            margin: 0,
                            color: '#0b8a34',
                            fontSize: '1.8rem',
                            fontWeight: '700'
                        }}>PWMS</h2>
                    </Link>

                    {/* Navigation Links - Like first version */}
                    <div style={{
                        display: 'flex',
                        gap: '30px',
                        alignItems: 'center'
                    }}>
                        <Link to="/" style={navLinkStyle}>Home</Link>
                        <Link to="#services" style={navLinkStyle} onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                        }}>Services</Link>
                        <Link to="#about" style={navLinkStyle} onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                        }}>About</Link>
                        <Link to="#news" style={navLinkStyle} onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' });
                        }}>News</Link>
                        <Link to="#contact" style={navLinkStyle} onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}>Contact</Link>
                        
                        {/* Your existing conditional links for logged-in users */}
                        {user && (
                            <>
                                <Link to="/dashboard" style={navLinkStyle}>Dashboard</Link>
                                <Link to="/report" style={navLinkStyle}>Report Waste</Link>
                                <Link to="/pickup" style={navLinkStyle}>Schedule Pickup</Link>
                            </>
                        )}
                    </div>

                    {/* User Section - Like first version with your auth logic */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        {user ? (
                            <>
                                <span style={{
                                    color: '#666',
                                    fontSize: '0.9rem',
                                    marginRight: '10px'
                                }}>
                                    Welcome, <strong>{user.name}</strong>
                                </span>
                                <button onClick={handleLogout} className="btn btn-danger">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/signup" style={{
                                    padding: '8px 16px',
                                    background: '#0b8a34',
                                    color: 'white',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    transition: 'all 0.3s'
                                }}>
                                    Signup
                                </Link>
                                <span style={{ color: '#ccc', margin: '0 5px' }}>|</span>
                                <Link to="/login" style={{
                                    padding: '8px 16px',
                                    background: 'transparent',
                                    color: '#333',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    transition: 'all 0.3s'
                                }}>
                                    Login
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* Main Content - Keep your existing */}
            <main className="main-content" style={{ marginTop: '80px' }}>
                <Outlet />
            </main>

            {/* Footer - Fixed with proper hrefs or buttons */}
            <footer
                style={{
                    backgroundColor: "#1f2933",
                    color: "#ffffff",
                    padding: "40px 0",
                    fontFamily: "Arial, sans-serif"
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 20px"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: "30px"
                        }}
                    >
                        {/* Section 1 */}
                        <div style={{ minWidth: "200px" }}>
                            <h3 style={{ marginBottom: "10px" }}>PWMS</h3>
                            <p style={{ margin: "5px 0" }}>PWMS@gmail.com</p>
                            <p style={{ margin: "5px 0" }}>info@PWMS.com</p>
                            <p style={{ margin: "5px 0" }}>PWMS.com</p>
                        </div>

                        {/* Section 2 */}
                        <div style={{ minWidth: "200px" }}>
                            <h4 style={{ marginBottom: "10px" }}>Contact</h4>
                            <p style={{ margin: "5px 0" }}>www.PWMS.com</p>
                            <p style={{ margin: "5px 0" }}>63929</p>
                            <p style={{ margin: "5px 0" }}>943299</p>
                        </div>

                        {/* Section 3 - Fixed social media links */}
                        <div style={{ minWidth: "200px" }}>
                            <h4 style={{ marginBottom: "10px" }}>Follow Us</h4>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "12px",
                                    alignItems: "center"
                                }}
                            >
                                {/* Replace href="#" with valid URLs or buttons */}
                                <button 
                                    onClick={() => window.open('https://facebook.com', '_blank')}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        padding: 0,
                                        cursor: 'pointer'
                                    }}
                                    aria-label="Visit our Facebook page"
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                                        alt="Facebook"
                                        style={{ width: 18, height: 18 }}
                                    />
                                </button>
                                <button 
                                    onClick={() => window.open('https://twitter.com', '_blank')}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        padding: 0,
                                        cursor: 'pointer'
                                    }}
                                    aria-label="Visit our Twitter page"
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                                        alt="Twitter"
                                        style={{ width: 18, height: 18 }}
                                    />
                                </button>
                                <button 
                                    onClick={() => window.open('https://instagram.com', '_blank')}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        padding: 0,
                                        cursor: 'pointer'
                                    }}
                                    aria-label="Visit our Instagram page"
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/733/733561.png"
                                        alt="Instagram"
                                        style={{ width: 18, height: 18 }}
                                    />
                                </button>
                                <button 
                                    onClick={() => window.open('https://linkedin.com', '_blank')}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        padding: 0,
                                        cursor: 'pointer'
                                    }}
                                    aria-label="Visit our LinkedIn page"
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/733/733614.png"
                                        alt="LinkedIn"
                                        style={{ width: 18, height: 18 }}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

// Helper style for navigation links
const navLinkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    fontSize: '1rem',
    transition: 'color 0.3s',
    padding: '5px 0',
    position: 'relative',
    ':hover': {
        color: '#0b8a34'
    }
};

export default Layout;