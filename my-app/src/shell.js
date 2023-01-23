import React from 'react'

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
                        <li>Home</li>
                        <li><a href="./lounge.html">Betting Lounge</a></li>
                        <li><a href="./about.html">About</a></li>
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