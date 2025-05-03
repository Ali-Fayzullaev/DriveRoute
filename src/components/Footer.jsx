import React from 'react';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {

   const [expanded, setExpanded] = useState(false);
  
    const handleNavClick = () => {
      setExpanded(false);
    };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setExpanded(false);
  };


  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="footer-brand mb-3">
              <h3 className="text-warning fw-bold">DriveRoute</h3>
              <span className="text-white">Логистические решения</span>
            </div>
            <p className="text-light opacity-75 small">
              Профессиональные транспортные услуги по всей стране. 
              Надежные перевозки с 2010 года.
            </p>
            <div className="social-links mt-4">
              <a href="#" className="text-white me-3">
                <FaFacebook className="fs-5" />
              </a>
              <a href="#" className="text-white me-3">
                <FaInstagram className="fs-5" />
              </a>
              <a href="#" className="text-white">
                <FaLinkedin className="fs-5" />
              </a>
            </div>
          </div>


          <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h5 className={`text-warning mb-3 fw-bold ${
              expanded ? "show" : ""
            }}
            id="navbarNav" `}>Навигация</h5>

            <ul className="list-unstyled">
              <li onClick={(e) => scrollToSection(e, "home")} className="mb-2">
                <a href="#" className="text-light opacity-75 hover-text-warning">Главная</a>
              </li>
              <li onClick={(e) => scrollToSection(e, "service")} className="mb-2">
                <a href="#" className="text-light opacity-75 hover-text-warning">Услуги</a>
              </li>
              <li onClick={(e) => scrollToSection(e, "about")} className="mb-2">
                <a href="#" className="text-light opacity-75 hover-text-warning">О компании</a>
              </li>
              <li onClick={(e) => scrollToSection(e, "cantact")} className="mb-2">
                <a href="#" className="text-light opacity-75 hover-text-warning">Контакты</a>
              </li>
              <li onClick={(e) => scrollToSection(e, "blog")}>
                <a href="#" className="text-light opacity-75 hover-text-warning">Вакансии</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h5 className="text-warning mb-3 fw-bold">Услуги</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 hover-text-warning">Грузоперевозки</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 hover-text-warning">Логистика</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 hover-text-warning">Складские услуги</a>
              </li>
              <li>
                <a href="#" className="text-light opacity-75 hover-text-warning">Таможенное оформление</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-4">
            <h5 className="text-warning mb-3 fw-bold">Контакты</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <FaMapMarkerAlt className="text-warning mt-1 me-2" />
                <span className="text-light opacity-75">г. Астана, ул. Узбекали Жанибек, 4</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <FaPhone className="text-warning mt-1 me-2" />
                <span className="text-light opacity-75">+775 110 18 00</span>
              </li>
              <li className="d-flex align-items-start">
                <FaEnvelope className="text-warning mt-1 me-2" />
                <span className="text-light opacity-75">info@driveroute.kz</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 bg-light opacity-10" />

        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="small text-light opacity-75 mb-3 mb-md-0">
              &copy; 2023 DriveRoute. Все права защищены.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="small text-light opacity-75 mb-0">
              Разработано с <span className="text-danger">♥</span> в Казахстане
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;