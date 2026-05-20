import "./aboutComplex.css";

export default function AboutComplex() {
    return (
        <section className="about">
            <h2 className="about__title">О жилом комплексе</h2>
            <p className="about__subtitle">Нуркамал Жетикашкаева 10А</p>

            {/* Desktop */}
            <div className="about__content">
                <div className="about__left">
                    <p className="about__text">
                        Представьте идеальное утро в собственном уютном доме среди
                        живописной природы. Вы просыпаетесь и первое, что видите из окна
                        спальни – захватывающие виды на горы, озаренные первыми лучами
                        солнца.
                    </p>
                    <p className="about__text">
                        Насладившись потрясающим видом, Вы спускаетесь в просторную
                        гостиную. Высокие потолки, светлые стены и панорамное остекление
                        создают ощущение легкости и наполняют комнату воздухом и солнцем.
                    </p>
                    <div className="about__tags">
                        <button className="about__tag">1 комнатная - от 40м2</button>
                        <button className="about__tag">2 комнатная - от 70м2</button>
                        <button className="about__tag">3 комнатная - от 80м2</button>
                        <button className="about__tag">4 комнатная - от 90м2</button>
                    </div>
                </div>

                <div className="about__image-wrap">
                    <img src="/1.png" alt="Жилой комплекс" className="about__image" />
                    <div className="about__image-overlay">
                        <p className="about__address">Нуркамал Жетикашкаева 10А</p>
                        <div className="about__badges">
                            <span className="about__badge">13 блоков</span>
                            <span className="about__badge">151 квартира</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="about__mobile">
                {/* Ряд 1: текст слева + фото справа */}
                <div className="about__mobile-row">
                    <p className="about__text">
                        Представьте идеальное утро в собственном уютном доме среди
                        живописной природы. Вы просыпаетесь и первое, что видите из окна
                        спальни – захватывающие виды на горы, озаренные первыми лучами
                        солнца.
                    </p>
                    <div className="about__mobile-img-wrap about__mobile-img-wrap--right">
                        <img src="/1.png" alt="Жилой комплекс" className="about__mobile-img" />
                        <span className="about__mobile-badge">13 блоков</span>
                    </div>
                </div>

                {/* Ряд 2: фото слева + текст справа */}
                <div className="about__mobile-row">
                    <div className="about__mobile-img-wrap about__mobile-img-wrap--left">
                        <img src="/1.png" alt="Жилой комплекс" className="about__mobile-img" />
                        <span className="about__mobile-badge">151 квартира</span>
                    </div>
                    <p className="about__text about__text--right">
                        Насладившись потрясающим видом, Вы спускаетесь в просторную
                        гостиную. Высокие потолки, светлые стены и панорамное остекление
                        создают ощущение легкости и наполняют комнату воздухом и солнцем.
                    </p>
                </div>

                {/* Кнопки */}
                <div className="about__tags">
                    <button className="about__tag">1 комнатная - от 40м2</button>
                    <button className="about__tag">2 комнатная - от 70м2</button>
                    <button className="about__tag">3 комнатная - от 80м2</button>
                    <button className="about__tag">4 комнатная - от 90м2</button>
                </div>
            </div>
        </section>
    );
}