import React from "react";
import truckImg from "../../assets/imgForMain.jpg";
import { useState } from "react";
import Form from "../Form";
function Service() {
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
      <section id="service" className="drivers-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 fw-bold text-custom-two position-relative">
                <span className="position-relative">
                  ВОДИТЕЛИ ГРУЗОВИКОВ
                  <span className="position-absolute bottom-0 start-0 end-0 border-bottom border-3 border-warning"></span>
                </span>
              </h2>
              <p className="lead mt-3">
                Присоединяйтесь к команде профессиональных водителей
              </p>
            </div>
          </div>

          {/* Изображение с аккуратными границами */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="image-container rounded-4 overflow-hidden position-relative shadow-lg">
                <img
                  src={truckImg}
                  alt="Водитель грузовика"
                  className="img-fluid w-100"
                  style={{
                    height: "400px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <div className="image-overlay"></div>
                <div className="position-absolute bottom-0 start-0 end-0 p-4 text-center">
                  <button
                    onClick={handleShow}
                    className="btn btn-custom btn-lg px-5 py-3 fw-bold fs-4 shadow-sm"
                  >
                    ПОДАТЬ ЗАЯВКУ
                  </button>
                </div>
              </div>
            </div>
          </div>
          {showModal && (
                    <Form
                      handleClose={handleClose}
                      handleSubmit={handleSubmit}
                    />
                  )}

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="p-4 p-lg-5 bg-white rounded-4 shadow-sm h-100">
                <h3 className="h3 fw-bold mb-4 text-center">
                  Ваши <span className="text-warning">возможности</span>
                </h3>

                <div className="row g-4">
                  <div className="col-md-12">
                    <div className="p-4 bg-light rounded-4 h-100 border border-2 border-success border-opacity-25">
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-cash-coin fs-1 text-custom-two me-3"></i>
                        <h4 className="fw-bold text-custom-two mb-0">
                          ДО $0,76 ЗА МИЛЮ
                        </h4>
                      </div>
                      <ul className="list-unstyled">
                        <li className="mb-2 d-flex align-items-start">
                          <i className="bi bi-check-circle text-custom-two mt-1 me-2"></i>
                          <span>Базовая ставка: $0,70/миля</span>
                        </li>
                        <li className="d-flex align-items-start">
                          <i className="bi bi-check-circle text-custom-two mt-1 me-2"></i>
                          <span>Бонусы: +$0,06/миля</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="p-4 bg-light rounded-4 h-100 border border-2 border-success border-opacity-25">
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-percent fs-1 text-custom-two me-3"></i>
                        <h4 className="fw-bold text-custom-two mb-0">
                          ДО 31% ОТ СУММЫ
                        </h4>
                      </div>
                      <ul className="list-unstyled">
                        <li className="mb-2 d-flex align-items-start">
                          <i className="bi bi-check-circle text-custom-two mt-1 me-2"></i>
                          <span>Базовая ставка: 29% от суммы</span>
                        </li>
                        <li className="d-flex align-items-start">
                          <i className="bi bi-check-circle text-custom-two mt-1 me-2"></i>
                          <span>Бонусы: +2%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Блок с преимуществами */}
            <div className="col-lg-6">
              <div className="p-4 p-lg-5 bg-white rounded-4 shadow-sm h-100">
                <h3 className="h3 fw-bold mb-4 text-center">
                  Наши <span className="text-warning">преимущества</span>
                </h3>

                <div className="benefits-grid">
                  {[
                    "40% грузов без ожидания",
                    "Новая техника 2019-2024 г.",
                    "Быстрое оформление (2 дня)",
                    "Работа по договору 1099",
                    "Программа для пассажиров",
                    "Можно с домашними животными",
                    "Отели и трансферы",
                    "Поддержка 24/7",
                    "Работа по всем штатам",
                    "Бонусы за рекомендации",
                    "Премии за безопасность",
                    "Компанейский сервис",
                  ].map((benefit, index) => (
                    <div key={index} className="benefit-item p-3 rounded-3">
                      <i className="bi bi-check2-circle text-custom fs-4 me-2"></i>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
