import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

import Header from './routes/Header';
import Navbar from './routes/Navbar';
import Appetizers from './routes/Appetizers';
import Breakfast from './routes/Breakfast';
import Lunch from './routes/Lunch';
import Dinner from './routes/Dinner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <Appetizers />
    <Breakfast />
    <Lunch />
    <Dinner />
  </React.StrictMode>
);
