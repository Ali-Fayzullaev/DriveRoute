import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
const Form = ({ handleClose }) => {

  const axiosInstance = axios.create({
    baseURL: "https://67c3dfc689e47db83dd2ac27.mockapi.io/api/quiz",
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    workOption: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  // Проверка всех обязательных полей
  if (
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.workOption
  ) {
    toast.error("Пожалуйста, заполните все обязательные поля");
    setLoading(false);
    return;
  }

  // Проверка email
  if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    toast.error("Неверный адрес электронной почты");
    setLoading(false);
    return;
  }

  try {
    const response = await axiosInstance.post("/application", {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      workOption: formData.workOption,
    });
    handleClose(true);
    toast.success("Заявка успешно отправлена!");

    // Очистка формы после успешной отправки
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      workOption: "",
    });
  } catch (err) {
    console.error("Ошибка при отправке:", err);
    const errorMessage =
      err.response?.data?.message || err.message || "Произошла ошибка";
    setError(errorMessage);
    toast.error(errorMessage);
  } finally {
    setLoading(false);
  }
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div
      className="modal fade show "
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <Toaster />

      <div className="modal-dialog d-flex justify-content-center  modal-dialog-centered ">
        <div className="modal-content">
          <div className="modal-header border-0 pb-0">
            <h5 className="modal-title fw-bold fs-3">Оставьте заявку</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={(e) => handleSubmit(e, formData)}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  Имя
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Фамилия
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="workOption" className="form-label">
                  Вариант работы
                </label>
                <select
                  className="form-select"
                  id="workOption"
                  name="workOption"
                  value={formData.workOption}
                  onChange={handleChange}
                  required
                >
                  <option value="">Ваш опыт...</option>
                  <option value="full-time">0-6 месяцы</option>
                  <option value="part-time">12-24 месяцы</option>
                  <option value="freelance">Больше 25 месяцы</option>
                </select>
              </div>

              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-custom w-100 py-2 fw-bold"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
