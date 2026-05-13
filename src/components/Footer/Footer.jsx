import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__logos">
          <div className="footer__logo-block">
            <img
              src="/images/logo-blue.png"
              alt="Avangard Style"
              className="footer__logo"
            />

            <p className="footer__logo-text">
              Строительная компания
              <br />
              “Авангард Стиль”
            </p>
          </div>

          <div className="footer__logo-block">
            <img
              src="/images/logo-gray.png"
              alt="Avangard Business"
              className="footer__logo"
            />

            <p className="footer__logo-text">
              Бизнес Центр
              <br />
              “Авангард Бизнес Центр”
            </p>
          </div>

          <div className="footer__logo-block">
            <img
              src="/images/logo-red.png"
              alt="Avangard Sport"
              className="footer__logo"
            />

            <p className="footer__logo-text">
              Спортивный клуб
              <br />
              “Авангард Спортивный Клуб”
            </p>
          </div>
        </div>

        <div className="footer__menu">
          <h3 className="footer__title">Меню</h3>

          <a href="/">О нас</a>
          <a href="/">Продажа</a>
          <a href="/">Бизнес центр</a>
          <a href="/">Фитнес клуб</a>
          <a href="/">Live</a>
        </div>

        <div className="footer__menu">
          <h3 className="footer__title">Полезное</h3>

          <a href="/">Вакансии</a>
          <a href="/">Закупки</a>
          <a href="/">СМИ о нас</a>
          <a href="/">Контакты</a>

          <form className="footer__subscribe">
            <input type="email" placeholder="Email" />

            <button type="submit">›</button>
          </form>

          <p className="footer__subscribe-text">Подписаться на рассылку</p>
        </div>

        <div className="footer__address">
          <h3 className="footer__title">Адрес</h3>

          <p>
            Отдел продаж “Елисейские поля”:
            <br />
            Токомбаева 15/2
          </p>

          <p>
            Отдел продаж ГМ “Глобус”:
            <br />
            Токомбаева 53/1
          </p>

          <p>БЦ “Авангард”: Токтогула 125/1</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
