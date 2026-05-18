import "./EtapyStroiki.css";

const LINK_URL = "https://live.avangardstyle.kg/";

export default function EtapyStroiki() {
  return (
    <div className="stage-card">
      <h2 className="stage-card__title">Этапы строительства</h2>
      <p className="stage-card__desc">
        Смотрите "Этапы строительства" по ссылке:
      </p>
      <a className="stage-card__btn" href={LINK_URL} target="_blank" rel="noopener noreferrer">
        Посмотреть
      </a>
    </div>
  );
}
