import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      {/* Header Section */}
      <header className='sticky top-0 left-0 right-0 z-50'>
        <Navbar />
      </header>

      {/* Main Section */}
      <main>
        <Outlet></Outlet>
      </main>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;