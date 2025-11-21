/**
 * Types et constantes pour les couleurs du projet
 */

export type ColorName =
    | "primary"
    | "white"
    | "dark"
    | "gray"
    | "gray-80"
    | "dark-33"
    | "dark-66"
    | "light-blue"
    | "teal"
    | "border";

export type ColorVariable =
    | "--color-primary"
    | "--color-white"
    | "--color-dark"
    | "--color-gray"
    | "--color-gray-80"
    | "--color-dark-33"
    | "--color-dark-66"
    | "--color-light-blue"
    | "--color-teal"
    | "--color-border";

/**
 * Palette de couleurs du projet
 */
export const COLORS = {
    primary: "#18227B",
    white: "#FFFFFF",
    dark: "#1E1F25",
    gray: "#A5A5A7",
    gray80: "#A5A5A780",
    dark33: "#1E1F2533",
    dark66: "#1E1F2566",
    lightBlue: "#DDEEF0",
    teal: "#448B96",
    border: "#E6EAEFBD",
} as const;

/**
 * Variables CSS pour les couleurs
 */
export const COLOR_VARS = {
    primary: "var(--color-primary)",
    white: "var(--color-white)",
    dark: "var(--color-dark)",
    gray: "var(--color-gray)",
    gray80: "var(--color-gray-80)",
    dark33: "var(--color-dark-33)",
    dark66: "var(--color-dark-66)",
    lightBlue: "var(--color-light-blue)",
    teal: "var(--color-teal)",
    border: "var(--color-border)",
} as const;

/**
 * Fonction utilitaire pour obtenir une couleur CSS
 * @param colorName - Nom de la couleur
 * @returns Variable CSS de la couleur
 * 
 * @example
 * ```tsx
 * const myStyle = {
 *   backgroundColor: getColor("primary"),
 *   color: getColor("white")
 * }
 * ```
 */
export const getColor = (colorName: keyof typeof COLOR_VARS): string => {
    return COLOR_VARS[colorName];
};

/**
 * Types pour les poids de police Gilroy
 */
export type FontWeight = 300 | 400 | 500 | 700 | 800;

export type FontWeightName = "light" | "regular" | "medium" | "bold" | "extrabold";

/**
 * Mapping des poids de police
 */
export const FONT_WEIGHTS = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    extrabold: 800,
} as const;
