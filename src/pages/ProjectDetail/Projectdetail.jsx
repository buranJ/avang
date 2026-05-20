import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allProjects } from "../../components/projectsblocks/Projectsblocks";
import styles from "./ProjectDetail.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = allProjects.buildings.find((p) => p.id === Number(id));
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!project) return (
    <div className={styles.notFound}>
      <p>Проект не найден</p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );

  const gallery = project.gallery || [project.cover];
  const total = gallery.length;
  const prev = () => setCurrentSlide((i) => (i - 1 + total) % total);
  const next = () => setCurrentSlide((i) => (i + 1) % total);

  return (
    <div>
      <Header />
      <section className={styles.section}>
        <div className={styles.header}>
          <button className={styles.backBtn} onClick={() => navigate(-1)}>&#8249;</button>
          <h2 className={styles.heading}>{project.title}</h2>
        </div>

        <div className={styles.sliderWrapper}>
          <img src={gallery[currentSlide]} alt={project.title} className={styles.sliderImage} />
        </div>

        <div className={styles.sliderControls}>
          <button className={styles.arrow} onClick={prev}>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2L2 10L10 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className={styles.dots}>
            {gallery.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === currentSlide ? styles.dotActive : ""}`}
                onClick={() => setCurrentSlide(i)}
              />
            ))}
          </div>
          <button className={styles.arrow} onClick={next}>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L10 10L2 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <p className={styles.description}>{project.description}</p>
      </section>
      <Footer />
    </div>
  );
}