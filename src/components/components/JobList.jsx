import React from "react";
import {
  FaTruck,
  FaPercentage,
  FaCalendarAlt,
  FaTrailer,
  FaOilCan,
  FaAward,
  FaUserFriends,
  FaHeadset,
  FaTools,
  FaCamera,
  FaPlay,
} from "react-icons/fa";
import Form from "../Form";
import { useState } from "react";

function JobList() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  const handleSubmit = (e, formData) => {
    e.preventDefault();
    console.log("Отправленные данные:", formData);
    handleClose();
  };

  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleOpenModal = () => setShowVideoModal(true);
  const handleCloseModal = () => setShowVideoModal(false);

  return (
    <section
      id="blog"
      className="owner-operators py-5"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="container ">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-custom mb-3">
            <FaTruck className="me-2" />
            ВЛАДЕЛЬЦЫ ГРУЗОВИКОВ
          </h1>
          <p className="lead text-muted">Партнёрская программа с DriveRoute</p>
        </div>

        <div className="row justify-content-center ">
          <div className="col-lg-12">
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
              {/* Заголовок */}
              <div className="card-header bg-custom py-3">
                <h2 className="h5 mb-0 d-flex align-items-center">
                  <FaTruck className="me-2" />О компании DriveRoute
                </h2>
              </div>

              <div className="card-body p-4">
                <div className="row g-4">
                  {/* Левая колонка */}
                  <div className="col-md-6">
                    <div className="p-4 bg-white rounded-3 h-100 border-start border-4 border-warning">
                      <h3 className="h5 fw-bold d-flex align-items-center mb-4">
                        <FaPercentage className="me-2 text-custom" />
                        Условия сотрудничества
                      </h3>

                      <div className="mb-4">
                        <div className="d-flex align-items-start mb-3">
                          <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                            <FaPercentage className="text-custom" />
                          </div>
                          <div>
                            <h4 className="h6 fw-bold mb-1">Доходность</h4>
                            <p className="mb-0">
                              Вы получаете <strong>88% от суммы</strong> (наша
                              комиссия - 12%)
                            </p>
                          </div>
                        </div>

                        <div className="d-flex align-items-start">
                          <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                            <FaCalendarAlt className="text-custom" />
                          </div>
                          <div>
                            <h4 className="h6 fw-bold mb-1">Срок контракта</h4>
                            <p className="mb-0">
                              Минимальный период - <strong>6 месяцев</strong>
                            </p>
                          </div>
                        </div>
                      </div>

                      <h3 className="h5 fw-bold d-flex align-items-center mb-3 mt-4">
                        <FaTrailer className="me-2 text-custom" />
                        Аренда прицепов
                      </h3>
                      <ul className="list-unstyled">
                        <li className="mb-2 d-flex align-items-start">
                          <span className="badge bg-primary bg-opacity-10 text-custom me-2">
                            •
                          </span>
                          <span>
                            Сухие фургоны от <strong>$1000/месяц</strong>
                          </span>
                        </li>
                        <li className="mb-2 d-flex align-items-start">
                          <span className="badge bg-primary bg-opacity-10 text-custom me-2">
                            •
                          </span>
                          <span>Новые прицепы 2020-2024 г.в.</span>
                        </li>
                        <li className="d-flex align-items-start">
                          <span className="badge bg-primary bg-opacity-10 text-custom me-2">
                            •
                          </span>
                          <span>
                            Страховка: <strong>$300/месяц</strong>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Правая колонка */}
                  <div className="col-md-6">
                    <div className="h-100">
                      <h3 className="h5 fw-bold d-flex align-items-center mb-3">
                        <FaAward className="me-2 text-custom" />
                        Наши преимущества
                      </h3>
                      <div className="row g-3">
                        {[
                          {
                            icon: <FaOilCan />,
                            title: "Бесплатное ТО",
                            text: "Первое техобслуживание за наш счёт",
                          },
                          {
                            icon: <FaAward />,
                            title: "Бонусы",
                            text: "Премии за чистый осмотр",
                          },
                          {
                            icon: <FaUserFriends />,
                            title: "Рефералы",
                            text: "Вознаграждение за рекомендации",
                          },
                          {
                            icon: <FaHeadset />,
                            title: "Поддержка",
                            text: "Диспетчерская служба 24/7",
                          },
                          {
                            icon: <FaTools />,
                            title: "Сервис",
                            text: "Фирменный автосервис со скидками",
                          },
                          {
                            icon: <FaCamera />,
                            title: "Оборудование",
                            text: "Видеорегистратор/GPS: $50/месяц",
                          },
                        ].map((item, index) => (
                          <div key={index} className="col-6">
                            <div className="p-3 bg-white rounded-3 h-100 border">
                              <div className="d-flex align-items-center mb-2">
                                <div className="bg-custom bg-opacity-10 p-2 rounded-circle me-2">
                                  {item.icon}
                                </div>
                                <h4 className="h6 fw-bold mb-0">
                                  {item.title}
                                </h4>
                              </div>
                              <p className="small mb-0">{item.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Футер */}
              <div className="card-footer bg-light border-top py-3">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                  <div className="mb-2 mb-md-0">
                    <button
                      onClick={handleShow}
                      className="btn btn-custom me-2"
                    >
                      Подать заявку
                    </button>
                  </div>
                  <button className="btn btn-danger px-4">
                    <FaPlay className="me-2" onClick={handleOpenModal} />
                    Смотреть видео на YouTube
                  </button>
                </div>
              </div>
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

      {showModal && (
        <Form handleClose={handleClose} handleSubmit={handleSubmit} />
      )}
    </section>
  );
}

export default JobList;
