import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const AvangardLogo = () => (
    <svg width="130" height="42" viewBox="0 0 147 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,38 14,10 28,38" fill="none" stroke="white" strokeWidth="2.5" />
        <line x1="6" y1="30" x2="22" y2="30" stroke="white" strokeWidth="2.5" />
        <text x="31" y="36" fontFamily="'Georgia', serif" fontSize="22" fontWeight="700" fill="white" letterSpacing="1">vangard</text>
        <text x="31" y="16" fontFamily="'Georgia', serif" fontSize="8" fontWeight="400" fill="#8ab4d4" letterSpacing="3">STYLE</text>
    </svg>
);

const ChevronRight = () => (
    <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
        <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const navItems = [
    {
        label: "О нас", hasDropdown: true,
        dropdown: [
            { label: "О нас" },
            { label: "Техническая база" },
            { label: "Реализованные проекты" },
            { label: "Новости", to: "/news" },
            { label: "Видео" },
        ],
    },
    {
        label: "Объекты", hasDropdown: true,
        dropdown: [
            { label: "Легенда" },
            { label: "Tamchy Resort" },
            { label: "Салкын Top II" },
            { label: "Panorama Park" },
            { label: "Европа" },
            { label: "Москва сити" },
            { label: "Москва" },
            { label: "Елисейские поля" },
            { label: "Динамика строительства", to: "/construction-progress" },
            { label: "Все объекты", to: "/forever" },
        ],
    },
    { label: "Бизнес центр", hasDropdown: false },
    { label: "Фитнес клуб", hasDropdown: false },
    { label: "Live", hasDropdown: false },
    {
        label: "3D Тур", hasDropdown: true,
        dropdown: [
            { label: "Тур по объектам", hasSubMenu: true },
            { label: "Отдел продаж", hasSubMenu: true },
        ],
    },
    { label: "СМИ", hasDropdown: false },
    { label: "Контакты", hasDropdown: false },
];

export default function Header() {
    const [activeItem, setActiveItem] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState(null);

    return (
        <header className="header">
            {/* Hamburger — mobile only */}
            <button
                className="header__burger"
                onClick={() => setMobileOpen(true)}
                aria-label="Открыть меню"
            >
                <span /><span /><span />
            </button>

            <div className="header__logo">
                <img src="./src/assets/logo.svg" alt="logo" />
            </div>

            {/* Desktop nav */}
            <nav className="header__nav">
                {navItems.map((item) => (
                    <div
                        key={item.label}
                        className={`nav-item${item.hasDropdown ? " nav-item--with-dropdown" : ""}${activeItem === item.label ? " nav-item--active" : ""}`}
                        onMouseEnter={() => setActiveItem(item.label)}
                        onMouseLeave={() => setActiveItem(null)}
                    >
                        <span className="nav-item__label">{item.label}</span>
                        {item.hasDropdown && (
                            <span className="nav-item__chevron">›</span>
                        )}
                        {item.hasDropdown && activeItem === item.label && (
                            <div className="dropdown">
                                {item.dropdown.map((d) => (
                                    d.to ? (
                                        <Link
                                            key={d.label}
                                            to={d.to}
                                            className="dropdown__item dropdown__item--link"
                                        >
                                            <span>{d.label}</span>
                                        </Link>
                                    ) : (
                                        <div
                                            key={d.label}
                                            className={`dropdown__item${d.hasSubMenu ? " dropdown__item--submenu" : ""}`}
                                        >
                                            <span>{d.label}</span>
                                            {d.hasSubMenu && <ChevronRight />}
                                        </div>
                                    )
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>

            <button className="header__btn">Связаться</button>

            {/* Mobile menu overlay */}
            {mobileOpen && (
                <div className="mobile-menu">
                    <div className="mobile-menu__header">
                        <button
                            className="mobile-menu__close"
                            onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                            aria-label="Закрыть меню"
                        >
                            ✕
                        </button>
                        <div className="mobile-menu__logo">
                            <AvangardLogo />
                        </div>
                    </div>

                    <nav className="mobile-menu__nav">
                        {navItems.map((item) => (
                            <div key={item.label} className="mobile-nav-item">
                                <div
                                    className="mobile-nav-item__row"
                                    onClick={() => item.hasDropdown
                                        ? setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                                        : null
                                    }
                                >
                                    <span className="mobile-nav-item__label">{item.label}</span>
                                    {item.hasDropdown && (
                                        <ChevronRight />
                                    )}
                                </div>
                                {item.hasDropdown && mobileExpanded === item.label && (
                                    <div className="mobile-nav-item__dropdown">
                                        {item.dropdown.map((d) => (
                                            <div key={d.label} className="mobile-nav-item__sub">
                                                {d.label}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
