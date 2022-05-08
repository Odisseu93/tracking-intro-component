import React from 'react';
import logo from './images/logo.svg'
import hamburger from './images/icon-hamburger.svg'
import devices from './images/illustration-devices.svg'

function App() {
  return (
    <div className="App">

      <header className='hdr'>
        <img src={logo} alt="logo" className='hdr-logo' />
        <button className='hdr-button'>
          <img src={hamburger} />
        </button>

        <nav className='hdr-nav'>
          <a href='#' className='hdr-nav-a'>Product</a>
          <a href='#' className='hdr-nav-a'>Features</a>
          <a href='#' className='hdr-nav-a'>Pricing</a>
          <a href='#' className='hdr-nav-a'>Login</a>
        </nav>
      </header>

      <main className='main'>
        <img src={devices} />
        <div className="container">

          <p className='container-p1'>
            <span className='container-p1-span'>New</span>
            Monograph Dashboard</p>

          <h1 className='container-h1'>Powerful insights into your team </h1>

          <p className='container-p2'>Project planning and time tracking for agile teams</p>

          <p className='container-p3'>
            <button className='container-p3-button'>Schedule a demo</button>
            to see a live preview</p>

        </div>
      </main>

    </div>
  );
}

export default App;
