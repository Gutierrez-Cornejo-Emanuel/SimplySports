import React from 'react'
import { Link } from 'react-router-dom';

class AppHeader extends React.Component {
    render() {
        return (
        <header>
            <div id="company-name">
                <h1>Simply Sports</h1>
            </div>
            <div id="nav-bar">
                <nav>
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/lounge">Lounge</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ol>
                </nav>
                <div id="login">
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </div>
        </header>
        );
    }
}

class AppFooter extends React.Component {
    render() {
        return (
        <footer>
            <span id="copyright">© TechWise</span>
        </footer>);
    }
}

export {AppHeader, AppFooter};