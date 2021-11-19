import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';
import ShoppingList from './components/ShoppingList';
import AddressBook from './components/AddressBook'
import ColorPicker from './components/ColorPicker'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/shoppinglist" element={<ShoppingList />}/>
          <Route path="/addressbook" element={<AddressBook />}/>
          <Route path="/colorpicker" element={<ColorPicker />}/>
        </Routes>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);