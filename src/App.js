import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  // ---------------------------------------------------------------------------------------------
    // CICLOS DE VIDA
    // useEffect(() => { Aos.init({ duration: 2000 }); }, []);

    // ---------------------------------------------------------------------------------------------
  
  return (
    <div>
       {/* <!--===== HEADER =====--> */}
    <header className="header">
        <nav className="nav layoutGrid">
            <div>
                <a href="#home" className="navLogo">Adão Benites</a>
            </div>
            <div className={ (showMenu) ? 'navMenu show' : 'navMenu' }>
                <ul className="navList" onClick={ () => setShowMenu(!showMenu) }>
                    <li className="navItem"><a href="#home" className="navLink">Home</a></li>
                    <li className="navItem"><a href="#about" className="navLink">About</a></li>
                    <li className="navItem"><a href="#skills" className="navLink">Skills</a></li>
                    <li className="navItem"><a href="#portfolio" className="navLink">Portfolio</a></li>
                    <li className="navItem"><a href="#contact" className="navLink">Contact</a></li>
                </ul>
            </div>
            <button
                type="button"
                onClick={ () => setShowMenu(!showMenu) }
                className={ (showMenu) ? 'icon iconActive' : 'icon' }>
                <div className="hamburguer" />
            </button>
        </nav>
    </header>
    </div>
  );
}

export default App;
