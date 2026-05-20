import "./AboutCompany.css";

const BASE = "https://avangardstyle.kg";

const icons = {
    residential: <img src={`${BASE}/media/svg/about-1.svg`} alt="Многоэтажные жилые дома" />,
    cultural: <img src={`${BASE}/media/svg/das_4LYS3pW.svg`} alt="Объекты культурного назначения" />,
    commercial: <img src={`${BASE}/media/svg/das_R46HmVH.svg`} alt="Коммерческие объекты" />,
    bridges: <img src={`${BASE}/media/svg/das_Wa0OIfe.svg`} alt="Мосты, дороги и тоннели" />,
    reconstruction: <img src={`${BASE}/media/svg/das_JbNLVYt.svg`} alt="Реконструкция зданий" />,
    industrial: <img src={`${BASE}/media/svg/das_FBTyR4D.svg`} alt="Промышленные объекты" />,
};

const stats = [
    {
        id: "residential",
        icon: icons.residential,
        title: "Многоэтажные жилые дома",
        subtitle: "150 объектов",
    },
    {
        id: "cultural",
        icon: icons.cultural,
        title: "Объекты культурного и соц. назначения",
        subtitle: "15 объектов",
    },
    {
        id: "commercial",
        icon: icons.commercial,
        title: "Коммерческие объекты",
        subtitle: "15 объектов",
    },
    {
        id: "bridges",
        icon: icons.bridges,
        title: "Мосты, дороги и тоннели",
        subtitle: null,
    },
    {
        id: "reconstruction",
        icon: icons.reconstruction,
        title: "Реконструкция зданий",
        subtitle: null,
    },
    {
        id: "industrial",
        icon: icons.industrial,
        title: "Промышленные объекты",
        subtitle: null,
    },
];

const videos = [
    {
        id: "v1",
        thumbnail: "https://img.youtube.com/vi/nNrGZsEMVUM/hqdefault.jpg",
        title: "Это Нурбек. Авангард Стиль – Ваш надёжный застройщик",
        youtubeUrl: "https://www.youtube.com/watch?v=nNrGZsEMVUM",
    },
    {
        id: "v2",
        thumbnail: "https://img.youtube.com/vi/4E4jvSpwqb8/hqdefault.jpg",
        title: "Что такое «элитка»? Бишкек, Кыргызстан",
        youtubeUrl: "https://www.youtube.com/watch?v=4E4jvSpwqb8",
    },
];

const PlayIcon = () => (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="rgba(255,0,0,0.88)" />
        <polygon points="22,16 44,28 22,40" fill="white" />
    </svg>
);

const ShareIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="4" r="2" stroke="white" strokeWidth="1.4" />
        <circle cx="4" cy="9" r="2" stroke="white" strokeWidth="1.4" />
        <circle cx="14" cy="14" r="2" stroke="white" strokeWidth="1.4" />
        <line x1="6" y1="8" x2="12" y2="5" stroke="white" strokeWidth="1.4" />
        <line x1="6" y1="10" x2="12" y2="13" stroke="white" strokeWidth="1.4" />
    </svg>
);

export default function AboutCompany() {
    return (
        <section className="about-company">
            <div className="about-company__inner">

                {/* ── Title ── */}
                <h2 className="about-company__title">О нас</h2>

                {/* ── Description ── */}
                <p className="about-company__desc">
                    Строительная компания «Авангард Стиль» – лидер строительного рынка.
                    Мы строим жилые многоэтажные дома, коммерческие объекты, объекты культурного и
                    социального назначения, мосты, дороги, тоннели, промышленные объекты, делаем
                    реконструкцию зданий и сооружений.
                </p>

                {/* ── Stats Grid ── */}
                <div className="about-company__grid">
                    {stats.map((item) => (
                        <div className="about-company__card" key={item.id}>
                            <div className="about-company__card-icon">{item.icon}</div>
                            <p className="about-company__card-title">{item.title}</p>
                            {item.subtitle && (
                                <p className="about-company__card-sub">{item.subtitle}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* ── Videos ── */}
                <div className="about-company__videos">
                    {videos.map((video) => (
                        <a
                            key={video.id}
                            href={video.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-company__video-card"
                        >
                            <div className="about-company__video-thumb">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="about-company__video-img"
                                />
                                <div className="about-company__video-overlay">
                                    <PlayIcon />
                                </div>
                                <div className="about-company__video-top">
                                    <span className="about-company__yt-badge">
                                        <svg width="18" height="13" viewBox="0 0 18 13" fill="none">
                                            <rect width="18" height="13" rx="3" fill="#FF0000" />
                                            <polygon points="7,3 14,6.5 7,10" fill="white" />
                                        </svg>
                                        YouTube
                                    </span>
                                    <button className="about-company__share-btn" onClick={(e) => e.preventDefault()}>
                                        <ShareIcon />
                                        <span>Поделиться</span>
                                    </button>
                                </div>
                                <div className="about-company__video-bottom">
                                    <p className="about-company__video-title">{video.title}</p>
                                    <span className="about-company__yt-link">Посмотреть на YouTube →</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}