import "./footer.css";

const AvangardLogo = ({ color, category }) => (
    <svg width="210" height="52" viewBox="0 0 210 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stylised "A" — left triangle body */}
        <polygon points="0,44 18,4 36,44" fill="none" stroke={color} strokeWidth="4.5" strokeLinejoin="round" />
        {/* Crossbar */}
        <line x1="7" y1="32" x2="29" y2="32" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
        {/* Diagonal decorative stroke extending below-left */}
        <line x1="0" y1="44" x2="0" y2="50" stroke={color} strokeWidth="4.5" strokeLinecap="round" />

        {/* Horizontal rule after the A */}
        <line x1="42" y1="24" x2="64" y2="24" stroke={color} strokeWidth="1.8" />

        {/* Category label — top right */}
        <text
            x="68" y="22"
            fontFamily="Inter, Montserrat, system-ui, sans-serif"
            fontSize="9"
            fontWeight="600"
            letterSpacing="1.5"
            fill={color}
        >
            {category}
        </text>

        {/* "Avangard" — large wordmark */}
        <text
            x="42" y="46"
            fontFamily="Inter, Montserrat, system-ui, sans-serif"
            fontSize="26"
            fontWeight="700"
            letterSpacing="-0.3"
            fill={color}
        >
            Avangard
        </text>
    </svg>
);

const logos = [
    { color: "#1056BF", category: "STYLE",           line1: "Строительная компания",  line2: "«Авангард Стиль»" },
    { color: "#555F6D", category: "BUSINESS CENTRE", line1: "Бизнес Центр",            line2: "«Авангард Бизнес Центр»" },
    { color: "#C0271A", category: "SPORT CLUB",      line1: "Спортивный клуб",         line2: "«Авангард Спортивный Клуб»" },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">

                {/* ── Колонка 1: Брендинг ── */}
                <div className="footer__logos">
                    {logos.map((l) => (
                        <div className="footer__logo-block" key={l.category}>
                            <AvangardLogo color={l.color} category={l.category} />
                            <p className="footer__logo-text">
                                {l.line1}<br />
                                <strong>{l.line2}</strong>
                            </p>
                        </div>
                    ))}
                </div>

                {/* ── Колонка 2: Меню ── */}
                <div className="footer__col">
                    <h3 className="footer__title">Меню</h3>
                    <nav className="footer__links">
                        {["О нас", "Продажа", "Бизнес центр", "Фитнес клуб", "Live"].map((item) => (
                            <a href="/" key={item} className="footer__link">{item}</a>
                        ))}
                    </nav>
                </div>

                {/* ── Колонка 3: Полезное + подписка ── */}
                <div className="footer__col">
                    <h3 className="footer__title">Полезное</h3>
                    <nav className="footer__links">
                        {["Вакансии", "Закупки", "СМИ о нас", "Контакты"].map((item) => (
                            <a href="/" key={item} className="footer__link">{item}</a>
                        ))}
                    </nav>
                    <form className="footer__subscribe" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Email" />
                        <button type="submit">›</button>
                    </form>
                    <p className="footer__subscribe-text">Подписаться на рассылку</p>
                </div>

                {/* ── Колонка 4: Адрес ── */}
                <div className="footer__col">
                    <h3 className="footer__title">Адрес</h3>
                    <div className="footer__address-list">
                        <p>Отдел продаж «Елисейские поля»:<br /><span>Токомбаева 15/2</span></p>
                        <p>Отдел продаж ГМ «Глобус»:<br /><span>Токомбаева 53/1</span></p>
                        <p>БЦ «Авангард»:<br /><span>Токтогула 125/1</span></p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
