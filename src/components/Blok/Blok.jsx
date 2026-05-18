import { Link } from "react-router-dom";
import "./blok.css";

const objects = [
  { id: 1, name: 'КД "Panorama Park"', img: "/image (1).jpg" },
  { id: 2, name: 'ЖК "Москва Сити"', img: "/back.jpg" },
  { id: 3, name: 'ЖК "Европа"', img: "/back (1).jpg" },
  { id: 4, name: 'ЖД "Москва"', img: "/image.jpg" },
  { id: 5, name: "Салкын - Тор", img: "/image.png" },
  { id: 6, name: '"Елисейские поля"', img: "/image (2).jpg" },
];

const news = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=700&q=80",
    date: "25.07.2024",
    category: "СТАНДАРТ ПАРКИНГА",
    title: "Стандарт Паркинга в современном ЖК",
    desc: "Новые требования к организации паркинга в жилых комплексах повышают комфорт жителей.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80",
    date: "25.07.2024",
    category: "НОВОСТИ ПРОЕКТА",
    title: "Москва Сити Июнь 2024",
    desc: "Актуальный ход строительства и фотоотчёт за июнь 2024 года.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80",
    date: "24.07.2024",
    category: "НОВОСТИ ПРОЕКТА",
    title: "Елисейские Поля Июнь 2024",
    desc: "Завершение монолитных работ и начало отделки фасадов.",
  },
];

export default function Blok() {
  return (
    <div className="blok-wrapper">
      {/* ── Section 1: Строящиеся объекты ── */}
      <section className="section objects-section">
        <div className="section-header">
          <h2 className="section-title">Строящиеся объекты</h2>
          <button className="nav-arrow" aria-label="Все объекты">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="objects-grid">
          {objects.map((obj) => (
            <article key={obj.id} className="obj-card">
              <div className="image-wrapper">
                <img src={obj.img} alt={obj.name} className="card-image" />
              </div>
              <div className="obj-card__content">
                <p className="obj-name">{obj.name}</p>
                <button className="obj-btn">О проекте</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Section 2: Новости ── */}
      <section className="section news-section">
        <div className="section-header">
          <h2 className="section-title news-title">Новости</h2>
          <Link className="nav-arrow news-arrow" to="/news" aria-label="Все новости">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="news-grid">
          {news.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-img-wrap">
                <img src={item.img} alt={item.title} className="news-img" />
                <span className="news-logo">AVANGARD</span>
                <span className="news-date">{item.date}</span>
                <div className="news-img-bottom">
                  <span className="news-category">{item.category}</span>
                  <p className="news-img-text">{item.desc}</p>
                </div>
              </div>
              <div className="news-body">
                <h3 className="news-card-title">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
