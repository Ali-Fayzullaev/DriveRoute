import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
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
    <header className="bg-light py-3 shadow-sm sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Логотип */}
          <Link
            className="navbar-brand d-flex align-items-center"
            to="/"
            onClick={() => document.getElementById("home")?.scrollIntoView()}
          >
            <FontAwesomeIcon
              icon={faTruck}
              size="2x"
              className="text-custom me-2"
            />
            <div>
              <h1 className="mb-0 text-dark fw-bold">
                Drive<span className="text-custom">Route</span>
              </h1>
            </div>
          </Link>

          {/* Бургер меню кнопкаси */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Меню */}
          <div
            className={`collapse navbar-collapse justify-content-end ${
              expanded ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <a
                  className="nav-link text-dark nav-link-hover"
                  href="#home"
                  onClick={(e) => scrollToSection(e, "home")}
                >
                  Главная
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark nav-link-hover"
                  href="#service"
                  onClick={(e) => scrollToSection(e, "service")}
                >
                  Услуги
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark nav-link-hover"
                  href="#blog"
                  onClick={(e) => scrollToSection(e, "blog")}
                >
                  Блог
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark nav-link-hover"
                  href="#about"
                  onClick={(e) => scrollToSection(e, "about")}
                >
                  О нас
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark nav-link-hover"
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
