import React, { useState } from "react";
import imgMain from "../assets/mainImg.avif";
import Form from "./Form";
import JobList from "./components/JobList";
import AboutUs from "./components/AboutUs";
import StatsSection from "./components/StatisticsSection";
import MapSection from "./components/MapUs";
import Service from "./components/Service";

function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  const handleSubmit = (e, formData) => {
    e.preventDefault();
    console.log("Отправленные данные:", formData);
    handleClose();
  };

  return (
    <>
      <section id="home" className="hero-section position-relative">
        {/* Фон сурати + Оверлей */}
        <div
          className="hero-background w-100 h-100"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${imgMain})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          <div className="container h-100 d-flex flex-column justify-content-center align-items-start text-white px-4">
            {/* Бошлик ва тавсия */}
            <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInDown">
              ЗАРАБАТЫВАЙТЕ <span className="text-custom">ДО $2,800</span> В
              НЕДЕЛЮ
            </h1>
            <p className="lead mb-5 fs-5 animate__animated animate__fadeInUp">
              Присоединяйтесь к лидерам рынка! Работайте водителем платформы с
              гарантированными заказами и высоким доходом.
            </p>

            {/* Кнопкалар */}
            <div className="d-flex gap-3">
              <button
                onClick={handleShow}
                className="btn btn-custom btn-lg px-4 py-3 fw-bold"
              >
                НАЧАТЬ РАБОТУ
              </button>
              <a href="tel:+775 110 18 00">
                <button className="btn btn-outline-light btn-lg px-4 py-3">
                  КОНСУЛЬТАЦИЯ
                </button>
              </a>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="d-flex justify-content-center">
            <Form handleClose={handleClose} handleSubmit={handleSubmit}/>
          </div>
          
        )}
      </section>
      <Service />
      <JobList />
      <AboutUs />
      <StatsSection />
      <MapSection />
    </>
  );
}

export default HeroSection;
