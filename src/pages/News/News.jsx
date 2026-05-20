import { Link } from "react-router-dom";
import { getNewsList } from "../../api/newsApi";
import { useAsyncData } from "../../hooks/useAsyncData";
import "./News.css";

export default function News() {
  const { data: newsItems, error, loading } = useAsyncData(
    (signal) => getNewsList({ signal }),
    []
  );

  const hasNews = Array.isArray(newsItems) && newsItems.length > 0;

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
          {loading && (
            <p className="news-page__state">Загрузка новостей...</p>
          )}

          {!loading && error && (
            <p className="news-page__state">Не удалось загрузить новости. Попробуйте обновить страницу.</p>
          )}

          {!loading && !error && !hasNews && (
            <p className="news-page__state">Новостей пока нет.</p>
          )}

          {!loading && !error && hasNews && newsItems.map((item) => (
            <Link className="news-page__card" key={item.slug} to={`/news/${item.slug}`}>
              <div className="news-page__image-wrap">
                <img className="news-page__image" src={item.mainImage} alt={item.title} />
                <span className="news-page__brand">Avangard</span>
                {item.createdAt && <span className="news-page__date">{item.createdAt}</span>}
                <div className="news-page__image-caption">
                  <span>{item.title}</span>
                  <small>Новости компании</small>
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
