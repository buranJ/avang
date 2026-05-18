import "./nearby.css";
import n1 from '../../assets/n1.png'
import n2 from '../../assets/n2.png'
import n3 from '../../assets/n3.png'

const places = [
    {
        name: "Панорама города Бишкек",
        time: "2 мин",
        img: n1,
    },
    {
        name: "Silk Road International School",
        time: "2 мин",
        img: n3,
    },
    {
        name: "American University of Central Asia",
        time: "2 мин",
        img: n2,
    },
];

export default function Nearby() {
    return (
        <section className="nearby">
            <h2 className="nearby__title">Что интересного рядом</h2>

            {/* Desktop */}
            <div className="nearby__list">
                {places.map((place, i) => (
                    <div key={i} className="nearby__item">
                        <div className="nearby__item-header">
                            <span className="nearby__dot" />
                            <p className="nearby__name">{place.name}</p>
                        </div>
                        <div className="nearby__img-wrap">
                            <img src={place.img} alt={place.name} className="nearby__img" />
                            <span className="nearby__badge">{place.time}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile */}
            <div className="nearby__mobile">
                <div className="nearby__mobile-inner">
                    {/* SVG змейка */}
                    <img src="/line.svg" alt="" className="nearby__snake" />

                    <div className="nearby__mobile-items">
                        {places.map((place, i) => (
                            <div
                                key={i}
                                className={`nearby__mobile-item ${i % 2 === 1 ? "nearby__mobile-item--right" : ""}`}
                            >
                                <div className="nearby__item-header">
                                    <span className="nearby__dot" />
                                    <p className="nearby__name">{place.name}</p>
                                </div>
                                <div className="nearby__img-wrap nearby__img-wrap--square">
                                    <img src={place.img} alt={place.name} className="nearby__img" />
                                    <span className="nearby__badge">{place.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}