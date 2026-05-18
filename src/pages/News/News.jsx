import { Link } from "react-router-dom";
import { NEWS_ITEMS } from "./newsData";
import "./News.css";

export default function News() {
  return (
    <main className="news-page">
      <div className="news-page__shell">
        <div className="news-page__topbar">
          <Link className="news-page__back" to="/" aria-label="Вернуться назад">
            <svg width="17" height="29" viewBox="0 0 17 29" fill="none" aria-hidden="true">
              <path d="M14.5 2.5L3 14.5L14.5 26.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <h1 className="news-page__title">Новости</h1>
        </div>

        <section className="news-page__grid" aria-label="Список новостей">
          {NEWS_ITEMS.map((item) => (
            <Link className="news-page__card" key={item.id} to={`/news/${item.id}`}>
              <div className="news-page__image-wrap">
                <img className="news-page__image" src={item.image} alt={item.title} />
                <span className="news-page__brand">Avangard</span>
                <span className="news-page__date">{item.date}</span>
                <div className="news-page__image-caption">
                  <span>{item.label}</span>
                  <small>{item.caption}</small>
                </div>
              </div>
              <h2 className="news-page__card-title">{item.title}</h2>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
