import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-page__card">
        <p className="not-found-page__eyebrow">404</p>
        <h1 className="not-found-page__title">Страница не найдена</h1>
        <p className="not-found-page__text">
          Возможно, ссылка устарела или адрес введен с ошибкой.
        </p>
        <Link className="not-found-page__link" to="/">
          На главную
        </Link>
      </div>
    </main>
  );
}
