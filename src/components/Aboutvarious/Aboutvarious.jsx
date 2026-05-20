import "./AboutVarious.css";

const waveStops = [
    {
        id: "w1",
        position: "left",
        text: "От несущего железобетонного и металлического каркаса до кровли",
    },
    {
        id: "w2",
        position: "left-low",
        text: "От ограждающих конструкций до внутренней отделки",
    },
    {
        id: "w3",
        position: "right-high",
        text: "От инженерных сетей до систем пожаробезопасности",
    },
    {
        id: "w4",
        position: "right",
        text: "От инновационных фасадных решений до благоустройства территорий",
    },
];

const partners = [
    "японская строительная компания «Ивата Чидзаки»",
    "корейская корпорация «Самсунг»",
    "итальянская компания «Италкир»",
    "американская фирма «Otis»",
    "турецкая фирма «Мусса-Акар»",
    "финская компания «Копе»",
    "и другие крупные компании из различных сфер и государств",
];

export default function AboutVarious() {
    return (
        <section className="av">
            <div className="av__inner">

                {/* ══ BLOCK 1: Профессиональные специалисты ══ */}
                <div className="av__block">
                    <h2 className="av__heading">Профессиональные специалисты</h2>
                    <p className="av__text av__text--center">
                        С нами работают специалисты из России, Казахстана, Турции, Кореи, Японии и других стран.
                    </p>
                    <p className="av__text av__text--center">
                        В число сотрудников «Авангард Стиль» входят{" "}
                        высококвалифицированные специалисты, инженеры и рабочие
                        различных специальностей. Занимаясь строительством зданий и сооружений самых разных
                        категорий сложности, они приобрели бесценный опыт, который позволяет нашей компании
                        возводить новые объекты в короткие сроки, при этом учитывая качество и надёжность,
                        что является важным критерием в нашей работе.
                    </p>
                </div>

                {/* ══ BLOCK 2: Лабораторная экспертиза ══ */}
                <div className="av__block">
                    <h2 className="av__heading">Лабораторная экспертиза</h2>
                    <p className="av__text av__text--center">
                        На всех этапах строительства проводится лабораторная экспертиза всех
                        используемых строительных материалов на соответствие качеству. Анализ проходят материалы:
                    </p>

                    {/* Wave diagram — десктоп */}
                    <div className="av__wave-wrap">
                        <svg
                            className="av__wave-svg av__wave-svg--desktop"
                            viewBox="0 0 1000 320"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            {/* волна: dot1(140,230) низ | dot2(370,110) верх | dot3(630,230) низ | dot4(860,110) верх */}
                            <path
                                d="M140 230 C220 230 290 110 370 110 C450 110 490 230 630 230 C710 230 780 110 860 110"
                                stroke="#1a3a6b" strokeWidth="2.5" strokeDasharray="11 8" fill="none"
                            />
                            <circle cx="140" cy="230" r="9" fill="#1a3a6b" />
                            <circle cx="370" cy="110" r="9" fill="#1a3a6b" />
                            <circle cx="630" cy="230" r="9" fill="#1a3a6b" />
                            <circle cx="860" cy="110" r="9" fill="#1a3a6b" />

                            {/* подпись 1 — центр по x=140 (dot1) */}
                            <text x="140" y="30" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="middle">От несущего</text>
                            <text x="140" y="48" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="middle">железобетонного и</text>
                            <text x="140" y="66" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="middle">металлического каркаса</text>
                            <text x="140" y="84" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="middle">до кровли</text>

                            {/* подпись 2 — под dot2, центр */}
                            <text x="370" y="252" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="middle">От ограждающих</text>
                            <text x="370" y="270" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="middle">конструкций до</text>
                            <text x="370" y="288" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="middle">внутренней отделки</text>

                            {/* подпись 3 — над dot3, центр */}
                            <text x="630" y="30" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="middle">От инженерных сетей</text>
                            <text x="630" y="48" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="middle">до систем</text>
                            <text x="630" y="66" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="middle">пожаробезопасности</text>

                            {/* подпись 4 — центр по x=860 (dot4) */}
                            <text x="860" y="252" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="middle">От инновационных</text>
                            <text x="860" y="270" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="middle">фасадных решений до</text>
                            <text x="860" y="288" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="middle">благоустройства</text>
                            <text x="860" y="306" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="middle">территорий</text>
                        </svg>

                        {/* Мобилка: вертикальная змейка */}
                        <svg
                            className="av__wave-svg av__wave-svg--mobile"
                            viewBox="0 0 400 820"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M80 150 C80 240 320 250 320 340 C320 430 80 440 80 530 C80 620 320 630 320 720"
                                stroke="#1a3a6b" strokeWidth="3" strokeDasharray="11 8" fill="none"
                            />
                            <circle cx="80" cy="150" r="9" fill="#1a3a6b" />
                            <circle cx="320" cy="340" r="9" fill="#1a3a6b" />
                            <circle cx="80" cy="530" r="9" fill="#1a3a6b" />
                            <circle cx="320" cy="720" r="9" fill="#1a3a6b" />

                            <text x="105" y="110" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="start">От несущего</text>
                            <text x="105" y="128" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="start">железобетонного и</text>
                            <text x="105" y="146" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="start">металлического каркаса</text>
                            <text x="105" y="164" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="start">до кровли</text>

                            <text x="295" y="296" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="end">От ограждающих</text>
                            <text x="295" y="314" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="end">конструкций до</text>
                            <text x="295" y="332" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="end">внутренней отделки</text>

                            <text x="105" y="490" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="start">От инженерных сетей</text>
                            <text x="105" y="508" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="start">до систем</text>
                            <text x="105" y="526" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="start">пожаробезопасности</text>

                            <text x="295" y="676" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="end">От инновационных</text>
                            <text x="295" y="694" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="end">фасадных решений до</text>
                            <text x="295" y="712" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="end">благоустройства</text>
                            <text x="295" y="730" fontFamily="Google Sans, Product Sans, sans-serif" fontSize="14" fontWeight="400" fill="#020b1a" textAnchor="end">территорий</text>
                        </svg>
                    </div>
                </div>

                {/* ══ BLOCK 3: Только качественные материалы ══ */}
                <div className="av__block">
                    <h2 className="av__heading">Только качественные материалы</h2>

                    <p className="av__text av__text--center">
                        Для успешной и качественной реализации всех направлений своей деятельности мы
                        используем только современные, эффективные строительные материалы,
                        учитываем опыт зарубежных строительных компаний, обращаемся к инновациям в
                        проектировании, строительстве, реконструкции и ремонте.
                    </p>

                    <p className="av__text av__text--center">
                        «Авангард Стиль» по праву гордится современной{" "}
                        технической базой: строительная техника,
                        транспортные средства, механизмы и оборудование, которые необходимы при возведении
                        объекта любой сложности. Техника, используемая нашей компанией, обладает высокой
                        производительностью, превосходными техническими характеристиками и достойными
                        эксплуатационными показателями, что свидетельствует об её высоком уровне.
                    </p>

                    {/* Partners */}
                    <div className="av__partners">
                        <h3 className="av__partners-title">Среди наших партнёров</h3>
                        <ul className="av__partners-list">
                            {partners.map((p, i) => (
                                <li key={i}>{p}</li>
                            ))}
                        </ul>
                    </div>

                    <p className="av__text av__text--center av__text--last">
                        Строительная компания «Авангард Стиль» реализует проекты с помощью новейших технологий и
                        всегда стремится к созданию лучших условий жизни. В настоящее время мы
                        занимаемся строительством многоэтажных жилых домов и объектов социально-культурного и
                        бытового назначения в городе Бишкек.
                    </p>
                </div>

            </div>
        </section>
    );
}