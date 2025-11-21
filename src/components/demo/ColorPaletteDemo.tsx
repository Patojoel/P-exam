import React from "react";

/**
 * Composant de démonstration pour la palette de couleurs du projet
 */
export const ColorPaletteDemo: React.FC = () => {
    const colors = [
        { name: "Primary", var: "--color-primary", hex: "#18227B", class: "bg-primary" },
        { name: "White", var: "--color-white", hex: "#FFFFFF", class: "bg-white", border: true },
        { name: "Dark", var: "--color-dark", hex: "#1E1F25", class: "bg-dark" },
        { name: "Gray", var: "--color-gray", hex: "#A5A5A7", class: "bg-gray" },
        { name: "Gray 80", var: "--color-gray-80", hex: "#A5A5A780", class: "bg-gray-80" },
        { name: "Dark 33", var: "--color-dark-33", hex: "#1E1F2533", class: "bg-dark-33", border: true },
        { name: "Dark 66", var: "--color-dark-66", hex: "#1E1F2566", class: "bg-dark-66" },
        { name: "Light Blue", var: "--color-light-blue", hex: "#DDEEF0", class: "bg-light-blue" },
        { name: "Teal", var: "--color-teal", hex: "#448B96", class: "bg-teal" },
        { name: "Border", var: "--color-border", hex: "#E6EAEFBD", class: "bg-[var(--color-border)]", border: true },
    ];

    const fontWeights = [
        { name: "Light (300)", class: "font-light" },
        { name: "Regular (400)", class: "font-normal" },
        { name: "Medium (500)", class: "font-medium" },
        { name: "Bold (700)", class: "font-bold" },
        { name: "ExtraBold (800)", class: "font-extrabold" },
    ];

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-dark mb-2">Design System</h1>
            <p className="text-gray mb-8">Palette de couleurs et typographie Gilroy</p>

            {/* Section Couleurs */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6">🎨 Palette de Couleurs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {colors.map((color) => (
                        <div
                            key={color.var}
                            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                        >
                            <div
                                className={`h-24 ${color.class} ${color.border ? "border border-gray-300" : ""}`}
                            ></div>
                            <div className="p-4">
                                <h3 className="font-bold text-dark mb-1">{color.name}</h3>
                                <p className="text-sm text-gray font-mono">{color.hex}</p>
                                <p className="text-xs text-gray-500 font-mono mt-1">var({color.var})</p>
                                <p className="text-xs text-teal font-mono mt-1">.{color.class}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section Typographie */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6">🔤 Police Gilroy - Poids</h2>
                <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                    {fontWeights.map((weight) => (
                        <div key={weight.name} className="border-b border-gray-200 pb-4 last:border-0">
                            <p className={`text-2xl text-dark ${weight.class} mb-1`}>
                                The quick brown fox jumps over the lazy dog
                            </p>
                            <p className="text-sm text-gray">
                                {weight.name} - <span className="font-mono text-teal">{weight.class}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Exemples d'utilisation */}
            <section>
                <h2 className="text-2xl font-bold text-dark mb-6">💡 Exemples d'Utilisation</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Bouton Primary */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="font-bold text-dark mb-4">Bouton Primary</h3>
                        <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-teal transition-colors">
                            Cliquez-moi
                        </button>
                        <pre className="mt-4 text-xs bg-dark-33 p-3 rounded overflow-x-auto">
                            <code>{`<button className="bg-primary text-white px-6 py-3 rounded-lg">\n  Cliquez-moi\n</button>`}</code>
                        </pre>
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="font-bold text-dark mb-4">Card avec bordure</h3>
                        <div className="border-2 border-color bg-light-blue p-4 rounded-lg">
                            <h4 className="font-bold text-dark">Titre de la card</h4>
                            <p className="text-gray">Contenu de la card</p>
                        </div>
                        <pre className="mt-4 text-xs bg-dark-33 p-3 rounded overflow-x-auto">
                            <code>{`<div className="border-2 border-color bg-light-blue p-4">\n  ...\n</div>`}</code>
                        </pre>
                    </div>

                    {/* Badge */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="font-bold text-dark mb-4">Badges</h3>
                        <div className="flex gap-2 flex-wrap">
                            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                Primary
                            </span>
                            <span className="bg-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                                Teal
                            </span>
                            <span className="bg-dark text-white px-3 py-1 rounded-full text-sm font-medium">
                                Dark
                            </span>
                        </div>
                        <pre className="mt-4 text-xs bg-dark-33 p-3 rounded overflow-x-auto">
                            <code>{`<span className="bg-primary text-white px-3 py-1 rounded-full">\n  Badge\n</span>`}</code>
                        </pre>
                    </div>

                    {/* Input */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="font-bold text-dark mb-4">Input Field</h3>
                        <input
                            type="text"
                            placeholder="Entrez votre texte..."
                            className="w-full border-2 border-color px-4 py-2 rounded-lg focus:border-primary focus:outline-none"
                        />
                        <pre className="mt-4 text-xs bg-dark-33 p-3 rounded overflow-x-auto">
                            <code>{`<input className="border-2 border-color focus:border-primary" />`}</code>
                        </pre>
                    </div>
                </div>
            </section>
        </div>
    );
};
