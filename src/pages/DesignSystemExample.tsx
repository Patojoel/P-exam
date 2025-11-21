import React from "react";
import { useColors } from "@/lib/hooks";

/**
 * Page d'exemple montrant l'utilisation du design system
 * Cette page démontre les différentes façons d'utiliser les couleurs et la police Gilroy
 */
export const DesignSystemExample: React.FC = () => {
    const { getVar } = useColors();

    return (
        <div className="min-h-screen bg-light-blue p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h1 className="text-4xl font-extrabold text-primary mb-2">
                        Design System en Action
                    </h1>
                    <p className="text-gray font-medium">
                        Démonstration de l'utilisation des couleurs et de la police Gilroy
                    </p>
                </header>

                {/* Section 1: Boutons */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-bold text-dark mb-4">Boutons</h2>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-teal transition-colors">
                            Bouton Primary
                        </button>
                        <button className="bg-teal text-white px-6 py-3 rounded-lg font-medium hover:bg-primary transition-colors">
                            Bouton Teal
                        </button>
                        <button className="bg-white border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors">
                            Bouton Outline
                        </button>
                        <button className="bg-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-dark-66 transition-colors">
                            Bouton Dark
                        </button>
                    </div>
                </section>

                {/* Section 2: Cards */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-bold text-dark mb-4">Cards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border-2 border-color rounded-lg p-4 hover:shadow-lg transition-shadow">
                            <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mb-3">
                                <span className="text-xl font-bold">1</span>
                            </div>
                            <h3 className="font-bold text-dark mb-2">Card Avec Bordure</h3>
                            <p className="text-gray text-sm">
                                Utilise border-color pour une bordure élégante
                            </p>
                        </div>

                        <div className="bg-light-blue rounded-lg p-4 hover:shadow-lg transition-shadow">
                            <div className="bg-teal text-white w-12 h-12 rounded-full flex items-center justify-center mb-3">
                                <span className="text-xl font-bold">2</span>
                            </div>
                            <h3 className="font-bold text-dark mb-2">Card Light Blue</h3>
                            <p className="text-gray text-sm">
                                Arrière-plan avec la couleur light-blue
                            </p>
                        </div>

                        <div className="bg-dark rounded-lg p-4 hover:shadow-lg transition-shadow">
                            <div className="bg-white text-dark w-12 h-12 rounded-full flex items-center justify-center mb-3">
                                <span className="text-xl font-bold">3</span>
                            </div>
                            <h3 className="font-bold text-white mb-2">Card Dark</h3>
                            <p className="text-gray-80 text-sm">
                                Version sombre avec texte clair
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3: Formulaire */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-bold text-dark mb-4">Formulaire</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-dark font-medium mb-2">
                                Nom Complet
                            </label>
                            <input
                                type="text"
                                className="w-full border-2 border-color px-4 py-2 rounded-lg focus:border-primary focus:outline-none transition-colors"
                                placeholder="Jean Dupont"
                            />
                        </div>
                        <div>
                            <label className="block text-dark font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full border-2 border-color px-4 py-2 rounded-lg focus:border-primary focus:outline-none transition-colors"
                                placeholder="jean.dupont@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-dark font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                className="w-full border-2 border-color px-4 py-2 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                                rows={4}
                                placeholder="Votre message..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-teal transition-colors w-full md:w-auto"
                        >
                            Envoyer le Message
                        </button>
                    </form>
                </section>

                {/* Section 4: Badges et Tags */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-bold text-dark mb-4">Badges et Tags</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                            Primary
                        </span>
                        <span className="bg-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                            Teal
                        </span>
                        <span className="bg-dark text-white px-3 py-1 rounded-full text-sm font-medium">
                            Dark
                        </span>
                        <span className="bg-light-blue text-dark px-3 py-1 rounded-full text-sm font-medium">
                            Light Blue
                        </span>
                        <span className="border-2 border-primary text-primary px-3 py-1 rounded-full text-sm font-medium">
                            Outline
                        </span>
                    </div>
                </section>

                {/* Section 5: Typographie Gilroy */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-bold text-dark mb-4">
                        Typographie - Police Gilroy
                    </h2>
                    <div className="space-y-3">
                        <p className="text-dark font-light text-lg">
                            <span className="font-bold">Light (300):</span> The quick brown fox jumps over the lazy dog
                        </p>
                        <p className="text-dark font-normal text-lg">
                            <span className="font-bold">Regular (400):</span> The quick brown fox jumps over the lazy dog
                        </p>
                        <p className="text-dark font-medium text-lg">
                            <span className="font-bold">Medium (500):</span> The quick brown fox jumps over the lazy dog
                        </p>
                        <p className="text-dark font-bold text-lg">
                            <span className="font-bold">Bold (700):</span> The quick brown fox jumps over the lazy dog
                        </p>
                        <p className="text-dark font-extrabold text-lg">
                            <span className="font-bold">ExtraBold (800):</span> The quick brown fox jumps over the lazy dog
                        </p>
                    </div>
                </section>

                {/* Section 6: Utilisation avec Hook */}
                <section className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-dark mb-4">
                        Utilisation avec Hook useColors
                    </h2>
                    <div
                        style={{
                            backgroundColor: getVar("lightBlue"),
                            padding: "1.5rem",
                            borderRadius: "0.5rem",
                            border: `2px solid ${getVar("border")}`,
                        }}
                    >
                        <h3
                            style={{
                                color: getVar("primary"),
                                fontWeight: 700,
                                marginBottom: "0.5rem",
                            }}
                        >
                            Exemple avec useColors Hook
                        </h3>
                        <p style={{ color: getVar("gray") }}>
                            Ce composant utilise le hook <code className="bg-dark-33 px-2 py-1 rounded text-sm">useColors()</code> pour
                            accéder aux couleurs via des styles inline.
                        </p>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-8 text-center">
                    <p className="text-gray text-sm">
                        📖 Consultez <strong>DESIGN_SYSTEM.md</strong> pour plus d'informations
                    </p>
                </footer>
            </div>
        </div>
    );
};
