import { useState } from "react";
import "./header.css";

const AvangardLogo = () => (
    <svg width="147" height="47" viewBox="0 0 147 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,38 14,10 28,38" fill="none" stroke="white" strokeWidth="2.5" />
        <line x1="6" y1="30" x2="22" y2="30" stroke="white" strokeWidth="2.5" />
        <text x="31" y="36" fontFamily="'Georgia', serif" fontSize="22" fontWeight="700" fill="white" letterSpacing="1">
            vangard
        </text>
        <text x="31" y="16" fontFamily="'Georgia', serif" fontSize="8" fontWeight="400" fill="#8ab4d4" letterSpacing="3">
            STYLE
        </text>
    </svg>
);

const ChevronRight = () => (
    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const navItems = [
    {
        label: "О нас",
        hasDropdown: true,
        dropdown: [
            { label: "О нас" },
            { label: "Техническая база" },
            { label: "Реализованные проекты" },
            { label: "Новости" },
            { label: "Видео" },
        ],
    },
    {
        label: "Объекты",
        hasDropdown: true,
        dropdown: [
            { label: "Легенда" },
            { label: "Tamchy Resort" },
            { label: "Салкын Top II" },
            { label: "Panorama Park" },
            { label: "Европа" },
            { label: "Москва сити" },
            { label: "Москва" },
            { label: "Елисейские поля" },
            { label: "Динамика строительства" },
            { label: "Все объекты" },
        ],
    },
    { label: "Бизнес центр", hasDropdown: false },
    { label: "Фитнес клуб", hasDropdown: false },
    { label: "Live", hasDropdown: false },
    {
        label: "3D тур",
        hasDropdown: true,
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

    return (
        <header className="header">
            <div className="header__logo">
                <img src="./src/assets/logo.svg" alt="logo" />
            </div>

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
                        <div className="nav-item__underline" />

                        {item.hasDropdown && item.dropdown && activeItem === item.label && (
                            <div className="dropdown">
                                {item.dropdown.map((d) => (
                                    <div key={d.label} className={`dropdown__item${d.hasSubMenu ? " dropdown__item--submenu" : ""}`}>
                                        <span>{d.label}</span>
                                        {d.hasSubMenu && <ChevronRight />}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>

            <button className="header__btn">Связаться</button>
        </header>
    );
}