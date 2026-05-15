import "./advantages.css";

const advantages = [
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="8" width="4" height="32" rx="1" fill="#020b1a" />
                <rect x="12" y="8" width="4" height="32" rx="1" fill="#020b1a" />
                <rect x="20" y="8" width="4" height="32" rx="1" fill="#020b1a" />
                <rect x="28" y="8" width="4" height="32" rx="1" fill="#020b1a" />
                <rect x="36" y="8" width="4" height="32" rx="1" fill="#020b1a" />
                <rect x="4" y="6" width="36" height="4" rx="1" fill="#020b1a" />
                <rect x="4" y="38" width="36" height="4" rx="1" fill="#020b1a" />
            </svg>
        ),
        label: "Закрытый двор",
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="8" fill="#020b1a" />
                <path d="M14 24c0-2 1-4 2-5.5" stroke="#020b1a" strokeWidth="3" strokeLinecap="round" />
                <path d="M34 24c0-2-1-4-2-5.5" stroke="#020b1a" strokeWidth="3" strokeLinecap="round" />
                <path d="M8 24c0-4 2-8 5-11" stroke="#020b1a" strokeWidth="3" strokeLinecap="round" />
                <path d="M40 24c0-4-2-8-5-11" stroke="#020b1a" strokeWidth="3" strokeLinecap="round" />
            </svg>
        ),
        label: "Шумоизоляция",
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="20" width="36" height="16" rx="3" fill="#020b1a" />
                <circle cx="14" cy="36" r="5" fill="white" stroke="#020b1a" strokeWidth="3" />
                <circle cx="34" cy="36" r="5" fill="white" stroke="#020b1a" strokeWidth="3" />
                <path d="M6 26L14 14h20l8 12" stroke="#020b1a" strokeWidth="3" strokeLinejoin="round" />
            </svg>
        ),
        label: "Подземный паркинг",
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="16" r="8" fill="#020b1a" />
                <path d="M8 40c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="#020b1a" strokeWidth="3" strokeLinecap="round" />
            </svg>
        ),
        label: "Спортивная площадка",
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="14" y="4" width="20" height="36" rx="3" fill="#020b1a" />
                <rect x="18" y="8" width="12" height="4" rx="1" fill="white" />
                <rect x="18" y="16" width="12" height="4" rx="1" fill="white" />
                <rect x="18" y="24" width="12" height="4" rx="1" fill="white" />
                <rect x="10" y="40" width="28" height="4" rx="1" fill="#020b1a" />
            </svg>
        ),
        label: "Бесшумные лифты",
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 6C16 6 10 12 10 20c0 10 14 22 14 22s14-12 14-22c0-8-6-14-14-14z" fill="#020b1a" />
                <circle cx="24" cy="20" r="5" fill="white" />
            </svg>
        ),
        label: "Газификация",
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="6" fill="#020b1a" />
                <path d="M24 10v4M24 34v4M10 24h4M34 24h4" stroke="#020b1a" strokeWidth="3" strokeLinecap="round" />
                <path d="M14.9 14.9l2.8 2.8M30.3 30.3l2.8 2.8M14.9 33.1l2.8-2.8M30.3 17.7l2.8-2.8" stroke="#020b1a" strokeWidth="3" strokeLinecap="round" />
            </svg>
        ),
        label: "Продуманная система вентиляции",
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 40V28l8-8 8 8 8-12 8 12v12H8z" fill="#020b1a" />
                <circle cx="38" cy="14" r="5" fill="#020b1a" />
            </svg>
        ),
        label: "Детские площадки",
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="16" height="16" rx="2" fill="#020b1a" />
                <rect x="26" y="6" width="16" height="16" rx="2" fill="#020b1a" />
                <rect x="6" y="26" width="16" height="16" rx="2" fill="#020b1a" />
                <rect x="26" y="26" width="16" height="16" rx="2" fill="#020b1a" />
            </svg>
        ),
        label: "Монолитно-каркасное строительство",
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="14" height="18" rx="2" fill="#020b1a" />
                <rect x="26" y="8" width="14" height="18" rx="2" fill="#020b1a" />
                <rect x="8" y="30" width="32" height="10" rx="2" fill="#020b1a" />
            </svg>
        ),
        label: "Удобная планировка квартир",
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 8c-2 6-8 8-8 16a8 8 0 0016 0c0-8-6-10-8-16z" fill="#020b1a" />
                <path d="M18 34c0 3.3 2.7 6 6 6s6-2.7 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        label: "Экологически чистый район",
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="10" width="28" height="20" rx="3" fill="#020b1a" />
                <path d="M34 18l8-6v16l-8-6v-4z" fill="#020b1a" />
                <rect x="10" y="30" width="8" height="8" rx="1" fill="#020b1a" />
            </svg>
        ),
        label: "Круглосуточное видеонаблюдение",
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="18" height="18" rx="2" fill="#020b1a" />
                <rect x="26" y="4" width="18" height="18" rx="2" fill="#020b1a" />
                <rect x="4" y="26" width="18" height="18" rx="2" fill="#020b1a" />
                <rect x="26" y="26" width="18" height="18" rx="2" fill="#020b1a" />
                <rect x="10" y="10" width="6" height="6" rx="1" fill="white" />
                <rect x="32" y="10" width="6" height="6" rx="1" fill="white" />
                <rect x="10" y="32" width="6" height="6" rx="1" fill="white" />
                <rect x="32" y="32" width="6" height="6" rx="1" fill="white" />
            </svg>
        ),
        label: "Мультифункциональный стеклопакет",
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 6L8 14v10c0 10 7 19 16 22 9-3 16-12 16-22V14L24 6z" fill="#020b1a" />
                <path d="M16 24l6 6 10-10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        label: "Автономное газовое отопление",
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="36" height="36" rx="3" stroke="#020b1a" strokeWidth="3" fill="none" />
                <rect x="6" y="6" width="17" height="17" rx="1" fill="#020b1a" />
                <rect x="25" y="25" width="17" height="17" rx="1" fill="#020b1a" />
                <rect x="25" y="6" width="17" height="17" rx="1" stroke="#020b1a" strokeWidth="2" fill="none" />
                <rect x="6" y="25" width="17" height="17" rx="1" stroke="#020b1a" strokeWidth="2" fill="none" />
            </svg>
        ),
        label: "Алюминиевый профиль окон теплой серии",
    },
    {
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4L6 12v12c0 12 8 22 18 26 10-4 18-14 18-26V12L24 4z" stroke="#020b1a" strokeWidth="3" fill="none" />
                <circle cx="24" cy="24" r="6" fill="#020b1a" />
            </svg>
        ),
        label: "Система контроля доступа и безопасности",
    },
];

export default function Advantages() {
    return (
        <section className="advantages">
            <h2 className="advantages__title">Преимущества</h2>
            <div className="advantages__grid">
                {advantages.map((item, i) => (
                    <div key={i} className="advantages__item">
                        <div className="advantages__icon">{item.icon}</div>
                        <p className="advantages__label">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}