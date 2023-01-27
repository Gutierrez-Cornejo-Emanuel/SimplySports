import React from "react";
import App from './App';
import ReactDOM from "react-dom/client";
import './reset.css'
import './common.css'
import './index.css'
// import './lounge.css'
// import './about.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <App />
</React.StrictMode>
)