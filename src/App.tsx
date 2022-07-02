import React from 'react';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Widget } from './components/Widget';

export function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Widget />
    </>
  );
}
