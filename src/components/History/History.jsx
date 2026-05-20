import { useState, useEffect } from "react";

function useVisibleCount(desktop = 3, mobile = 1, breakpoint = 640) {
    const [count, setCount] = useState(
        typeof window !== "undefined" && window.innerWidth <= breakpoint ? mobile : desktop
    );
    useEffect(() => {
        const handler = () =>
            setCount(window.innerWidth <= breakpoint ? mobile : desktop);
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, [desktop, mobile, breakpoint]);
    return count;
}
import "./History.css";

const BASE = "https://avangardstyle.kg";

/* ── Awards carousel data ── */
const awards = [
    { id: "a1", img: `${BASE}/media/images/gramotas/image_5.png`, label: "Почётная грамота заместителю генерального директора Абыкаеву К.К." },
    { id: "a2", img: `${BASE}/media/images/gramotas/2.webp`, label: "Диплом почётного члена Союза Архитекторов Кыргызской Республики" },
    { id: "a3", img: `${BASE}/media/images/gramotas/image_6.png`, label: "Почётная грамота в знак особых услуг перед государством Кокомбаеву А.Б." },
    { id: "a4", img: `${BASE}/media/images/gramotas/n4.png`, label: "Почётная грамота №4" },
    { id: "a5", img: `${BASE}/media/images/gramotas/n5.png`, label: "Почётная грамота №5" },
    { id: "a6", img: `${BASE}/media/images/gramotas/n6.png`, label: "Почётная грамота №6" },
    { id: "a7", img: `${BASE}/media/images/gramotas/n7.png`, label: "Почётная грамота №7" },
    { id: "a8", img: `${BASE}/media/images/gramotas/n8.png`, label: "Почётная грамота №8" },
    { id: "a9", img: `${BASE}/media/images/gramotas/n9.png`, label: "Почётная грамота №9" },
    { id: "a10", img: `${BASE}/media/images/gramotas/n10.png`, label: "Почётная грамота №10" },
    { id: "a11", img: `${BASE}/media/images/gramotas/n11.png`, label: "Почётная грамота №11" },
    { id: "a12", img: `${BASE}/media/images/gramotas/n12.png`, label: "Почётная грамота №12" },
    { id: "a13", img: `${BASE}/media/images/gramotas/n13.png`, label: "Почётная грамота №13" },
    { id: "a14", img: `${BASE}/media/images/gramotas/%D1%8214.png`, label: "Почётная грамота №14" },
    { id: "a15", img: `${BASE}/media/images/gramotas/n15.png`, label: "Почётная грамота №15" },
    { id: "a16", img: `${BASE}/media/images/gramotas/n16.png`, label: "Почётная грамота №16" },
];

/* ── Licenses carousel data ── */
const licenses = [
    { id: "l1", img: `${BASE}/media/images/licence/36720507-5409-4B6C-8A65-4871ADE77975.png`, code: "КРЦ-2 №02000 ОТ 03.02.2008 Г" },
    { id: "l2", img: `${BASE}/media/images/licence/0D242907-9675-4FD7-A52A-42005034D0D6.png`, code: "ПРИЛОЖЕНИЕ К КРЦ-2 №02000" },
    { id: "l3", img: `${BASE}/media/images/licence/61CC51A8-9C2C-4040-A8F1-A07D9D01104B.png`, code: "ЭПС №02556 ОТ 03.01.2009 Г" },
];

/* ── Certificates carousel data ── */
const certs = [
    { id: "c1", img: `${BASE}/media/images/licence/1.png`, label: "Сертификат №1" },
    { id: "c2", img: `${BASE}/media/images/licence/2-1.jpg`, label: "Сертификат №2" },
    { id: "c3", img: `${BASE}/media/images/licence/3-1.jpg`, label: "Сертификат №3" },
    { id: "c4", img: `${BASE}/media/images/licence/4-1.jpg`, label: "Сертификат №4" },
    { id: "c5", img: `${BASE}/media/images/licence/5-1.jpg`, label: "Сертификат №5" },
    { id: "c6", img: `${BASE}/media/images/licence/6-1.jpg`, label: "Сертификат №6" },
    { id: "c7", img: `${BASE}/media/images/licence/7-1.jpg`, label: "Сертификат №7" },
    { id: "c8", img: `${BASE}/media/images/licence/8-1.jpg`, label: "Сертификат №8" },
    { id: "c9", img: `${BASE}/media/images/licence/9-1.jpg`, label: "Сертификат №9" },
    { id: "c10", img: `${BASE}/media/images/licence/10-1.jpg`, label: "Сертификат №10" },
    { id: "c11", img: `${BASE}/media/images/licence/11-1.jpg`, label: "Сертификат №11" },
    { id: "c12", img: `${BASE}/media/images/licence/12-1.jpg`, label: "Сертификат №12" },
    { id: "c13", img: `${BASE}/media/images/licence/13-1.jpg`, label: "Сертификат №13" },
    { id: "c14", img: `${BASE}/media/images/licence/14-1.jpg`, label: "Сертификат №14" },
    { id: "c15", img: `${BASE}/media/images/licence/15-1.jpg`, label: "Сертификат №15" },
    { id: "c16", img: `${BASE}/media/images/licence/16-1.jpg`, label: "Сертификат №16" },
    { id: "c17", img: `${BASE}/media/images/licence/17.jpg`, label: "Сертификат №17" },
    { id: "c18", img: `${BASE}/media/images/licence/18_1.jpg`, label: "Сертификат №18" },
    { id: "c19", img: `${BASE}/media/images/licence/19.jpg`, label: "Сертификат №19" },
    { id: "c20", img: `${BASE}/media/images/licence/20_1.jpg`, label: "Сертификат №20" },
    { id: "c21", img: `${BASE}/media/images/licence/Setrifikat-1.jpg`, label: "Сертификат №21" },
];

const achievementsList = [
    "«Заслуженный строитель Кыргызской Республики» 2020 год",
    "Диплом почётного члена Союза архитекторов Кыргызской Республики",
    "Награда «Золотой Ягуар» за безупречную репутацию в бизнесе",
    "Почётная грамота «Лучший предприниматель года 2022»",
    "Почётный знак за признание особых услуг перед государством",
    "Выбор года «Строительная компания № 1 в Кыргызской Республике» 2012 и 2016 года",
];

const certSpecialists = [
    "Специалисты строительства инженерных сетей и систем;",
    "Специалисты по инженерным услугам;",
    "Специалисты монтажных работ;",
    "Специалисты по строительству дорог;",
    "Специалисты строительства;",
    "Специалисты строительства инженерных сетей и систем; электроснабжение;",
];

/* ── Generic Carousel ── */
function Carousel({ items, renderItem, visibleCount = 3 }) {
    const [start, setStart] = useState(0);
    const total = items.length;
    const canPrev = start > 0;
    const canNext = start + visibleCount < total;

    return (
        <div className="carousel">
            <button
                className={`carousel__arrow carousel__arrow--left${canPrev ? "" : " carousel__arrow--disabled"}`}
                onClick={() => canPrev && setStart((s) => s - 1)}
                aria-label="Назад"
            >
                ‹
            </button>

            <div className="carousel__track">
                {items.slice(start, start + visibleCount).map((item) => renderItem(item))}
            </div>

            <button
                className={`carousel__arrow carousel__arrow--right${canNext ? "" : " carousel__arrow--disabled"}`}
                onClick={() => canNext && setStart((s) => s + 1)}
                aria-label="Вперёд"
            >
                ›
            </button>
        </div>
    );
}

/* ── Document card (award / license / cert) ── */
function DocCard({ img, label, code }) {
    return (
        <div className="doc-card">
            <div className="doc-card__inner">
                <img
                    src={img}
                    alt={label || code || "документ"}
                    className="doc-card__photo"
                    loading="lazy"
                />
            </div>
            {label && <p className="doc-card__label">{label}</p>}
            {code && <p className="doc-card__code">{code}</p>}
        </div>
    );
}

export default function History() {
    const visibleCount = useVisibleCount(3, 1, 640);
    return (
        <section className="history">
            <div className="history__inner">

                {/* ══ TITLE ══ */}
                <h2 className="history__main-title">История компании</h2>

                {/* ══ BLOCK 1: Основана ══ */}
                <div className="history__block">
                    <h3 className="history__subtitle">
                        Основана в 1998 году, одна из старейших компаний Кыргызской Республики
                    </h3>

                    <p className="history__founded-intro">
                        За многолетнюю успешную работу «Авангард Стиль» удостоен множества заслуженных наград:
                    </p>

                    <div className="history__founded">
                        {/* badge */}
                        <div className="history__badge">
                            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="46" fill="#c8a86b" opacity="0.15" />
                                <circle cx="50" cy="50" r="40" fill="#c8a86b" opacity="0.25" />
                                <circle cx="50" cy="50" r="32" fill="#c8a86b" opacity="0.9" />
                                <text x="50%" y="38%" textAnchor="middle" dominantBaseline="middle" fontSize="9" fontWeight="700" fill="white" letterSpacing="1">ВЫБОР</text>
                                <text x="50%" y="52%" textAnchor="middle" dominantBaseline="middle" fontSize="9" fontWeight="700" fill="white" letterSpacing="1">ГОДА</text>
                                <text x="50%" y="66%" textAnchor="middle" dominantBaseline="middle" fontSize="8" fontWeight="500" fill="white">2016</text>
                                {[...Array(12)].map((_, i) => {
                                    const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
                                    const r1 = 44, r2 = 48;
                                    return (
                                        <line
                                            key={i}
                                            x1={50 + r1 * Math.cos(angle)} y1={50 + r1 * Math.sin(angle)}
                                            x2={50 + r2 * Math.cos(angle)} y2={50 + r2 * Math.sin(angle)}
                                            stroke="#c8a86b" strokeWidth="2"
                                        />
                                    );
                                })}
                            </svg>
                        </div>

                        {/* achievements list */}
                        <ul className="history__list">
                            {achievementsList.map((item, i) => (
                                <li key={i}>«{item.startsWith("«") ? item.slice(1) : item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Awards carousel */}
                    <Carousel
                        items={awards}
                        visibleCount={visibleCount}
                        renderItem={(item) => (
                            <DocCard key={item.id} img={item.img} label={item.label} />
                        )}
                    />
                </div>

                {/* ══ BLOCK 2: Лицензии ══ */}
                <div className="history__block">
                    <h3 className="history__subtitle history__subtitle--center">Лицензии</h3>
                    <p className="history__desc">Компания оказывает услуги на основании лицензий:</p>

                    <Carousel
                        items={licenses}
                        visibleCount={visibleCount}
                        renderItem={(item) => (
                            <DocCard key={item.id} img={item.img} code={item.code} />
                        )}
                    />
                </div>

                {/* ══ BLOCK 3: Сертификаты ══ */}
                <div className="history__block">
                    <h3 className="history__subtitle history__subtitle--center">Сертификаты</h3>
                    <p className="history__desc">
                        «Авангард Стиль» это команда сертифицированных профессионалов в
                        области строительства:
                    </p>
                    <ul className="history__cert-list">
                        {certSpecialists.map((s, i) => (
                            <li key={i}>{s}</li>
                        ))}
                    </ul>

                    <Carousel
                        items={certs}
                        visibleCount={visibleCount}
                        renderItem={(item) => (
                            <DocCard key={item.id} img={item.img} label={item.label} />
                        )}
                    />
                </div>

            </div>
        </section>
    );
}