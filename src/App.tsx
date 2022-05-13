import React from 'react';
import logo from './images/logo.svg'
import hamburger from './images/icon-hamburger.svg'
import close from './images/icon-close.svg'
import devices from './images/illustration-devices.svg'



//show or hide the navigation menu
const showNav = () => {
  const nav = document.querySelector('#hdr_nav') as HTMLElement;
  const imgHdr = document.querySelector('#hdr_button_img') as HTMLImageElement;

  if (nav.style.display === 'none') {
    nav.style.display = 'block'
    imgHdr.src = close
    // nav.classList.toggle("hdr-nav")
  } else {
    nav.style.display = 'none'
    imgHdr.src = hamburger
    // nav.classList.toggle("hdr-nav")
  }
}

function App() {
  return (
    <div className="App">

      <header className='hdr'>
        <img src={logo} alt="logo" className='hdr-logo' />
        <button onClick={showNav} className='hdr-button' id='hdr_button' >
          <img className='hdr-button-img' id='hdr_button_img' src={hamburger} />
          </button>

        <nav className='hdr-nav' id='hdr_nav'>
          <a href='#' className='hdr-nav-a'><h4>Product</h4></a>
          <a href='#' className='hdr-nav-a'><h4>Features</h4></a>
          <a href='#' className='hdr-nav-a'><h4>Pricing</h4></a>
          <a href='#' className='hdr-nav-a'><h4>Login</h4></a>
        </nav>
      </header>

      <main className='main'>
        <div className="image-box">
          <img src={devices} />
        </div>
        <div className="container">

          <p className='container-p1'>
            <span className='container-p1-span'>New</span>
            Monograph Dashboard</p>

          <h1 className='container-h1'>Powerful insights into your team </h1>

          <p className='container-p2'>Project planning and time tracking for agile teams</p>

          <div className='container-p3'>
            <button className='container-p3-button'>Schedule a demo</button>
            <p>to see a live preview</p>
          </div>

        </div>
      </main>

    </div>
  );
}

export default App;
