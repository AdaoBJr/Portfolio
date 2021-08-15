import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BiUpArrowAlt } from 'react-icons/bi';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';

import perfil from './images/perfil.png';
import skills from './images/skill.jpg';
import RecipesApp from './images/RecipesApp.png';
import PandaStore from './images/PandaStore.png';
import Colaboradores from './images/Colaboradores.png';
import PandaStoreRedux from './images/PandaStoreRedux.png';
import ToDoList from './images/ToDoList.png';
import ChaleHotel from './images/ChaleHotel.png';
import AnnaBella from './images/AnnaBella.png';
import HotelParaiso from './images/HotelParaiso.png';
import Calculator from './images/Calculator.png';
import Facebook from './images/Facebook.png';
import TrybeWallet from './images/TrybeWallet.png';
import GoShoes from './images/GoShoes.png';
import ComingSoon from './images/ComingSoon.png';
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
                    <h2 data-aos="fade-down" data-aos-delay="300" className="aboutSubtitle">I'm Adão Benites</h2>
                    <span data-aos="fade-down" data-aos-delay="400" className="aboutProfession">Front-End Developer</span>
                    <p data-aos="fade-down" data-aos-delay="500" className="aboutText">
                        👨🏻‍💻 I'm a web development studenty at Trybe School. <br />
                        🤓 I'm currently learning Back-End features. I'm very interested in improving my knowledge in web development. <br />
                        👨🏻‍🎓 I have degree in Civil Engineering and Physics. <br />
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
        {/* <!--===== SKILLS =====--> */}
        <section className="skills section">
            <h2 data-aos="fade-down" className="sectionTitle">Skills</h2>
            <div className="skillsContainer layoutGrid">
                <div>
                    <h3 data-aos="fade-down" data-aos-delay="50" className="skillsSubtitle">Development</h3>
                    <span data-aos="fade-down" data-aos-delay="150" className="skillsName">HTML5</span>
                    <span data-aos="fade-down" data-aos-delay="250" className="skillsName">CSS3</span>
                    <span data-aos="fade-down" data-aos-delay="350" className="skillsName">Javascript</span>
                    <span data-aos="fade-down" data-aos-delay="450" className="skillsName">Git</span>
                    <span data-aos="fade-down" data-aos-delay="550" className="skillsName">GitHub</span>
                    <span data-aos="fade-down" data-aos-delay="650" className="skillsName">React.js</span>
                    <span data-aos="fade-down" data-aos-delay="750" className="skillsName">Redux</span>
                    <span data-aos="fade-down" data-aos-delay="850" className="skillsName">ContextAPI</span>
                    <span data-aos="fade-down" data-aos-delay="950" className="skillsName">Hooks</span>
                    <span data-aos="fade-down" data-aos-delay="1050" className="skillsName">Jest</span>
                    <span data-aos="fade-down" data-aos-delay="1150" className="skillsName">RTL</span>
                    <h3 data-aos="fade-down" data-aos-delay="1250" className="skillsSubtitle">Design</h3>
                    <span data-aos="fade-down" data-aos-delay="1350" className="skillsName">Figma</span>
                    <span data-aos="fade-down" data-aos-delay="1450" className="skillsName">Photoshop</span>
                </div>
                <div data-aos="fade-down" data-aos-delay="400" className="skillsImg">
                    <img src={skills} alt="img skill" />
                </div>
            </div>
        </section>
        {/* <!--===== PORTFOLIO =====--> */}
        <section className="portfolio section" id="portfolio">
            <h2 data-aos="fade-down" className="sectionTitle">Portfolio</h2>
            <div className="portfolioContainer layoutGrid">
                <div data-aos="fade-down" data-aos-delay="50" className="portfolioImg">
                    <img src={RecipesApp} alt="" />
                    <div className="portfolioLink">
                        <a href="https://adaobjr.github.io/RecipesApp/" className="portfolioLink_name">Project Recipes App</a>
                        <a href="https://github.com/AdaoBJr/RecipesApp/blob/master/README.md" className="portfolioLink_name">View Details</a>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="200" className="portfolioImg">
                    <img src={PandaStore} alt="" />
                    <div className="portfolioLink">
                        <a href="https://adaobjr.github.io/PandaStore/#/" className="portfolioLink_name">Project PandaStore - Shop Site</a>
                        <a href="https://github.com/AdaoBJr/PandaStore/blob/main/README.md" className="portfolioLink_name">View Details</a>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="400" className="portfolioImg">
                    <img src={Colaboradores} alt="" />
                    <div className="portfolioLink">
                        <a href="https://adaobjr.github.io/CadastroColaboradores/#/" className="portfolioLink_name">Employees Register</a>
                        <a href="https://github.com/AdaoBJr/CadastroColaboradores/blob/main/README.md" className="portfolioLink_name">View Details</a>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="600" className="portfolioImg">
                    <img src={PandaStoreRedux} alt="" />
                    <div className="portfolioLink">
                        <a href="https://adaobjr.github.io/PandaStoreRedux/" className="portfolioLink_name">Project PandaStoreRedux - Shop Site</a>
                        <a href="https://github.com/AdaoBJr/PandaStoreRedux/blob/master/README.md" className="portfolioLink_name">View Details</a>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="800" className="portfolioImg">
                    <img src={ToDoList} alt="" />
                    <div className="portfolioLink">
                        <a href="https://adaobjr.github.io/ToDoList/" className="portfolioLink_name">Project To Do List</a>
                        <a href="https://github.com/AdaoBJr/ToDoList/blob/master/README.md" className="portfolioLink_name">View Details</a>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="1000" className="portfolioImg">
                    <img src={ChaleHotel} alt="" />
                    <div className="portfolioLink">
                        <a href="https://adaobjr.github.io/ChaleHotel/" className="portfolioLink_name">Project Chalé-Hotel</a>
                        <a href="https://github.com/AdaoBJr/ChaleHotel/blob/master/README.md" className="portfolioLink_name">View Details</a>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="200" className="portfolioImg">
                    <img src={AnnaBella} alt="" />
                    <div className="portfolioLink">
                        <a href="https://adaobjr.github.io/AnnaBella/" className="portfolioLink_name">Project Modelo Anna Bella</a>
                        <a href="https://github.com/AdaoBJr/AnnaBella/blob/main/README.md" className="portfolioLink_name">View Details</a>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="400" className="portfolioImg">
                    <img src={HotelParaiso} alt="" />
                    <div className="portfolioLink">
                        <a href="https://adaobjr.github.io/HotelParaiso/" className="portfolioLink_name">Project Hotel Paraíso</a>
                        <a href="https://github.com/AdaoBJr/HotelParaiso/blob/main/README.md" className="portfolioLink_name">View Details</a>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="600" className="portfolioImg">
                    <img src={Calculator} alt="" />
                    <div className="portfolioLink">
                        <a href="https://adaobjr.github.io/Calculator/" className="portfolioLink_name">Project Calculator</a>
                        <a href="https://github.com/AdaoBJr/Calculator/blob/master/README.md" className="portfolioLink_name">View Details</a>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="800" className="portfolioImg">
                    <img src={Facebook} alt="" />
                    <div className="portfolioLink">
                        <a href="https://adaobjr.github.io/FacebookSignup/" className="portfolioLink_name">Project Facebook Signup</a>
                        <a href="https://github.com/AdaoBJr/FacebookSignup/blob/master/README.md" className="portfolioLink_name">View Details</a>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="1000" className="portfolioImg">
                    <img src={TrybeWallet} alt="" />
                    <div className="portfolioLink">
                        <a href="https://adaobjr.github.io/TrybeWallet/" className="portfolioLink_name">Project TrybeWallet</a>
                        <a href="https://github.com/AdaoBJr/TrybeWallet/blob/master/README.md" className="portfolioLink_name">View Details</a>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="1000" className="portfolioImg">
                    <img src={GoShoes} alt="" />
                    <div className="portfolioLink">
                        <a href="https://adaobjr.github.io/GoShoes/" className="portfolioLink_name">Project GoShoes</a>
                        <a href="https://github.com/AdaoBJr/GoShoes/blob/main/README.md" className="portfolioLink_name">View Details</a>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="1200" className="portfolioImg">
                    <img src={ComingSoon} alt="" />
                    <div className="portfolioLink">
                    <a href className="portfolioLink_name">Coming Soon New Project</a>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--===== CONTACT =====--> */}
        <section className="contact" id="contact">
            <h2 data-aos="fade-down" className="sectionTitle">Contact</h2>
            <div className="contactContainer">
                <div>
                    <h3 data-aos="fade-down" data-aos-delay="300" className="contactSubtitle">EMAIL</h3>
                    <span data-aos="fade-down" data-aos-delay="300" className="contactText">adao_junior_@hotmail.com</span>
                    <h3 data-aos="fade-down" data-aos-delay="400" className="contactSubtitle">PHONE</h3>
                    <span data-aos="fade-down" data-aos-delay="400" className="contactText">+55 67 99225-2201 <FaWhatsapp /></span>
                    <h3 data-aos="fade-down" data-aos-delay="500" className="contactSubtitle">ADDRESS</h3>
                    <span data-aos="fade-down" data-aos-delay="500" className="contactText">Campo Grande - MS / Brazil</span>
                </div>
            </div>
        </section>
    </main>
    {/* <!--===== FOOTER =====--> */}
    <footer className="footer section">
        <div className="footerContainer layoutGrid">
            <div>
                <h2 className="footerTitle">ADÃO BENITES</h2>
                <p>I'm Adão Benites and this is my personal website</p>
            </div>
            <div>
                <h2 className="footerTitle">EXPLORE</h2>
                <ul>
                    <li><a href="#home" className="footerLink">Home</a></li>
                    <li><a href="#about" className="footerLink">About</a></li>
                    <li><a href="#skills" className="footerLink">Skills</a></li>
                    <li><a href="#portfolio" className="footerLink">Portfolio</a></li>
                    <li><a href="#Contact" className="footerLink">Contact</a></li>
                </ul>
            </div>
            
            <div>
                <h2 className="footerTitle">FOLLOW</h2>
                <a href="https://www.linkedin.com/in/adao-bjunior/"><FaLinkedinIn className="aboutSocial_icon" /></a>
                <a href="https://www.github.com/AdaoBJr"><FaGithub className="aboutSocial_icon" /></a>
            </div>
        </div>
        <p className="footerCopy">&#169; 2021 AdamBJr. All right reserved</p>
    </footer>
    </div>
  );
}

export default App;
