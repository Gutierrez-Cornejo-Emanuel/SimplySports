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
                    <h1>Hello World!</h1>
                </main>
                <AppFooter />
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);