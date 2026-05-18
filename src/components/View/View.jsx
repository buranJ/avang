import { useState } from "react";
import "./view.css";
import v1 from "../../assets/v1.png"
import v2 from "../../assets/v2.png"
import v3 from "../../assets/v3.png"
import v4 from "../../assets/v4.png"
import v5 from "../../assets/v5.png"


const images = [
    { src: "/image (1).jpg", alt: "Вид 1" },
    { src: "/back.jpg", alt: "Вид 2" },
    { src: "/back (1).jpg", alt: "Вид 3" },
    { src: "/image.jpg", alt: "Вид 4" },
    { src: "/image (2).jpg", alt: "Вид 5" },
];

export default function View() {
    const [lightbox, setLightbox] = useState(null);

    return (
        <section className="view">
            <h2 className="view__title">Общий вид зданий</h2>
            <p className="view__subtitle">Нажмите для увеличения</p>

            <div className="view__grid">
                {/* Левая колонка: большое + нижнее */}
                <div className="view__left-col">
                    <div className="view__img-wrap view__img--large-left" onClick={() => setLightbox(images[0].src)}>
                        <img src={v1} />
                    </div>
                    <div className="view__img-wrap view__img--bottom-left" onClick={() => setLightbox(images[2].src)}>
                        <img src={v3} />
                    </div>
                </div>

                {/* Правая колонка: широкое + два маленьких */}
                <div className="view__right-col">
                    <div className="view__img-wrap view__img--wide" onClick={() => setLightbox(images[1].src)}>
                        <img src={v2} />
                    </div>
                    <div className="view__right-bottom">
                        <div className="view__img-wrap view__img--small" onClick={() => setLightbox(images[3].src)}>
                            <img src={v4} />
                        </div>
                        <div className="view__img-wrap view__img--small" onClick={() => setLightbox(images[4].src)}>
                            <img src={v5} />
                        </div>
                    </div>
                </div>
            </div>

            {lightbox && (
                <div className="view__lightbox" onClick={() => setLightbox(null)}>
                    <img src={lightbox} alt="Увеличенное изображение" />
                </div>
            )}
        </section>
    );
}