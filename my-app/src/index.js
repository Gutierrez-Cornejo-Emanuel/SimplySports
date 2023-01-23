import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import './common.css'
import './index.css'
import { AppHeader, AppFooter } from './shell.js'


class Page extends React.Component {
    render() {
        return (
            <div id="page">
                <AppHeader />
                <main>
                    <div id="informational">
                        <article id="matches">
                            <h2>Upcoming Matches</h2>
                            <div class="container">
                                Content
                            </div>
                        </article>
                        <article id="news">
                            <h2>Sports News</h2>
                            <div class="container">
                                Content
                            </div>
                        </article>
                    </div>
                    <aside id="home-feed">
                        <h2>Live Updates</h2>
                        <div class="container" id="live-updates">
                            <ul>
                                <li>No current live games</li>
                            </ul>
                        </div>
                    </aside>
                </main>
                <AppFooter />
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);