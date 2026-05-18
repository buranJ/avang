import "./Panoramapark.css";

const VIDEO_ID = "FPTZl7avMLs";
const LIVE_URL = "https://live.avangardstyle.kg/";
const STAGES_URL = "https://live.avangardstyle.kg/";

export default function Panoramapark() {
  return (
    <section className="panorama-section" aria-label="Panorama Park video and links">
      <div className="panorama-section__inner">
        <div className="pp-wrapper">
          <div className="pp-video">
            <iframe
              className="pp-iframe"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0`}
              title="PANORAMA PARK - новый проект от Avangard Style"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="panorama-cards">
          <article className="panorama-card panorama-card--dark">
            <h2 className="panorama-card__title">Прямой эфир</h2>
            <p className="panorama-card__desc">
              Смотрите трансляцию строительства в режиме реального времени по ссылке:
            </p>
            <a className="panorama-card__btn panorama-card__btn--blue" href={LIVE_URL} target="_blank" rel="noopener noreferrer">
              Посмотреть
            </a>
          </article>

          <article className="panorama-card panorama-card--blue">
            <h2 className="panorama-card__title">Этапы строительства</h2>
            <p className="panorama-card__desc">
              Смотрите «Этапы строительства» по ссылке:
            </p>
            <a className="panorama-card__btn panorama-card__btn--dark" href={STAGES_URL} target="_blank" rel="noopener noreferrer">
              Посмотреть
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
