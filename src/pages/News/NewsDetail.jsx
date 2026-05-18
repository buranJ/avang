import { Link, useParams } from "react-router-dom";
import { NEWS_ITEMS } from "./newsData";
import "./NewsDetail.css";

export default function NewsDetail() {
  const { id } = useParams();
  const item = NEWS_ITEMS.find((newsItem) => newsItem.id === Number(id)) || NEWS_ITEMS[0];

  return (
    <main className="news-detail">
      <article className="news-detail__shell">
        <div className="news-detail__topbar">
          <Link className="news-detail__back" to="/news" aria-label="Вернуться к новостям">
            <svg width="17" height="29" viewBox="0 0 17 29" fill="none" aria-hidden="true">
              <path d="M14.5 2.5L3 14.5L14.5 26.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <h1 className="news-detail__page-title">Новости</h1>
        </div>

        <div className="news-detail__hero">
          <img className="news-detail__image" src={item.image} alt={item.title} />
          <span className="news-detail__brand">Avangard</span>
          <span className="news-detail__date">{item.date}</span>
          <div className="news-detail__image-caption">
            <span>{item.label}</span>
            <small>{item.caption}</small>
          </div>
        </div>

        <div className="news-detail__content">
          <p className="news-detail__meta">{item.date}</p>
          <h2 className="news-detail__title">{item.title}</h2>
          <div className="news-detail__text">
            {item.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
