import { useState } from "react";
import styles from "./Architecture.module.css";

const fasadItems = [
  {
    position: "top",
    title: "Конструкция из монолито железобетона",
    description: "Характеризуется повышенной устойчивостью и длительным сроком службы",
  },
  {
    position: "bottom",
    title: "Вентфасад",
    description: "Фасад с воздушным зазором между облицовкой и стеной",
  },
  {
    position: "top",
    title: "Теплозащита из минплиты",
    description: "Утеплитель приспособлен к непостоянному климату",
  },
  {
    position: "bottom",
    title: 'Фасад – натуральный камень "Сары-Таш"',
    description: "Высокая прочность, устойчивость к атмосферным воздействиям",
  },
  {
    position: "top",
    title: "Высокие потолки высотой 3,2 метра",
    description: "Создают ощущение простора и роскоши в помещении",
  },
];

const materialsItems = [
  {
    position: "top",
    title: "Стены кирпичные",
    description: "Обладают высокой долговечностью и изоляционными свойствами",
  },
  {
    position: "bottom",
    title: "Алюминиевые окна теплой серии",
    description: "Современные оконные конструкции, сочетающие прочность и энергоэффективность",
  },
];

function TimelineItem({ item }) {
  const isTop = item.position === "top";
  return (
    <div className={styles.timelineItem}>
      {isTop ? (
        <div className={styles.topBlock}>
          <div className={styles.textBlock}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemDesc}>{item.description}</p>
          </div>
          <div className={styles.tickDown} />
        </div>
      ) : (
        <div className={styles.bottomBlock}>
          <div className={styles.tickUp} />
          <div className={styles.textBlock}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemDesc}>{item.description}</p>
          </div>
        </div>
      )}
      {/* dot for mobile — sits outside top/bottomBlock, always visible in mobile */}
      <div className={styles.dot} />
    </div>
  );
}

export default function Architecture() {
  const [activeTab, setActiveTab] = useState("fasad");
  const items = activeTab === "fasad" ? fasadItems : materialsItems;

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Архитектура</h2>

      <div className={styles.toggleWrapper}>
        <div className={styles.toggle}>
          <button
            className={`${styles.toggleBtn} ${activeTab === "fasad" ? styles.active : ""}`}
            onClick={() => setActiveTab("fasad")}
          >
            Фасад
          </button>
          <button
            className={`${styles.toggleBtn} ${activeTab === "materials" ? styles.active : ""}`}
            onClick={() => setActiveTab("materials")}
          >
            Материалы
          </button>
        </div>
      </div>

      <div className={styles.timeline}>
        <div className={styles.timelineTrack} />
        <div
          className={styles.itemsWrapper}
          style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}
        >
          {items.map((item, i) => (
            <TimelineItem key={`${activeTab}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}