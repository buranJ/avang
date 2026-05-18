import { useState } from "react";
import styles from "./MediaList.module.css";

const articles = [
  {
    logo: "https://24.kg/assets/7a772a43/images/logo.png",
    logoAlt: "24.kg",
    date: "14.01.2025",
    title: "«Авангард Стиль»: дезинфекция домов, помощь комендатуре, рабочим и миллион сомов",
    url: "https://24.kg/biznes_info/150629_avangard_stil_dezinfektsiya_domov_pomosch_komendature_rabochim_imillion_somov/",
  },
  {
    logo: "https://kaktus.media/src/Template/Block/Header/img/logo-hover.svg?mtime=1613710204",
    logoAlt: "Kaktus Media",
    date: "14.01.2025",
    title: "\"Авангард Стиль\" дезинфекция домов, помощь комендатуре, рабочим и миллион сомов",
    url: "https://kaktus.media/doc/411279_sk_avangard_stil_dezinfekciia_domov_pomosh_komendatyre_rabochim_i_1_mln_somov.html",
  },
  {
    logo: "https://www.tazabek.kg/ui-img/logo-5-0.svg",
    logoAlt: "Tazabek",
    date: "14.01.2025",
    title: "ТОП-200: «Авангард Стиль», «Лекарь», LION — На ком держится экономика Кыргызстана?",
    url: "https://www.tazabek.kg/news:1745469",
  },
  {
    logo: "https://www.tazabek.kg/ui-img/logo-5-0.svg",
    logoAlt: "Tazabek",
    date: "14.01.2025",
    title: "«Елисейские поля» — это не просто дом. Это ваш новый образ жизни",
    url: "https://www.tazabek.kg/news:1732345",
  },
];

export default function MediaList() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>СМИ об "Авангард Стиль"</h2>
      <div className={styles.list}>
        {articles.map((article, i) => (
          <a
            key={i}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${hoveredIndex === i ? styles.cardHovered : ""}`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={styles.logoWrapper}>
              <img src={article.logo} alt={article.logoAlt} className={styles.logo} />
            </div>
            <div className={styles.content}>
              <span className={styles.date}>{article.date}</span>
              <p className={styles.title}>{article.title}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}