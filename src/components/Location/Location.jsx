import "./location.css";
import lock1 from "../../assets/lock.png";
import lock2 from "../../assets/lock-2.png";
export default function Location() {
  return (
    <section className="location">
      <div className="location__top">
        <div className="location__map-small">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A929c83debf01b30395da784b9a0ca45b59e1a854dc7836088171ee8dd312daed&source=constructor"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Локация"
          />
        </div>

        <div className="location__info">
          <h2 className="location__title">Локация</h2>
          <p className="location__text">
            Локация клубного дома идеально сочетает близость к городу и все
            преимущества загородной жизни. Это поистине райское место для
            создания собственного уголка комфорта и гармонии.
          </p>
        </div>
      </div>

      <div className="location__bottom">
        <div className="location__bottom-img">
          <img src={lock1} alt="Карта района" />
        </div>
        <div className="location__bottom-img">
          <img src={lock2} alt="Схема локации" />
        </div>
      </div>
    </section>
  );
}
