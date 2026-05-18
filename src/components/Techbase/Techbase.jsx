import "./techBase.css";

export default function TechBase() {
    return (
        <section className="techbase">
            <h2 className="techbase__title">Техническая база</h2>

            <div className="techbase__content">
                <p className="techbase__text">
                    «Авангард Стиль» по праву гордится своей технической базой, благодаря
                    которой строительство объектов не прекращается и объекты сдаются
                    вовремя. Только у «Авангард Стиль» есть собственный автопарк:
                </p>
                <ul className="techbase__list">
                    <li>Более 105 единиц техники</li>
                    <li>Собственный парк грузового авто общей грузоподъемностью до 100 000 тонн</li>
                    <li>11 высотных кранов</li>
                    <li>Собственный парк спецтехники: бетономешалки, экскаваторы, краны, катки, самосвалы и другие</li>
                </ul>
            </div>

            <div className="techbase__video-wrap">
                <iframe
                    className="techbase__video"
                    src="https://www.youtube.com/embed/LPYKRoOIpTo?si=Q_DnWZ25p5Ha-afo"
                />
                <span className="techbase__video-year">Видео 2019 года</span>
            </div>
        </section >
    );
}