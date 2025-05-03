import React from 'react';
import fontImg from "../../assets/fontImg.jpg"
import { FaPlay, FaShare, FaTruck, FaSmile, FaBoxOpen } from 'react-icons/fa';
import { useState } from 'react';

function StatsSection() {

     const [showVideoModal, setShowVideoModal] = useState(false);
    
      const handleOpenModal = () => setShowVideoModal(true);
      const handleCloseModal = () => setShowVideoModal(false);



  return (
    <section 
      className="stats-section py-5 position-relative"
      style={{
        backgroundImage: `url(${fontImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div className="container position-relative z-index-1">
        <div className="text-center mb-5">
          <span className="text-light opacity-75">Данные на май 2022 года</span>
          <h2 className="display-4 fw-bold mt-2 text-white">КАК МЫ РАБОТАЕМ</h2>
          <div className="divider mx-auto my-3" style={{
            width: "80px",
            height: "3px",
            backgroundColor: "#ffc107"
          }}></div>
        </div>

        <div className="row g-4 mb-5">
          {[
            { icon: <FaTruck />, value: "11", label: "Лет на рынке", color: "primary" },
            { icon: <FaSmile />, value: "10,755", label: "Довольных клиентов", color: "success" },
            { icon: <FaBoxOpen />, value: "86,440+", label: "Перевезённых грузов", color: "warning" }
          ].map((item, index) => (
            <div key={index} className="col-md-4">
              <div className={`stat-card bg-${item.color} bg-opacity-50 p-4 rounded-4 h-100 text-center transition-all`}>
                <div className="stat-icon mb-3">
                  {React.cloneElement(item.icon, { 
                    className: `text-${item.color} fs-1`,
                    style: { filter: "drop-shadow(0 0 8px rgba(var(--bs-primary-rgb), 0.3))" }
                  })}
                </div>
                <h3 className="display-3 fw-bold mb-2 text-white">{item.value}</h3>
                <p className="fs-5 mb-0 text-light opacity-75">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="video-card bg-dark bg-opacity-75 rounded-4 p-4 p-lg-5 border border-1 border-light border-opacity-10">
              <h3 className="h3 fw-bold mb-4 d-flex align-items-center text-white">
                <FaTruck className="me-3 text-warning" />
                О DriveRoute
              </h3>
              <button onClick={handleOpenModal} className="btn btn-danger px-4 py-3 fw-bold d-flex align-items-center mx-auto">
                <FaPlay className="me-2 fs-5" />
                Посмотреть на YouTube
              </button>
            </div>
          </div>
        </div>
      </div>

      {showVideoModal && (
        <div className="modal-backdrop">
          <div className="modal-content position-relative">
            {/* Кнопка закрытия */}
            <button
              onClick={handleCloseModal}
              className="btn-close position-absolute"
              style={{
                top: "15px",
                right: "15px",
                zIndex: 10,
                fontSize: "1.5rem",
                color: "#fff",
                backgroundColor: "rgba(182, 182, 182, 0.5)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
              }}
            >
              &times;
            </button>

            {/* Видео контейнер */}
            <div className="ratio ratio-16x9 rounded-3 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/xoCpjfLy3lA"
                title="DriveRoute - Для владельцев грузовиков"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: "none" }}
              ></iframe>
            </div>

            {/* Описание видео */}
            <div className="mt-3 text-center p-3">
              <h4 className="fw-bold">
                DriveRoute - Для владельцев грузовиков
              </h4>
              <p className="text-muted mb-0">
                Официальное презентационное видео
              </p>
            </div>
          </div>
        </div>
      )}



    </section>
  );
}

export default StatsSection;