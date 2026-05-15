import "./inNumbers.css";

const leftStats = [
    { value: "2,5 ГА", label: "Площадь участка" },
    { value: "207", label: "Парковочных мест" },
    { value: "13", label: "Малоэтажных блоков" },
    { value: "30%", label: "Площадь застройки" },
];

const rightStats = [
    { value: "151", label: "Количество квартир" },
    { value: "1,67 ГА", label: "Площадь двора" },
    { value: "0,6 ГА", label: "Площадь озеленения" },
    { value: "4", label: "Детских площадок" },
];

export default function InNumbers() {
    return (
        <section className="numbers">
            <h2 className="numbers__title">"Panorama Park" в цифрах</h2>

            {/* Desktop */}
            <div className="numbers__content">
                <div className="numbers__col numbers__col--left">
                    {leftStats.map((stat, i) => (
                        <div key={i} className="numbers__card">
                            <span className="numbers__value">{stat.value}</span>
                            <span className="numbers__label">{stat.label}</span>
                        </div>
                    ))}
                </div>

                <div className="numbers__image-wrap">
                    <img src="/1.png" alt="Panorama Park" className="numbers__image" />
                </div>

                <div className="numbers__col numbers__col--right">
                    {rightStats.map((stat, i) => (
                        <div key={i} className="numbers__card numbers__card--right">
                            <span className="numbers__value">{stat.value}</span>
                            <span className="numbers__label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile */}
            <div className="numbers__mobile">
                {/* Ряд 1: левые карточки + фото */}
                <div className="numbers__row-1">
                    <div className="numbers__col numbers__col--left">
                        {leftStats.map((stat, i) => (
                            <div key={i} className="numbers__card">
                                <span className="numbers__value">{stat.value}</span>
                                <span className="numbers__label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="numbers__image-wrap numbers__image-wrap--right">
                        <img src="/1.png" alt="Panorama Park" className="numbers__image" />
                    </div>
                </div>

                {/* Ряд 2: фото + правые карточки */}
                <div className="numbers__row-2">
                    <div className="numbers__image-wrap numbers__image-wrap--left">
                        <img src="/1.png" alt="Panorama Park" className="numbers__image" />
                    </div>
                    <div className="numbers__col numbers__col--right">
                        {rightStats.map((stat, i) => (
                            <div key={i} className="numbers__card numbers__card--right">
                                <span className="numbers__value">{stat.value}</span>
                                <span className="numbers__label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}