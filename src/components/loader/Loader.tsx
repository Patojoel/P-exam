import React, {useEffect, useRef, useState} from "react";

type Props = {
    size?: number;                // diamètre du loader
    circleSize?: number;          // taille du petit SVG
    rotationDuration?: number;    // durée de l'orbite
    individualDuration?: number;  // durée de rotation propre
};

export const Loader: React.FC<Props> = ({
                                            size = 100,
                                            circleSize = 21,
                                            rotationDuration = 15,
                                            individualDuration = 2.2
                                        }: Props)=> {
    const [animState, setAnimState] = useState({ pathProgress: 0, rotationAngle: 0 });
    const requestRef = useRef<number>(0);

    const r = circleSize / 2;
    const padding = circleSize;
    const centerX = size / 2;
    const topY = padding;
    const bottomY = size - padding;
    const halfBase = (size - padding * 2) / 2;

    const vertices = [
        { x: centerX, y: topY },
        { x: centerX + halfBase, y: bottomY },
        { x: centerX - halfBase, y: bottomY }
    ];

    // --- CORRECTION ICI ---
    const getPosition = (progress: number) => {
        // 1. On s'assure que p est strictement positif et modulo 3
        // Math.abs gère les cas rares de nombres négatifs au démarrage
        const p = Math.abs(progress % 3);

        // 2. On calcule le segment
        let segment = Math.floor(p);

        // 3. SÉCURITÉ : Si par arrondi flottant on obtient 3, on force à 2
        if (segment >= 3) segment = 2;

        const t = p - segment;

        // 4. Récupération sécurisée des points
        const start = vertices[segment];
        const end = vertices[(segment + 1) % 3];

        // 5. Double sécurité : si jamais start est undefined, on retourne 0 pour éviter le crash
        if (!start || !end) return { x: centerX, y: topY };

        return {
            x: start.x + (end.x - start.x) * t,
            y: start.y + (end.y - start.y) * t
        };
    };
    // ----------------------

    useEffect(() => {
        const startTime = performance.now();

        const animate = (time: number) => {
            const elapsed = (time - startTime) / 1000;

            const pathProgress = (elapsed / individualDuration) * 3;
            const rotationAngle = (elapsed / rotationDuration) * 360;

            setAnimState({ pathProgress, rotationAngle });
            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [individualDuration, rotationDuration]);

    const point1 = getPosition(animState.pathProgress);
    const point2 = getPosition(animState.pathProgress + 1);
    const point3 = getPosition(animState.pathProgress + 2);

    const rot = animState.rotationAngle;
    const gradientId = `loader_grad_${size}`;

    return (
        <div className="flex items-center justify-center">
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                <defs>
                    <linearGradient id={gradientId} x1="1" y1="0" x2="0" y2="1">
                        <stop stopColor="#A370FA" />
                        <stop offset="1" stopColor="#F55C20" />
                    </linearGradient>
                </defs>

                <g transform={`translate(${point1.x}, ${point1.y}) rotate(${rot})`}>
                    <circle cx="0" cy="0" r={r} fill={`url(#${gradientId})`} />
                </g>

                <g transform={`translate(${point2.x}, ${point2.y}) rotate(${rot + 120})`}>
                    <circle cx="0" cy="0" r={r} fill={`url(#${gradientId})`} />
                </g>

                <g transform={`translate(${point3.x}, ${point3.y}) rotate(${rot + 240})`}>
                    <circle cx="0" cy="0" r={r} fill={`url(#${gradientId})`} />
                </g>
            </svg>
        </div>
    );

};
