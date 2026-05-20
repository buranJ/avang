import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Projectsblocks.module.css";

export const allProjects = {
  buildings: [
    {
      id: 1,
      title: 'Загородная резиденция "Салкын-Тор"',
      cover: "https://avangardstyle.kg/media/images/gallery/DSC07316.webp",
      hasDetail: true,
      description: "Загородные резиденции – это подлинное олицетворение лаконичности и аристократического благородства английской архитектуры с максимальным уровнем комфорта и безопасности. Представьте себе дом, в котором забываешь обо всех проблемах и суете, где можешь полностью расслабиться в выходной день или быстро восстановить силы после работы.",
      gallery: [
        "https://avangardstyle.kg/media/images/gallery/DSC07316.webp",
        "https://avangardstyle.kg/media/images/gallery/DJI_20241204174754_0012_D.webp",
        "https://avangardstyle.kg/media/images/gallery/DJI_20241204174818_0014_D.webp",
        "https://avangardstyle.kg/media/images/gallery/DJI_20241204174850_0016_D.webp",
        "https://avangardstyle.kg/media/images/gallery/DJI_20241204174911_0018_D.webp",
        "https://avangardstyle.kg/media/images/gallery/DSC07312.webp",
        "https://avangardstyle.kg/media/images/gallery/DSC07313.webp",
        "https://avangardstyle.kg/media/images/gallery/DSC07314.webp",
        "https://avangardstyle.kg/media/images/gallery/DJI_20241204174324_0003_D.webp",
      ],
    },
    {
      id: 2,
      title: 'Жилой комплекс "Avangard City"',
      cover: "https://avangardstyle.kg/media/images/gallery/IMG_5880.webp",
      hasDetail: true,
      description: "Добро пожаловать в «Avangard CITY»! Это новый проект бизнес-класса с исключительно привлекательным местоположением в любимой столице: неподалеку от Южных Ворот. «Avangard CITY» – городок с уникальной и выразительной архитектурой. Комплекс представляет собой ансамбль из 10 домов единого архитектурного стиля этажностью от 10 до 14 уровней. При взгляде сверху дома образуют букву «А», что символично перекликается с названием комплекса. Широкий выбор квартир позволит Вам подобрать жилье под самые разные запросы: небольшие студии, комфортабельные и функциональные 1, 2, 3 и 4‑х комнатные квартиры. Для тех, кто хочет приобрести просторные апартаменты, есть возможность увеличить площадь на стадии строительства. Продуманные планировки позволяют использовать площадь максимально эффективно и создать идеальное пространство для жизни.",
      gallery: [
        "https://avangardstyle.kg/media/images/gallery/IMG_5880.webp",
        "https://avangardstyle.kg/media/images/gallery/IMG_5875.webp",
        "https://avangardstyle.kg/media/images/gallery/IMG_5884.webp",
        "https://avangardstyle.kg/media/images/gallery/IMG_5881.webp",
        "https://avangardstyle.kg/media/images/gallery/IMG_5878.webp",
        "https://avangardstyle.kg/media/images/gallery/IMG_5142.webp",
        "https://avangardstyle.kg/media/images/gallery/IMG_5143.webp",
        "https://avangardstyle.kg/media/images/gallery/IMG_5144.webp",
        "https://avangardstyle.kg/media/images/gallery/IMG_5145.webp",
        "https://avangardstyle.kg/media/images/gallery/IMG_5146.webp",
        "https://avangardstyle.kg/media/images/gallery/IMG_5147.webp",
      ],
    },
    {
      id: 3,
      title: 'Жилой дом "Испанский дом"',
      cover: "https://avangardstyle.kg/media/images/gallery/IMG_5921.webp",
      hasDetail: true,
      description: "«Испанский дом» – уникальный жилой комплекс премиум-класса с небывалым архитектурным решением, непривычным для нашего любимого города. На создание «Испанского дома» нас вдохновила архитектура зданий города Мадрид. Посетив в 2018 году столицу Испании наше руководство решило украсить город частичкой испанского духа и красотой сооружений этого необычного города. Мы вдохновлялись такими зданиями города Мадрид, как «Edificio Metrópolis», «Four Seasons Hotel Madrid», «Edificio Banesto» где ныне расположен «Испанский кредитный банк». Все эти архитектурные шедевры воплощены в жилом комплексе премиум-класса «Испанский дом».",
      gallery: [
        "https://avangardstyle.kg/media/images/gallery/IMG_5921.webp",
        "https://avangardstyle.kg/media/images/gallery/IMG_5919.webp",
        "https://avangardstyle.kg/media/images/gallery/IMG_5920.webp",
        "https://avangardstyle.kg/media/images/gallery/IMG_5922.webp",
        "https://avangardstyle.kg/media/images/gallery/IMG_5923.webp",
        "https://avangardstyle.kg/media/images/gallery/IMG_5924.webp",
        "https://avangardstyle.kg/media/images/gallery/IMG_5925.webp",
        "https://avangardstyle.kg/media/images/gallery/IMG_5926.webp",
      ],
    },
    { id: 4, title: 'Жилой дом "Арбат"', cover: "https://avangardstyle.kg/media/images/bgs/Recovered_jpg_file84.jpg", hasDetail: false },
    { id: 5, title: "УВК ШГ №20 им. Гейдара Алиева", cover: "https://avangardstyle.kg/media/images/bgs/DSC00752.jpg", hasDetail: false },
    { id: 6, title: "Жилой дом «Монако»", cover: "https://avangardstyle.kg/media/images/bgs/DSC00763.jpg", hasDetail: false },
    { id: 7, title: "Жилой комплекс «Французский квартал»", cover: "https://avangardstyle.kg/media/images/bgs/DJI_0938.jpg", hasDetail: false },
    { id: 8, title: "Жилой комплекс «Фрунзе»", cover: "https://avangardstyle.kg/media/images/bgs/DJI_0158.jpg", hasDetail: false },
    { id: 9, title: "Жилой дом «Монреаль»", cover: "https://avangardstyle.kg/media/images/bgs/DJI_0097.jpg", hasDetail: false },
    { id: 10, title: "Жилой комплекс «Монблан»", cover: "https://avangardstyle.kg/media/images/bgs/DSC00782.jpg", hasDetail: false },
    { id: 11, title: "Жилой комплекс «Манхэттен»", cover: "https://avangardstyle.kg/media/images/bgs/DJI_0623.jpg", hasDetail: false },
    { id: 12, title: "Фитнес клуб «Avangard Sport Club»", cover: "http://avangardstyle.kg/media/images/bgs/SPORT-1-obj.jpg", hasDetail: false },
  ],
  bridges: [
    { id: 101, title: "Автомобильный мост через реку Аламедин", cover: "https://avangardstyle.kg/media/images/bgs/image.png", hasDetail: false },
    { id: 102, title: "Мост через реку Тюп", cover: "https://avangardstyle.kg/media/images/bgs/image_1_LtXYtP9.png", hasDetail: false },
    { id: 103, title: "Мостовой переход через сай Жаман-Даван", cover: "https://avangardstyle.kg/media/images/bgs/image_2FvOVGb.png", hasDetail: false },
    { id: 104, title: "Автомобильный мост через реку Ала-Арча", cover: "https://avangardstyle.kg/media/images/bgs/image_1_vEMZI59.png", hasDetail: false },
  ],
};

const getCountByWidth = () => {
  if (typeof window === "undefined") return 6;
  if (window.innerWidth <= 480) return 3;
  if (window.innerWidth <= 1100) return 4;
  return 6;
};

function ProjectCard({ project }) {
  const navigate = useNavigate();
  const handleClick = () => { if (project.hasDetail) navigate(`/projects/${project.id}`); };

  return (
    <div className={styles.card} onClick={handleClick} style={{ cursor: project.hasDetail ? "pointer" : "default" }}>
      <div className={styles.cardImageWrapper}>
        <img src={project.cover} alt={project.title} className={styles.cardImage} />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <button className={styles.cardBtn} onClick={(e) => { e.stopPropagation(); handleClick(); }}>
          О проекте
        </button>
      </div>
    </div>
  );
}

export default function Projectsblocks() {
  const [activeTab, setActiveTab] = useState("buildings");
  const [visibleCount, setVisibleCount] = useState(getCountByWidth);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getCountByWidth());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = allProjects[activeTab];
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const handleTabChange = (tab) => { setActiveTab(tab); setVisibleCount(getCountByWidth()); };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Реализованные проекты</h2>
      <div className={styles.toggleWrapper}>
        <div className={styles.toggle}>
          <button className={`${styles.toggleBtn} ${activeTab === "buildings" ? styles.active : ""}`} onClick={() => handleTabChange("buildings")}>
            Жилые и коммерческие здания
          </button>
          <button className={`${styles.toggleBtn} ${activeTab === "bridges" ? styles.active : ""}`} onClick={() => handleTabChange("bridges")}>
            Мосты, дороги и тоннели
          </button>
        </div>
      </div>
      <div className={styles.grid}>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {hasMore && (
        <div className={styles.loadMoreWrapper}>
          <button className={styles.loadMoreBtn} onClick={() => setVisibleCount((c) => c + getCountByWidth())}>
            Загрузить ещё
          </button>
        </div>
      )}
    </section>
  );
}