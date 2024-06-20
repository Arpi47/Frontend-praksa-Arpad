import React from 'react';
import './App.css';
import logo from './img/logo.png';
import video from './img/Video.png';
import image1 from './img/image1.png';
import rectangle2 from './img/Rectangle2.png';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';

function App() {
  const toggleLanguageMenu = () => {
    const languageMenu = document.querySelector('.language-menu');
    languageMenu.classList.toggle('open');
  };
  
  const toggleMenu = () => {
    const normMenu = document.querySelector('.norm');
    normMenu.classList.toggle('open');
  };
  
  const menuIcon = document.querySelector('.menu-icon');
  if (menuIcon) {
    menuIcon.addEventListener('click', toggleMenu);
  }
  
  const languageMenuIcon = document.querySelector('.language-menu-icon');
  if (languageMenuIcon) {
    languageMenuIcon.addEventListener('click', toggleLanguageMenu);
  }  

  return (
    <div>
      <nav className="nav1">
        <ul>
          <li className="logo"><img src={logo} alt="logo" /></li>
        </ul>
        <div className="menu-icon" onClick={toggleLanguageMenu}>&#9776;</div>
        <ul className="language-menu">
          <li><a href="index.html">Srpski</a></li>
          <li><a href="index.html">English</a></li>
          <li><a href="index.html">Magyar</a></li>
        </ul>
        <ul className="norm">
          <li><a href="index.html">Srpski</a></li>
          <li><a href="index.html">English</a></li>
          <li><a href="index.html">Magyar</a></li>
        </ul>
      </nav>
      <div>
        <label id="dark-change"></label>
      </div>
      <nav className="nav2">
        <div className="space">
          <div className="micon" onClick={toggleMenu}>&#9776;</div>
          <ul className="menu">
            <li><a href="index.html"><span className="upper">o nama</span><br /><span className="lower">vizija za uspeh</span></a></li>
            <li><a href="index.html"><span className="upper">dvg proizvodi</span><br /><span className="lower">naši proizvodi</span></a></li>
            <li><a href="index.html"><span className="upper">brendovi</span><br /><span className="lower">koje zasupamo</span></a></li>
            <li><a href="index.html"><span className="upper">distribucija</span><br /><span className="lower">logistika i operativa</span></a></li>
            <li><a href="index.html"><span className="upper">saradnja</span><br /><span className="lower">proširenje ponude</span></a></li>
            <li><a href="index.html"><span className="upper">novosti</span><br /><span className="lower">aktuelnosti</span></a></li>
            <li><a href="index.html"><span className="upper">kontakt</span><br /><span className="lower">kontaktirajte nas</span></a></li>
          </ul>
        </div>
        <ul className="nmenu">
          <li><a href="index.html"><span className="upper">o nama</span><br /><span className="lower">vizija za uspeh</span></a></li>
          <li><a href="index.html"><span className="upper">dvg proizvodi</span><br /><span className="lower">naši proizvodi</span></a></li>
          <li><a href="index.html"><span className="upper">brendovi</span><br /><span className="lower">koje zasupamo</span></a></li>
          <li><a href="index.html"><span className="upper">distribucija</span><br /><span className="lower">logistika i operativa</span></a></li>
          <li><a href="index.html"><span className="upper">saradnja</span><br /><span className="lower">proširenje ponude</span></a></li>
          <li><a href="index.html"><span className="upper">novosti</span><br /><span className="lower">aktuelnosti</span></a></li>
          <li><a href="index.html"><span className="upper">kontakt</span><br /><span className="lower">kontaktirajte nas</span></a></li>
        </ul>
      </nav>
      <div className="vidcontainer">
        <div className="sat"></div>
        <img src={video} alt="vid" />
        <div className="fixed">
          <a href="#dvg">
            <svg width="58" height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29 52.25C42.1168 52.25 52.75 41.6168 52.75 28.5C52.75 15.3832 42.1168 4.75 29 4.75C15.8832 4.75 5.25 15.3832 5.25 28.5C5.25 41.6168 15.8832 52.25 29 52.25Z" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.5 28.5L29 38L38.5 28.5" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M29 19V38" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
      <div className="container" id="dvg">
        <div className="lbox">
          <img src={image1} alt="i1" />
        </div>
        <div className="rbox">
          <h1>DVG Company</h1>
          <h2>Veleprodaja i maloprodaja kozmetike i<br />kućne hemije</h2>
          <h4>DVG Company d.o.o. je trgovinsko preduzeće osnovano 2008. godine u Subotici.<br />
            Prvenstvena delatnost kompanije je veleprodaja kozmetike i kućne hemije.<br />
            U potpunosti je u privatnom vlasništvu, sa sedištem u Subotici. Tu se nalazi <br />
            distrubutivni centar i poslovne prostorije, sa ukupno 3000m2 magacinskog prostora<br />
            koji zadovoljava sve segmente u pogledu smeštaja, čuvanja i plasiranja robe.
          </h4>
          <button type="button">Saznajte više o nama</button>
        </div>
      </div>
      <div className="image-container">
        <div className="centered-text-container">
          <div className="centered-text">pouzdana distribucija<br /><img src={rectangle2} alt="red1" /></div>
        </div>
      </div>
      <div className="container3">
        <div className="lbox" data-aos="fade-up-right" data-aos-duration="1000">
          <img src={img1} alt="1" /><h3>postanine naš partner</h3>
        </div>
        <div className="cbox" data-aos="fade-up" data-aos-duration="1000">
          <img src={img2} alt="2" /><h3>naši proizvodi</h3>
        </div>
        <div className="rbox" data-aos="fade-up-left" data-aos-duration="1000">
          <img src={img3} alt="3" />
          <div className="cover">
            <svg width="401" height="12" viewBox="0 0 401 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="401" height="12" fill="#BF0F0F" />
            </svg>
          </div>
          <h3>uvoz iz mađarske</h3>
        </div>
      </div>
      <div className="mcontainer3">
        <div className="lbox">
          <img src="/img/img1.png" alt="1" /><h3>postanine naš partner</h3>
        </div>
        <div className="cbox">
          <img src="/img/img2.png" alt="2" /><h3>naši proizvodi</h3>
        </div>
        <div className="rbox">
          <img src="/img/img3.png" alt="3" />
          <h3>uvoz iz mađarske</h3>
        </div>
      </div>
      <div className="title">
        <h1>DVG Company</h1>
        <h2>u brojkama</h2>
        <img src="/img/Vector1.png" alt="v1" />
      </div>
      <div className="container5">
        <div className="container5-left">
          <h2>150</h2><br />
          <h4>radnika<br /><br />kompanija zapošljava preko 150 ljudi<br />koji svakodnevno<br />sa entuzijazmom i<br />predanošću<br />doprinosi radu<br />kompanije</h4>
        </div>
        <div className="container5-right">
          <h2>20000</h2><br />
          <h4>proizvoda<br /><br />u svojoj ponudi kompanija<br />ima preko 20000 različitih<br />proizvoda, a broj se<br />svakodnevno povećava</h4>
        </div>
      </div>
      <div className="kcontainer">
        <div className="lbox">
          <img src="/img/certificate1.png" alt="1" />
        </div>
        <div className="rbox">
          <img src="/img/certificate2.png" alt="2" />
        </div>
      </div>
      <div className="ccontainer">
        <div className="lbox">
          <img src="/img/invia1.png" alt="1" />
        </div>
        <div className="rbox">
          <img src="/img/invia2.png" alt="2" />
        </div>
      </div>
      <div className="scontainer">
        <div className="lbox">
          <img src="/img/indeks1.png" alt="1" />
        </div>
        <div className="rbox">
          <img src="/img/indeks2.png" alt="2" />
        </div>
      </div>
      <div className="fcontainer">
        <h3>pogledajte sve naše sertifikate i nagrade</h3>
        <button type="button">Saznajte više</button>
      </div>
      <div className="footer">
        <div className="lbox">
          <ul className="menu2">
            <li><a href="index.html"><span className="upper">o nama</span><br /><span className="lower">vizija za uspeh</span></a></li>
            <li><a href="index.html"><span className="upper">dvg proizvodi</span><br /><span className="lower">naši proizvodi</span></a></li>
            <li><a href="index.html"><span className="upper">brendovi</span><br /><span className="lower">koje zasupamo</span></a></li>
            <li><a href="index.html"><span className="upper">distribucija</span><br /><span className="lower">logistika i operativa</span></a></li>
            <li><a href="index.html"><span className="upper">saradnja</span><br /><span className="lower">proširenje ponude</span></a></li>
            <li><a href="index.html"><span className="upper">novosti</span><br /><span className="lower">aktuelnosti</span></a></li>
            <li><a href="index.html"><span className="upper">kontakt</span><br /><span className="lower">kontaktirajte nas</span></a></li>
          </ul>
        </div>
        <div className="rbox">
          <ul className="menu3">
            <li><a href="index.html"><span className="upper">o nama</span><br /><span className="lower">vizija za uspeh</span></a></li>
            <li><a href="index.html"><span className="upper">dvg proizvodi</span><br /><span className="lower">naši proizvodi</span></a></li>
            <li><a href="index.html"><span className="upper">brendovi</span><br /><span className="lower">koje zasupamo</span></a></li>
            <li><a href="index.html"><span className="upper">distribucija</span><br /><span className="lower">logistika i operativa</span></a></li>
            <li><a href="index.html"><span className="upper">saradnja</span><br /><span className="lower">proširenje ponude</span></a></li>
            <li><a href="index.html"><span className="upper">novosti</span><br /><span className="lower">aktuelnosti</span></a></li>
            <li><a href="index.html"><span className="upper">kontakt</span><br /><span className="lower">kontaktirajte nas</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
