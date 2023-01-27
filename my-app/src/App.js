import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages'
import About from './pages/about';
import Lounge from './pages/lounge';
import { AppHeader, AppFooter } from "./shell";

export default function App () {
    return (
    <Router>
        <AppHeader />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/lounge' element={<Lounge />} />
        </Routes>
        <AppFooter />
    </Router>
    )
}