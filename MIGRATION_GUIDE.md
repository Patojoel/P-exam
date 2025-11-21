# 🚀 Guide de Migration - Couleurs

## Conversions des Couleurs Courantes

Utilisez ce guide pour convertir vos couleurs existantes vers le nouveau système.

### Ancien → Nouveau

| Ancien Code | Nouveau Code | Alternative |
|-------------|--------------|-------------|
| `className="text-[#18227B]"` | `className="text-primary"` | `style={{ color: var(--color-primary) }}` |
| `className="bg-[#0370EE]"` | `className="bg-primary"` | Ou utiliser `bg-teal` si approprié |
| `className="text-[#1E1F25]"` | `className="text-dark"` | `style={{ color: var(--color-dark) }}` |
| `className="bg-[#FFFFFF]"` | `className="bg-white"` | `style={{ backgroundColor: var(--color-white) }}` |
| `className="text-[#A5A5A7]"` | `className="text-gray"` | `style={{ color: var(--color-gray) }}` |
| `className="border-[#E6EAEFBD]"` | `className="border-color"` | `style={{ borderColor: var(--color-border) }}` |

## Exemples de Conversion

### Avant
```tsx
<button className="bg-[#18227B] text-white px-4 py-2 rounded-lg hover:bg-[#448B96]">
  Connexion
</button>
```

### Après
```tsx
<button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-teal">
  Connexion
</button>
```

---

### Avant
```tsx
<div className="border-2 border-[#E6EAEFBD] bg-[#DDEEF0] p-4">
  <h3 className="text-[#1E1F25] font-bold">Titre</h3>
  <p className="text-[#A5A5A7]">Description</p>
</div>
```

### Après
```tsx
<div className="border-2 border-color bg-light-blue p-4">
  <h3 className="text-dark font-bold">Titre</h3>
  <p className="text-gray">Description</p>
</div>
```

---

### Avant (CSS)
```css
.my-component {
  background-color: #18227B;
  color: #FFFFFF;
  border: 1px solid #E6EAEFBD;
}

.my-component:hover {
  background-color: #448B96;
}
```

### Après (CSS)
```css
.my-component {
  background-color: var(--color-primary);
  color: var(--color-white);
  border: 1px solid var(--color-border);
}

.my-component:hover {
  background-color: var(--color-teal);
}
```

## 🔍 Rechercher et Remplacer

Utilisez votre éditeur pour remplacer rapidement :

### Dans les fichiers .tsx / .jsx
```
Rechercher: className="bg-\[#18227B\]"
Remplacer: className="bg-primary"

Rechercher: className="text-\[#1E1F25\]"
Remplacer: className="text-dark"

Rechercher: className="bg-\[#FFFFFF\]"
Remplacer: className="bg-white"

Rechercher: className="text-\[#A5A5A7\]"
Remplacer: className="text-gray"
```

### Dans les fichiers .css
```
Rechercher: #18227B
Remplacer: var(--color-primary)

Rechercher: #1E1F25
Remplacer: var(--color-dark)

Rechercher: #FFFFFF
Remplacer: var(--color-white)

Rechercher: #A5A5A7
Remplacer: var(--color-gray)

Rechercher: #E6EAEFBD
Remplacer: var(--color-border)
```

## ⚡ Utilisation avec TypeScript

```tsx
import { getColor, COLORS, COLOR_VARS } from "@/lib/constants";

// Option 1 : Utiliser la fonction utilitaire
const buttonStyle = {
  backgroundColor: getColor("primary"),
  color: getColor("white")
};

// Option 2 : Utiliser directement les constantes
const cardStyle = {
  backgroundColor: COLOR_VARS.lightBlue,
  borderColor: COLOR_VARS.border
};

// Option 3 : Accéder aux valeurs HEX (pour des cas spéciaux)
const shadowColor = COLORS.dark33;
```

## 📝 Checklist de Migration

- [ ] Remplacer toutes les couleurs hardcodées dans les composants
- [ ] Convertir les styles inline utilisant des HEX
- [ ] Mettre à jour les fichiers CSS personnalisés
- [ ] Tester l'affichage de tous les composants
- [ ] Supprimer les imports de couleurs inutilisés
- [ ] Vérifier le contraste d'accessibilité

## 🎨 Visualisation

Pour voir toutes les couleurs en action, utilisez le composant de démo :

```tsx
import { ColorPaletteDemo } from "@/components/demo";

// Dans votre route de développement
<ColorPaletteDemo />
```

Ou visitez `/design-system` (si vous ajoutez la route) pour voir la palette complète.
