import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from '@/pages/Home';
import CSSIndex from '@/pages/CSSIndex';
import JSIndex from '@/pages/JSIndex';

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/css" element={<CSSIndex />} />
        <Route path="/js" element={<JSIndex />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
