import { useEffect, useRef } from "react";

import "./Forever.css";

const WINDOWS = (() => {
    const rows = [];
    const cols = 7;
    const rowCount = 18;
    for (let r = 0; r < rowCount; r++) {
        for (let c = 0; c < cols; c++) {
            rows.push({
                x: 108 + c * 22,
                y: 80 + r * 22,
                lit: Math.random() > 0.3,
                delay: (Math.random() * 4).toFixed(2),
            });
        }
    }
    return rows;
})();

export default function Forever({ bg, badge, title, subtitle, btnText, variant }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const onMove = (e) => {
            const rect = el.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
            el.style.setProperty("--px", `${x}px`);
            el.style.setProperty("--py", `${y}px`);
        };
        el.addEventListener("mousemove", onMove);
        return () => el.removeEventListener("mousemove", onMove);
    }, []);

    return (
        <section className="forever" ref={sectionRef}>
            {/* ── Sky gradient ── */}
            <div className="forever__sky" style={bg ? { backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined} />

            {/* ── Stars ── */}
            {!bg && <div className="forever__stars" aria-hidden>
                {Array.from({ length: 60 }).map((_, i) => (
                    <span
                        key={i}
                        className="forever__star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 55}%`,
                            animationDelay: `${(Math.random() * 5).toFixed(2)}s`,
                            width: `${1 + Math.random() * 2}px`,
                            height: `${1 + Math.random() * 2}px`,
                        }}
                    />
                ))}
            </div>}

            {/* ── Architectural scene ── */}
            {!bg && <div className="forever__scene" aria-hidden>
                <svg
                    className="forever__svg"
                    viewBox="0 0 900 520"
                    preserveAspectRatio="xMidYMax meet"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        {/* Sunset glow on glass */}
                        <radialGradient id="sunGlow" cx="50%" cy="100%" r="60%">
                            <stop offset="0%" stopColor="#ffb347" stopOpacity="0.55" />
                            <stop offset="100%" stopColor="#ff6b35" stopOpacity="0" />
                        </radialGradient>

                        {/* Building face gradient */}
                        <linearGradient id="towerFace" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#c8c4ba" />
                            <stop offset="40%" stopColor="#f0ece3" />
                            <stop offset="100%" stopColor="#9a9590" />
                        </linearGradient>

                        <linearGradient id="towerShade" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#7a756d" />
                            <stop offset="100%" stopColor="#5a5550" />
                        </linearGradient>

                        <linearGradient id="wingFace" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#d4cfc6" />
                            <stop offset="100%" stopColor="#a8a39b" />
                        </linearGradient>

                        <linearGradient id="skyReflect" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#ff9f5a" stopOpacity="0.7" />
                            <stop offset="100%" stopColor="#ffd09a" stopOpacity="0.2" />
                        </linearGradient>

                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2.5" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%">
                            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#1a0f05" floodOpacity="0.5" />
                        </filter>

                        <clipPath id="sceneClip">
                            <rect width="900" height="520" />
                        </clipPath>
                    </defs>

                    <g clipPath="url(#sceneClip)">

                        {/* ── Distant city haze ── */}
                        <ellipse cx="450" cy="310" rx="420" ry="60" fill="#d4904a" opacity="0.18" />

                        {/* ── Left wing building ── */}
                        <rect x="30" y="220" width="140" height="300" fill="url(#wingFace)" />
                        <rect x="170" y="220" width="18" height="300" fill="url(#towerShade)" />
                        {/* Wing cornice */}
                        <rect x="24" y="214" width="152" height="10" fill="#b8b4ab" />
                        <rect x="22" y="208" width="156" height="8" fill="#ccc8bf" />
                        {/* Wing windows */}
                        {Array.from({ length: 6 }).map((_, r) =>
                            Array.from({ length: 4 }).map((_, c) => (
                                <rect key={`lw-${r}-${c}`} x={42 + c * 30} y={230 + r * 40} width={18} height={28}
                                    fill="#ffcf88" opacity={0.55 + Math.random() * 0.3} rx="1" />
                            ))
                        )}

                        {/* ── Right wing building ── */}
                        <rect x="730" y="240" width="150" height="280" fill="url(#wingFace)" />
                        <rect x="712" y="240" width="18" height="280" fill="url(#towerShade)" />
                        <rect x="724" y="234" width="162" height="10" fill="#b8b4ab" />
                        <rect x="722" y="228" width="166" height="8" fill="#ccc8bf" />
                        {Array.from({ length: 5 }).map((_, r) =>
                            Array.from({ length: 4 }).map((_, c) => (
                                <rect key={`rw-${r}-${c}`} x={742 + c * 30} y={250 + r * 42} width={18} height={28}
                                    fill="#ffcf88" opacity={0.5 + Math.random() * 0.35} rx="1" />
                            ))
                        )}

                        {/* ── Left mid building ── */}
                        <rect x="175" y="170" width="160" height="350" fill="url(#towerFace)" />
                        <rect x="335" y="170" width="20" height="350" fill="url(#towerShade)" />
                        <rect x="169" y="162" width="172" height="12" fill="#c0bbb2" />
                        <rect x="167" y="154" width="176" height="10" fill="#d4d0c7" />
                        {/* pilasters */}
                        {[185, 215, 245, 275, 305].map((x, i) => (
                            <rect key={i} x={x} y={162} width={6} height={358} fill="#e8e4db" opacity={0.6} rx="1" />
                        ))}
                        {Array.from({ length: 7 }).map((_, r) =>
                            Array.from({ length: 4 }).map((_, c) => (
                                <rect key={`lm-${r}-${c}`} x={186 + c * 34} y={175 + r * 44} width={20} height={30}
                                    fill="#ffd090" opacity={0.6} rx="1.5" />
                            ))
                        )}

                        {/* ── Right mid building ── */}
                        <rect x="565" y="185" width="155" height="335" fill="url(#towerFace)" />
                        <rect x="545" y="185" width="20" height="335" fill="url(#towerShade)" />
                        <rect x="559" y="177" width="167" height="12" fill="#c0bbb2" />
                        <rect x="557" y="169" width="171" height="10" fill="#d4d0c7" />
                        {[575, 605, 635, 665, 695].map((x, i) => (
                            <rect key={i} x={x} y={177} width={6} height={343} fill="#e8e4db" opacity={0.6} rx="1" />
                        ))}
                        {Array.from({ length: 7 }).map((_, r) =>
                            Array.from({ length: 4 }).map((_, c) => (
                                <rect key={`rm-${r}-${c}`} x={577 + c * 33} y={192 + r * 43} width={20} height={28}
                                    fill="#ffd090" opacity={0.6} rx="1.5" />
                            ))
                        )}

                        {/* ── MAIN TOWER base ── */}
                        <rect x="290" y="60" width="320" height="460" fill="url(#towerFace)" filter="url(#softShadow)" />
                        {/* Side shading */}
                        <rect x="610" y="60" width="28" height="460" fill="url(#towerShade)" />
                        <rect x="262" y="60" width="28" height="460" fill="#b0aba3" opacity="0.5" />

                        {/* Grand base plinth */}
                        <rect x="270" y="460" width="360" height="60" fill="#d8d4cb" />
                        <rect x="262" y="470" width="376" height="50" fill="#c8c4bb" />

                        {/* Cornice levels */}
                        <rect x="278" y="52" width="344" height="14" fill="#c4c0b7" />
                        <rect x="270" y="40" width="360" height="14" fill="#d8d4cb" />
                        <rect x="262" y="30" width="376" height="12" fill="#e0dcd3" />

                        {/* Pilasters on main tower */}
                        {[300, 340, 380, 420, 460, 500, 540, 580].map((x, i) => (
                            <rect key={i} x={x} y={30} width={8} height={462} fill="#f0ece3" opacity={0.55} rx="2" />
                        ))}

                        {/* Windows - main tower */}
                        {WINDOWS.map((w, i) => (
                            <rect
                                key={i}
                                x={w.x}
                                y={w.y}
                                width={14}
                                height={18}
                                fill={w.lit ? "#ffe0a0" : "#8a9db5"}
                                opacity={w.lit ? 0.85 : 0.35}
                                rx="1.5"
                                className={w.lit ? "forever__window--lit" : ""}
                                style={{ animationDelay: `${w.delay}s` }}
                            />
                        ))}

                        {/* Sunset reflection overlay on glass windows */}
                        <rect x="290" y="60" width="320" height="460" fill="url(#skyReflect)" opacity="0.25" />

                        {/* ── Stepped upper section ── */}
                        <rect x="320" y="10" width="260" height="52" fill="url(#towerFace)" />
                        <rect x="348" y="-20" width="204" height="34" fill="url(#towerFace)" />
                        <rect x="376" y="-46" width="148" height="30" fill="#e8e4db" />

                        {/* ── Decorative crown / spire base ── */}
                        <rect x="408" y="-80" width="84" height="36" fill="#ddd9d0" />
                        <rect x="420" y="-110" width="60" height="34" fill="#d0ccc3" />
                        <rect x="432" y="-138" width="36" height="32" fill="#c8c4bb" />

                        {/* Central spire */}
                        <polygon points="450,-220 440,-136 460,-136" fill="#b8b4ab" />
                        <polygon points="450,-220 442,-136 450,-136" fill="#d0ccc3" />
                        {/* Spire tip star */}
                        <circle cx="450" cy="-222" r="5" fill="#f0d080" opacity="0.9" filter="url(#glow)" />

                        {/* Flanking spires */}
                        <polygon points="418,-140 412,-50 424,-50" fill="#c4c0b7" />
                        <polygon points="482,-140 476,-50 488,-50" fill="#c4c0b7" />
                        <circle cx="418" cy="-142" r="3.5" fill="#f0d080" opacity="0.8" filter="url(#glow)" />
                        <circle cx="482" cy="-142" r="3.5" fill="#f0d080" opacity="0.8" filter="url(#glow)" />

                        {/* ── Sun glow behind tower ── */}
                        <ellipse cx="450" cy="490" rx="380" ry="120" fill="url(#sunGlow)" />

                        {/* ── Ground / horizon line ── */}
                        <rect x="0" y="510" width="900" height="10" fill="#1a2a0f" />

                        {/* ── Pine trees foreground ── */}
                        {[
                            { x: 20, h: 110, w: 38, layers: 4 },
                            { x: 55, h: 140, w: 48, layers: 5 },
                            { x: 100, h: 95, w: 34, layers: 3 },
                            { x: 730, h: 130, w: 46, layers: 5 },
                            { x: 775, h: 105, w: 38, layers: 4 },
                            { x: 820, h: 150, w: 52, layers: 5 },
                            { x: 860, h: 90, w: 32, layers: 3 },
                        ].map((tree, ti) => (
                            <g key={ti}>
                                {/* Trunk */}
                                <rect x={tree.x + tree.w / 2 - 4} y={510 - 18} width={8} height={20} fill="#2a1f10" />
                                {/* Layers */}
                                {Array.from({ length: tree.layers }).map((_, li) => {
                                    const progress = li / (tree.layers - 1);
                                    const layerW = tree.w * (1 - progress * 0.5);
                                    const layerY = 510 - 18 - tree.h * (progress + 0.2);
                                    const shade = li % 2 === 0 ? "#1a2e12" : "#162610";
                                    return (
                                        <polygon
                                            key={li}
                                            points={`${tree.x + tree.w / 2},${layerY - layerW * 0.7} ${tree.x + tree.w / 2 - layerW / 2},${layerY + layerW * 0.25} ${tree.x + tree.w / 2 + layerW / 2},${layerY + layerW * 0.25}`}
                                            fill={shade}
                                        />
                                    );
                                })}
                            </g>
                        ))}

                        {/* Mid-ground pine silhouettes */}
                        {[
                            { x: 155, h: 70, w: 28 },
                            { x: 185, h: 85, w: 32 },
                            { x: 650, h: 80, w: 30 },
                            { x: 690, h: 65, w: 26 },
                            { x: 718, h: 90, w: 34 },
                        ].map((tree, ti) => (
                            <g key={`m${ti}`} opacity="0.7">
                                <rect x={tree.x + tree.w / 2 - 3} y={510 - 14} width={6} height={16} fill="#2a1f10" />
                                {[0, 1, 2].map((li) => {
                                    const progress = li / 2;
                                    const layerW = tree.w * (1 - progress * 0.45);
                                    const layerY = 510 - 12 - tree.h * (progress + 0.15);
                                    return (
                                        <polygon
                                            key={li}
                                            points={`${tree.x + tree.w / 2},${layerY - layerW * 0.6} ${tree.x + tree.w / 2 - layerW / 2},${layerY + layerW * 0.2} ${tree.x + tree.w / 2 + layerW / 2},${layerY + layerW * 0.2}`}
                                            fill="#1e3016"
                                        />
                                    );
                                })}
                            </g>
                        ))}
                    </g>
                </svg>
            </div>}

            {/* ── Content overlay ── */}
            {variant === "editorial" ? (
                <div className="forever__editorial">
                    <div className="forever__editorial-inner">
                        <p className="forever__ed-badge">{badge || "ЖИЛОЙ КОМПЛЕКС"}</p>
                        <h2 className="forever__ed-title">{title || "Forever"}</h2>
                        <p className="forever__ed-body">{subtitle}</p>
                        <a href="#consultation" className="forever__ed-btn">
                            {btnText || "Узнать подробнее"}
                        </a>
                    </div>
                </div>
            ) : variant === "editorial-right" ? (
                <div className="forever__right">
                    <div className="forever__right-inner">
                        <p className="forever__right-badge">{badge || "ЖИЛОЙ КОМПЛЕКС"}</p>
                        <h2 className="forever__right-title">{title || "FOREVER"}</h2>
                        <p className="forever__right-body">{subtitle}</p>
                        <div className="forever__right-actions">
                            <a href="#consultation" className="forever__right-btn">
                                {btnText || "Узнать подробнее"}
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
            <div className="forever__content">
                <div className="forever__badge">{badge || "ЭЛИТНЫЙ ЖИЛОЙ КВАРТАЛ"}</div>
                <h2 className="forever__title">{title || "Forever"}</h2>
                <p className="forever__subtitle">{subtitle || "Архитектура вечности — там, где роскошь встречает небо"}</p>

                <div className="forever__stats">
                    <div className="forever__stat">
                        <span className="forever__stat-num">25+</span>
                        <span className="forever__stat-label">этажей</span>
                    </div>
                    <div className="forever__divider" />
                    <div className="forever__stat">
                        <span className="forever__stat-num">360°</span>
                        <span className="forever__stat-label">панорамный вид</span>
                    </div>
                    <div className="forever__divider" />
                    <div className="forever__stat">
                        <span className="forever__stat-num">A+</span>
                        <span className="forever__stat-label">класс энергоэффективности</span>
                    </div>
                </div>

                <a href="#consultation" className="forever__cta">
                    {btnText || "Узнать подробнее"}
                </a>
            </div>
            )}

        </section>
    );
}
