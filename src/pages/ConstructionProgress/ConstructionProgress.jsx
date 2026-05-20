import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ConstructionProgress.css";

const PROJECTS = [
    {
        id: "legenda",
        name: "Легенда",
        months: [
            {
                label: "Апрель 2026",
                photos: [
                    "/back.jpg", "/image (1).jpg", "/back (1).jpg", "/image.jpg",
                    "/image (2).jpg", "/1.png", "/image.png", "/back.jpg",
                ],
            },
            {
                label: "Март 2026",
                photos: [
                    "/image.jpg", "/back.jpg", "/1.png", "/image (1).jpg",
                    "/back (1).jpg", "/image (2).jpg", "/image.png", "/back.jpg",
                ],
            },
            {
                label: "Февраль 2026",
                photos: [
                    "/image (2).jpg", "/back (1).jpg", "/image.jpg", "/1.png",
                    "/back.jpg", "/image (1).jpg", "/image.png", "/back.jpg",
                ],
            },
            {
                label: "Январь 2026",
                photos: [
                    "/1.png", "/image (2).jpg", "/back.jpg", "/image (1).jpg",
                    "/image.png", "/back (1).jpg", "/image.jpg", "/back.jpg",
                ],
            },
        ],
    },
    {
        id: "panorama-park",
        name: "Panorama Park",
        months: [
            {
                label: "Апрель 2026",
                photos: [
                    "/image (1).jpg", "/back.jpg", "/image (2).jpg", "/back (1).jpg",
                    "/image.png", "/1.png", "/image.jpg", "/back.jpg",
                ],
            },
            {
                label: "Март 2026",
                photos: [
                    "/back (1).jpg", "/image.jpg", "/back.jpg", "/image (2).jpg",
                    "/1.png", "/image (1).jpg", "/image.png", "/back.jpg",
                ],
            },
            {
                label: "Февраль 2026",
                photos: [
                    "/image.png", "/1.png", "/image (1).jpg", "/back.jpg",
                    "/image (2).jpg", "/back (1).jpg", "/image.jpg", "/back.jpg",
                ],
            },
        ],
    },
    {
        id: "eliseyskie",
        name: "Елисейские поля",
        months: [
            {
                label: "Апрель 2026",
                photos: [
                    "/back.jpg", "/image.png", "/1.png", "/image (2).jpg",
                    "/back (1).jpg", "/image.jpg", "/image (1).jpg", "/back.jpg",
                ],
            },
            {
                label: "Март 2026",
                photos: [
                    "/image (2).jpg", "/back.jpg", "/image (1).jpg", "/1.png",
                    "/image.jpg", "/back (1).jpg", "/image.png", "/back.jpg",
                ],
            },
        ],
    },
];

function ProjectSection({ project }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const photos = project.months[activeIndex].photos;

    return (
        <section className="cp-project">
            <h2 className="cp-project__name">{project.name}</h2>

            <div className="cp-months">
                {project.months.map((month, i) => (
                    <button
                        key={month.label}
                        className={`cp-month${i === activeIndex ? " cp-month--active" : ""}`}
                        onClick={() => setActiveIndex(i)}
                    >
                        {month.label}
                    </button>
                ))}
            </div>

            <div className="cp-grid">
                {photos.map((src, i) => (
                    <div key={i} className="cp-photo">
                        <img
                            src={src}
                            alt={`${project.name} — ${project.months[activeIndex].label}`}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function ConstructionProgress() {
    return (
        <div className="cp-page">
            <Header />

            <div className="cp-hero">
                <h1 className="cp-hero__title">Динамика строительства</h1>
                <p className="cp-hero__sub">
                    Представляем ход строительства всех текущих объектов строительной компании «Авангард Стиль»
                </p>
            </div>

            <div className="cp-body">
                {PROJECTS.map((project) => (
                    <ProjectSection key={project.id} project={project} />
                ))}
            </div>

            <Footer />
        </div>
    );
}
