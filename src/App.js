import React, { useEffect, useState } from 'react';
import './App.css';
import Provider from './Components/ui/provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import ToDo from './views/ToDo';

const App = () => {
  
  return(
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ToDo/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
