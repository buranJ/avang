import { useState } from "react";
import styles from "./layoutplans.module.css";

// Данные: для каждого этажа и блока — своя картинка планировки
// Структура: floors[floorKey][blockKey] = { image: "URL", label: "подпись" }
const layoutData = {
  "1-3": {
    "block1": {
      image: "https://avangardstyle.kg/media/images/buildings/q1.webp", 
      label: "1 БЛОК | 1-3 ЭТАЖ",
    },
    "block2": {
      image: "https://avangardstyle.kg/media/images/buildings/q3.webp", 
      label: "2 БЛОК | 1-3 ЭТАЖ",
    },
    "block3": {
      image: "https://avangardstyle.kg/media/images/buildings/q5.webp", 
      label: "3 БЛОК | 1-3 ЭТАЖ",
    },
    "block4": {
      image: "https://avangardstyle.kg/media/images/buildings/q7.webp", 
      label: "4, 10, 11 БЛОК | 1-3 ЭТАЖ",
    },
    "block5": {
      image: "https://avangardstyle.kg/media/images/buildings/q10.webp",
      label: "5 БЛОК | 1-3 ЭТАЖ",
    },
    "block6": {
      image: "https://avangardstyle.kg/media/images/buildings/q12.webp",
      label: "6 БЛОК | 1-3 ЭТАЖ",
    },
    "block7": {
      image: "https://avangardstyle.kg/media/images/buildings/q15.webp",
      label: "7 БЛОК | 1-3 ЭТАЖ",
    },
    "block8": {
      image: "https://avangardstyle.kg/media/images/buildings/q18.webp",
      label: "8, 9, 12, 13 БЛОК | 1-3 ЭТАЖ",
    },
  },
  "4": {
    "block1": {
      image: "https://avangardstyle.kg/media/images/buildings/q2.webp", 
      label: "1 БЛОК | 4 ЭТАЖ",
    },
    "block2": {
      image: "https://avangardstyle.kg/media/images/buildings/q4.webp", 
      label: "2 БЛОК | 4 ЭТАЖ",
    },
    "block3": {
      image: "https://avangardstyle.kg/media/images/buildings/q6.webp", 
      label: "3 БЛОК | 4 ЭТАЖ",
    },
    "block4": {
      image: "https://avangardstyle.kg/media/images/buildings/q8.webp", 
      label: "4, 10, 11 БЛОК | 4 ЭТАЖ",
    },
    "block5": {
      image: "https://avangardstyle.kg/media/images/buildings/5__4_.svg",
      label: "5 БЛОК | 4 ЭТАЖ",
    },
    "block6": {
      image: "https://avangardstyle.kg/media/images/buildings/q14.webp", 
      label: "6 БЛОК | 4 ЭТАЖ",
    },
    "block7": {
      image: "https://avangardstyle.kg/media/images/buildings/q17.webp", 
      label: "7 БЛОК | 4 ЭТАЖ",
    },
    "block8": {
      image: "https://avangardstyle.kg/media/images/buildings/q19.webp", 
      label: "8, 9, 12, 13 БЛОК | 4 ЭТАЖ",
    },
  },
};

const floors = [
  { key: "1-3", label: "1-3 этаж" },
  { key: "4", label: "4 этаж" },
];

const blocks = [
  { key: "block1", label: "Блок 1" },
  { key: "block2", label: "Блок 2" },
  { key: "block3", label: "Блок 3" },
  { key: "block4", label: "Блок 4, 10, 11" },
  { key: "block5", label: "Блок 5" },
  { key: "block6", label: "Блок 6" },
  { key: "block7", label: "Блок 7" },
  { key: "block8", label: "Блок 8, 9, 12, 13" },
];

export default function Layout() {
  const [activeFloor, setActiveFloor] = useState("1-3");
  const [activeBlock, setActiveBlock] = useState("block1");

  const current = layoutData[activeFloor][activeBlock];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Планы типового этажа</h2>

      {/* Переключатель этажей */}
      <div className={styles.toggleWrapper}>
        <div className={styles.toggle}>
          {floors.map((floor) => (
            <button
              key={floor.key}
              className={`${styles.toggleBtn} ${activeFloor === floor.key ? styles.active : ""}`}
              onClick={() => setActiveFloor(floor.key)}
            >
              {floor.label}
            </button>
          ))}
        </div>
      </div>

      {/* Переключатель блоков */}
      <div className={styles.blocksWrapper}>
        {blocks.map((block) => (
          <button
            key={block.key}
            className={`${styles.blockBtn} ${activeBlock === block.key ? styles.activeBlock : ""}`}
            onClick={() => setActiveBlock(block.key)}
          >
            {block.label}
          </button>
        ))}
      </div>

      {/* Планировка */}
      <div className={styles.planWrapper}>
        {/* <p className={styles.planLabel}>
          ТИПОВАЯ ПЛАНИРОВКА<br />
          {current.label}
        </p> */}
        <img
          src={current.image} // <- картинка берётся из layoutData выше
          alt={current.label}
          className={styles.planImage}
        />
      </div>
    </section>
  );
}