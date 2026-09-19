 import React, { useRef, useState } from "react";
import "./Testimonials.css";

function Testimonials() {
  const scrollRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const students = [
    {
      id: 1,
      name: "Имя Фамилия",
      role: "Студент курса «WEB-разработчик»",
      avatar:  "/images/1.svg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales.",
      rating: "4,87 / 5",
    },
    {
      id: 2,
      name: "Имя Фамилия",
      role: "Студент курса «WEB-разработчик»",
      avatar:  "/images/2.svg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius.",
      rating: "4,87 / 5",
    },
    {
      id: 3,
      name: "Имя Фамилия",
      role: "Студент курса «WEB-разработчик»",
      avatar:  "/images/3.svg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst, scelerisque eros non, ultrices magna.",
      rating: "4,87 / 5",
    },
    {
      id: 4,
      name: "Имя Фамилия",
      role: "Студент курса «WEB-разработчик»",
      avatar:  "/images/4.svg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat!",
      rating: "4,87 / 5",
    },
    {
      id: 5,
      name: "Имя Фамилия",
      role: "Студент курса «WEB-разработчик»",
      avatar:  "/images/5.svg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales.",
      rating: "4,87 / 5",
    },
    {
      id: 6,
      name: "Имя Фамилия",
      role: "Студент курса «WEB-разработчик»",
      avatar:  "/images/6.svg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius.",
      rating: "4,87 / 5",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Пожалуйста, заполните основные поля!");
      return;
    }
    alert(`Заявка принята! Спасибо, ${formData.name}.`);
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <div className="main-wrapper">
     
      <section className="reviews-section">
        <h2 className="reviews-title">Отзывы наших студентов</h2>

        <div className="reviews-container" ref={scrollRef}>
          {students.map((student) => (
            <div className="review-card" key={student.id}>
              <div className="student-info">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="student-avatar"
                />
                <div className="student-details">
                  <h3 className="student-name">{student.name}</h3>
                  <span className="student-role">{student.role}</span>
                </div>
              </div>

              <p className="review-text">{student.text}</p>

              <div className="review-rating">
                <span className="star">★</span> {student.rating}
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-indicator">
          <div className="scroll-progress-bg">
            <div className="scroll-progress-bar"></div>
          </div>
        </div>
      </section>

       
      <section className="features-section">
        <h2 className="features-title">
          Добро пожаловать в Академию будущего ХОД
        </h2>

        <div className="features-grid">
          <div className="feature-item">
             <img src="/images/mat.svg" alt="Преподаватели" />
            <p>Передовой подход к образовательному процессу</p>
          </div>
          <div className="feature-item">
             <img src="/images/kitob.svg" alt="Преподаватели" />
            <p>
              Непрерывное усовершенствование и пополнение базы курсов
            </p>
          </div>
          <div className="feature-item">
             <img src="/images/teacher.svg" alt="Преподаватели" />
            <p>Только практикующие преподаватели</p>
          </div>
          <div className="feature-item">
             <img src="/images/student..svg" alt="Преподаватели" />
            <p>
              Сопровождение на всех этапах. От начала обучения до
              трудоустройства
            </p>
          </div>
        </div>
      </section>
 
      <section className="banner-section">
        <div className="banner-card">
          <div className="banner-left">
          <img src="/images/qush.svg" alt="Академия ХОД Сова" />
            <div className="banner-speech-bubble">
              <h3>Помочь с выбором?</h3>
              <p>
                Оставьте заявку и наши специалисты свяжутся с вами, ответят на
                все вопросы и подберут подходящий вариант обучения.
              </p>
            </div>
          </div>

          <form className="banner-form" onSubmit={handleSubmit}>
            <div className="input-full">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-row">
              <input
                type="tel"
                name="phone"
                placeholder="Ваш телефон"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Ваш e-mail"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <p className="privacy-text">
              Нажимая на кнопку, я соглашаюсь на обработку персональных данных
              и с правилами пользования Платформой
            </p>

            <button type="submit" className="submit-btn">
              Отправить
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;