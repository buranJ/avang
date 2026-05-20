import { Link, useParams } from "react-router-dom";
import { getNewsBySlug } from "../../api/newsApi";
import { useAsyncData } from "../../hooks/useAsyncData";
import NotFound from "../NotFound/NotFound";
import "./NewsDetail.css";

export default function NewsDetail() {
  const { slug } = useParams();
  const { data: item, error, loading } = useAsyncData(
    (signal) => slug ? getNewsBySlug(slug, { signal }) : Promise.resolve(null),
    [slug]
  );

  if (!slug) return <NotFound />;

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

        {loading && (
          <p className="news-detail__state">Загрузка новости...</p>
        )}

        {!loading && error && (
          <p className="news-detail__state">Не удалось загрузить новость. Проверьте ссылку или попробуйте позже.</p>
        )}

        {!loading && !error && item && (
          <>
            <div className="news-detail__hero">
              <img className="news-detail__image" src={item.mainImage} alt={item.title} />
              <span className="news-detail__brand">Avangard</span>
              {item.createdAt && <span className="news-detail__date">{item.createdAt}</span>}
              <div className="news-detail__image-caption">
                <span>{item.title}</span>
                <small>Новости компании</small>
              </div>
            </div>

            <div className="news-detail__content">
              {item.createdAt && <p className="news-detail__meta">{item.createdAt}</p>}
              <h2 className="news-detail__title">{item.title}</h2>
              {item.description ? (
                <div className="news-detail__text" dangerouslySetInnerHTML={{ __html: item.description }} />
              ) : (
                <p className="news-detail__empty">Описание новости пока не добавлено.</p>
              )}

              {item.youtubeLink && (
                <div className="news-detail__video">
                  <iframe
                    src={item.youtubeLink}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )}

              {item.images.length > 0 && (
                <div className="news-detail__gallery">
                  {item.images.map((image) => (
                    <img key={image} src={image} alt={item.title} loading="lazy" />
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {!loading && !error && !item && (
          <div className="news-detail__content">
            <p className="news-detail__empty">Новость не найдена.</p>
          </div>
        )}
      </article>
    </main>
  );
}
