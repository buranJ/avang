import { useEffect, useRef, useState } from "react";
import "./hero.css";

function useCountUp(target, duration = 2500, started = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!started) return;
        let startTime = null;
        let raf;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(eased * target));
            if (progress < 1) raf = requestAnimationFrame(step);
            else setCount(target);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [started, target, duration]);

    return count;
}

export default function Hero() {
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStarted(true); },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const year = useCountUp(1998, 2500, started);
    const objects = useCountUp(155, 2500, started);
    const area = useCountUp(700, 2500, started);

    return (
        <section className="hero" ref={ref}>
            <div className="hero__bg" />

            <div className="hero__stats">

                <div className="hero__stat">
                    <span className="hero__stat-number">SINCE {year}</span>
                    <span className="hero__stat-label">Доверие, заслуженное<br />годами</span>
                </div>
                


                <div className="hero__stat">
                    <span className="hero__stat-number">&gt;{objects}</span>
                    <span className="hero__stat-label">Построили<br />объектов</span>
                </div>


                <div className="hero__stat">
                    <span className="hero__stat-number">&gt;{area}тыс м<sup>2</sup></span>
                    <span className="hero__stat-label">Введено в<br />эксплуатацию</span>
                </div>

            </div>
        </section>
    );
}