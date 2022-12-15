// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './landing/landing';
import Posting from './postCreate/posting';
import PostView from './postview/postView';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/posting' element={<Posting />} /> 
          <Route path='/view' element={<PostView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
