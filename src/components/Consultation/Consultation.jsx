import "./consultation.css";
const Consultation = () => {
  return (
    <section className="consultation">
      <div className="consultation__form-box container">
        <h2 className="consultation__form-title">Получить Консультацию</h2>

        <form className="consultation__form">
          <select className="consultation__field" defaultValue="">
            <option value="" disabled>
              Тема
            </option>
            <option value="Покупка недвижимости">Покупка недвижимости</option>
            <option value="Сотрудничество">Сотрудничество</option>
            <option value="Предложения">Предложения</option>
          </select>

          <input
            type="text"
            className="consultation__field"
            placeholder="Ваше имя"
          />

          <input
            type="tel"
            className="consultation__field"
            placeholder="+996"
          />

          <button type="submit" className="consultation__button">
            Отправить
          </button>
        </form>
      </div>

      <div className="consultation__contacts">
        <h2 className="consultation__title">Контакты</h2>

        <a href="tel:+996312988958" className="consultation__link">
          +996 312 98 89 58
        </a>

        <a href="tel:+996223447465" className="consultation__link">
          +996 223 44 74 65
        </a>

        <a href="mailto:sales@avangardstyle.kg" className="consultation__link">
          sales@avangardstyle.kg
        </a>

        <a href="mailto:info@avangardstyle.kg" className="consultation__link">
          info@avangardstyle.kg
        </a>
      </div>
    </section>
  );
};

export default Consultation;
