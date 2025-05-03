import React from 'react';
import { FaTruck, FaWrench, FaYoutube } from 'react-icons/fa';
import { MdSafetyDivider } from 'react-icons/md';
import driver from "../../assets/driversImg.jpg";
import { useState } from 'react';
import Form from '../Form';

function AboutUs() {

    const [showModal, setShowModal] = useState(false);
    
    
      const handleShow = () => setShowModal(true);
    
    
      const handleClose = () => setShowModal(false);
    
    
      const handleSubmit = (e, formData) => {
        e.preventDefault();
        console.log("Отправленные данные:", formData);
        handleClose(); 
      };

  return (
    <section id='about' className="about-section py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Левая колонка с текстом */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-4 fw-bold text-custom mb-4">
              <span className="border-bottom border-3 border-warning pb-2">О НАС</span>
            </h2>
            
            <div className="pe-lg-5">
              <p className="lead mb-4">
                С момента основания в Чикаго, компания <strong>DriveRoute</strong> стремится быть лидером в транспортной отрасли.
              </p>
              
              <div className="features-list mb-4">
                <div className="feature-item d-flex mb-3">
                  <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                    <FaTruck className="text-custom fs-4"/>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold">Современный автопарк</h4>
                    <p className="mb-0">Мы инвестируем в новейшие грузовики, чтобы обеспечить ваш комфорт и безопасность</p>
                  </div>
                </div>
                
                <div className="feature-item d-flex mb-3">
                  <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                    <MdSafetyDivider className="text-custom fs-4" />
                  </div>
                  <div>
                    <h4 className="h5 fw-bold">Передовые технологии</h4>
                    <p className="mb-0">Наш автопарк оснащен последними технологическими решениями</p>
                  </div>
                </div>
                
                <div className="feature-item d-flex">
                  <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                    <FaWrench className="text-custom fs-4" />
                  </div>
                  <div>
                    <h4 className="h5 fw-bold">Собственный сервис</h4>
                    <p className="mb-0">Круглосуточный автосервис для вашего удобства</p>
                  </div>
                </div>
              </div>
              
              <div className="brands mt-4">
                <h5 className="h6 fw-bold mb-3">Наши технологии:</h5>
                <div className="d-flex flex-wrap gap-3">
                  <span className="badge bg-custom bg-opacity-10 p-2">RTC Group Logistics Reloading</span>
                  <span className="badge bg-custom bg-opacity-10 p-2">CwcDPP®</span>
                  <span className="badge bg-custom bg-opacity-10 p-2">DigitalRTACS®</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Правая колонка с кнопками */}
          <div className="col-lg-6">
            <div className="d-flex flex-column align-items-center">
              <div className=" mb-4">
                <img 
                  src={driver}
                  alt="RT Group Logistics" 
                  className="img-fluid rounded-4"
                />
              </div>
              
              <button onClick={handleShow} className="btn btn-custom btn-lg px-5 py-3 fw-bold shadow">
                ПОДАТЬ ЗАЯВКУ
              </button>
              {showModal && (
                    <Form handleClose={handleClose} handleSubmit={handleSubmit}/>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;