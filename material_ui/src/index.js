import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import {Learn} from './pages/Learn/Learn'
import {Lounge} from './pages/Lounge/Lounge'
import {News} from './pages/News/News'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="learn" element={<Learn />}></Route>
      <Route path="lounge" element={<Lounge />}></Route>
      <Route path="news" element={<News />}></Route>
    </Route>
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
