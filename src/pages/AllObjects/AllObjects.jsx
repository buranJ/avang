import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./AllObjects.css";

const ALL_OBJECTS = [
    {
        id: 1,
        name: "Forever",
        type: "Элитный жилой квартал",
        status: "building",
        statusLabel: "Строится",
        img: "/back.jpg",
        floors: "25+",
        apartments: "200+",
        year: "2026",
        to: "/forever",
    },
    {
        id: 2,
        name: 'КД "Panorama Park"',
        type: "Жилой комплекс",
        status: "building",
        statusLabel: "Строится",
        img: "/image (1).jpg",
        floors: "16",
        apartments: "240",
        year: "2025",
    },
    {
        id: 3,
        name: 'ЖК "Москва Сити"',
        type: "Жилой комплекс",
        status: "building",
        statusLabel: "Строится",
        img: "/back.jpg",
        floors: "18",
        apartments: "180",
        year: "2025",
    },
    {
        id: 4,
        name: 'ЖК "Европа"',
        type: "Жилой комплекс",
        status: "done",
        statusLabel: "Сдан",
        img: "/back (1).jpg",
        floors: "14",
        apartments: "156",
        year: "2022",
    },
    {
        id: 5,
        name: 'ЖД "Москва"',
        type: "Жилой дом",
        status: "done",
        statusLabel: "Сдан",
        img: "/image.jpg",
        floors: "12",
        apartments: "120",
        year: "2021",
    },
    {
        id: 6,
        name: "Салкын — Тор",
        type: "Жилой комплекс",
        status: "done",
        statusLabel: "Сдан",
        img: "/image.png",
        floors: "9",
        apartments: "90",
        year: "2020",
    },
    {
        id: 7,
        name: '"Елисейские поля"',
        type: "Жилой комплекс",
        status: "building",
        statusLabel: "Строится",
        img: "/image (2).jpg",
        floors: "20",
        apartments: "210",
        year: "2026",
    },
    {
        id: 8,
        name: "Легенда",
        type: "Жилой комплекс",
        status: "done",
        statusLabel: "Сдан",
        img: "/1.png",
        floors: "10",
        apartments: "100",
        year: "2019",
    },
    {
        id: 9,
        name: "Tamchy Resort",
        type: "Курортный комплекс",
        status: "building",
        statusLabel: "Строится",
        img: "/image (1).jpg",
        floors: "5",
        apartments: "80",
        year: "2025",
    },
];

const FILTERS = [
    { key: "all", label: "Все объекты" },
    { key: "building", label: "Строящиеся" },
    { key: "done", label: "Сданные" },
];

export default function AllObjects() {
    const [filter, setFilter] = useState("all");

    const visible = filter === "all"
        ? ALL_OBJECTS
        : ALL_OBJECTS.filter((o) => o.status === filter);

    return (
        <div className="ao-page">
            <Header />

            {/* ── Hero bar ── */}
            <div className="ao-hero">
                <div className="ao-hero__inner">
                    <p className="ao-hero__crumb">
                        <Link to="/" className="ao-hero__crumb-link">Главная</Link>
                        <span> / </span>
                        <span>Объекты</span>
                    </p>
                    <h1 className="ao-hero__title">Все объекты</h1>
                    <p className="ao-hero__sub">
                        {ALL_OBJECTS.length} проектов &mdash; от концепции до готового жилья
                    </p>
                </div>
            </div>

            {/* ── Main content ── */}
            <div className="ao-body">

                {/* Filters */}
                <div className="ao-filters">
                    {FILTERS.map((f) => (
                        <button
                            key={f.key}
                            className={`ao-filter${filter === f.key ? " ao-filter--active" : ""}`}
                            onClick={() => setFilter(f.key)}
                        >
                            {f.label}
                            <span className="ao-filter__count">
                                {f.key === "all"
                                    ? ALL_OBJECTS.length
                                    : ALL_OBJECTS.filter((o) => o.status === f.key).length}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="ao-grid">
                    {visible.map((obj) => (
                        <article key={obj.id} className="ao-card">
                            {/* Image */}
                            <div className="ao-card__img-wrap">
                                <img src={obj.img} alt={obj.name} className="ao-card__img" />
                                <span className={`ao-card__status ao-card__status--${obj.status}`}>
                                    {obj.statusLabel}
                                </span>
                                {obj.to && (
                                    <span className="ao-card__featured">Элитный</span>
                                )}
                            </div>

                            {/* Body */}
                            <div className="ao-card__body">
                                <p className="ao-card__type">{obj.type}</p>
                                <h3 className="ao-card__name">{obj.name}</h3>

                                <div className="ao-card__specs">
                                    <div className="ao-card__spec">
                                        <span className="ao-card__spec-val">{obj.floors}</span>
                                        <span className="ao-card__spec-key">этажей</span>
                                    </div>
                                    <div className="ao-card__spec-sep" />
                                    <div className="ao-card__spec">
                                        <span className="ao-card__spec-val">{obj.apartments}</span>
                                        <span className="ao-card__spec-key">квартир</span>
                                    </div>
                                    <div className="ao-card__spec-sep" />
                                    <div className="ao-card__spec">
                                        <span className="ao-card__spec-val">{obj.year}</span>
                                        <span className="ao-card__spec-key">год</span>
                                    </div>
                                </div>

                                {obj.to ? (
                                    <Link to={obj.to} className="ao-card__btn">
                                        О проекте
                                    </Link>
                                ) : (
                                    <button className="ao-card__btn">О проекте</button>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
