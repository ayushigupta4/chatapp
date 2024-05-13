import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">secret <span className='pink-box'>desires</span> </a>

                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-a" aria-current="page" href="#">Chats</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-a" href="#">My Characters</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-a" href="#">Generate Images</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-a pink-box" href="#">Create Character</a>
                    </li>
                    
                    </ul>
                </div> */}
            
            </div>
        </nav>
    </div>
  )
}

export default NavBar