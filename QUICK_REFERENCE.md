# 🎨 Quick Reference - Design System

## Variables CSS Couleurs

```css
/* Dans vos fichiers CSS */
.mon-element {
  color: var(--color-primary);        /* #18227B */
  background: var(--color-white);     /* #FFFFFF */
  border-color: var(--color-border);  /* #E6EAEFBD */
}
```

## Classes Utilitaires

### Texte
```html
<p class="text-primary">Texte en couleur primary</p>
<p class="text-dark">Texte en couleur dark</p>
<p class="text-gray">Texte en couleur gray</p>
<p class="text-teal">Texte en couleur teal</p>
```

### Background
```html
<div class="bg-primary">Background primary</div>
<div class="bg-white">Background white</div>
<div class="bg-dark">Background dark</div>
<div class="bg-gray">Background gray</div>
<div class="bg-gray-80">Background gray avec transparence</div>
<div class="bg-dark-33">Background dark 33% opacité</div>
<div class="bg-dark-66">Background dark 66% opacité</div>
<div class="bg-light-blue">Background light blue</div>
<div class="bg-teal">Background teal</div>
```

### Bordures
```html
<div class="border-2 border-primary">Bordure primary</div>
<div class="border-2 border-gray">Bordure gray</div>
<div class="border-2 border-color">Bordure avec couleur custom</div>
```

## Police Gilroy - Poids

```html
<p class="font-light">Police Gilroy Light (300)</p>
<p class="font-normal">Police Gilroy Regular (400)</p>
<p class="font-medium">Police Gilroy Medium (500)</p>
<p class="font-bold">Police Gilroy Bold (700)</p>
<p class="font-extrabold">Police Gilroy ExtraBold (800)</p>
```

## Hook React

```tsx
import { useColors } from "@/lib/hooks";

const MyComponent = () => {
  const { getVar, getHex, vars, hex } = useColors();
  
  return (
    <div style={{ 
      backgroundColor: getVar("primary"),
      color: getVar("white")
    }}>
      Mon contenu
    </div>
  );
};
```

## Constantes TypeScript

```tsx
import { getColor, COLORS, COLOR_VARS } from "@/lib/constants";

// Obtenir une variable CSS
const bg = getColor("primary"); // "var(--color-primary)"

// Accès direct aux valeurs
const primaryHex = COLORS.primary; // "#18227B"
const primaryVar = COLOR_VARS.primary; // "var(--color-primary)"
```

## Exemples Rapides

### Bouton
```tsx
<button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-teal">
  Cliquez-moi
</button>
```

### Card
```tsx
<div className="bg-white border-2 border-color rounded-lg p-6">
  <h3 className="text-dark font-bold">Titre</h3>
  <p className="text-gray">Description</p>
</div>
```

### Input
```tsx
<input 
  type="text"
  className="border-2 border-color px-4 py-2 rounded-lg focus:border-primary"
  placeholder="Texte..."
/>
```

### Badge
```tsx
<span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
  Badge
</span>
```

---

📖 **Documentation complète** : Voir `DESIGN_SYSTEM.md`
