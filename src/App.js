import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BiUpArrowAlt } from 'react-icons/bi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import perfil from './images/perfil.png';

import './App.css';
import Dashboard from './Components/Dashboard';


function App() {
  const [showMenu, setShowMenu] = useState(false);
  // ---------------------------------------------------------------------------------------------
    // CICLOS DE VIDA
    useEffect(() => { Aos.init({ duration: 2000 }); }, []);

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
    <main>
      {/* <!--===== HOME =====--> */}
      <section className="home" id="home">
            <div className="homeContainer layoutGrid">
                <h1 data-aos="fade-down" className="homeTitle"><span>HE</span><br />LLO.</h1>
                <div data-aos="fade-down" data-aos-delay="300" className="homeScroll">
                    <a href="#about" className="homeScroll_link"><BiUpArrowAlt />Scroll down</a>
                </div >
                <Dashboard />
            </div>
        </section>
        {/* <!--===== ABOUT =====--> */}
        <section className="about section" id="about">
            <h2 className="sectionTitle">About</h2>
            <div className="aboutContainer layoutGrid">
                <div data-aos="fade-down" data-aos-delay="500" className="aboutImg">
                    <img src={perfil} alt="img perfil" />
                </div>
                <div>
                    <h2 data-aos="fade-down" data-aos-delay="300" className="aboutSubtitle">I'am Adão Benites</h2>
                    <span data-aos="fade-down" data-aos-delay="400" className="aboutProfession">Front-End Developer</span>
                    <p data-aos="fade-down" data-aos-delay="500" className="aboutText">
                        👨🏻‍💻 I'm a web development at studenty at Trybe School. <br />
                        🤓 I'm currently learning Back-End features. I'm very interested in improving my knowledge in web development. <br />
                        👨🏻‍🎓 Furthermore, I'm degree in Civil Engineering and Physics. <br />
                        🏃🏻 I'm constantly on the move. Never accommodate! <br />
                        💡 I'm passionate about solving problems and learning. Always open to new challenges and ready to face changes. <br />
                        🌎 Know the four corners of the world is my dream. <br />

                        📍From Campo Grande - MS 🇧🇷 <br />
                        📄 See my <a href = "https://gitconnected.com/adaobjr/resume" className="curriculumLink">Curriculum Vitae</a> to get more info</p>
                    <div data-aos="fade-down" data-aos-delay="600" data-aos-offset="50" className="aboutSocial">
                        <a href="https://www.linkedin.com/in/adao-bjunior/"><FaLinkedinIn className="aboutSocial_icon" /></a>
                        <a href="https://www.github.com/AdaoBJr"><FaGithub className="aboutSocial_icon" /></a>
                    </div>
                </div>
            </div>
        </section>

    </main>
    </div>
  );
}

export default App;
