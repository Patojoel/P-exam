# Configuration des Couleurs et Typographie

## 🎨 Palette de Couleurs

Toutes les couleurs du projet sont configurées en tant que variables CSS dans `index.css`. Elles peuvent être utilisées de deux manières :

### 1. Via les variables CSS
```css
/* Dans vos fichiers CSS */
.mon-element {
  color: var(--color-primary);
  background-color: var(--color-white);
  border-color: var(--color-border);
}
```

### 2. Via les classes utilitaires
```tsx
/* Dans vos composants React */
<div className="bg-primary text-white">
  Contenu
</div>
```

## Variables de Couleur Disponibles

| Variable CSS | Valeur HEX | Classe Texte | Classe Background | Classe Border |
|--------------|------------|--------------|-------------------|---------------|
| `--color-primary` | #18227B | `.text-primary` | `.bg-primary` | `.border-primary` |
| `--color-white` | #FFFFFF | - | `.bg-white` | - |
| `--color-dark` | #1E1F25 | `.text-dark` | `.bg-dark` | - |
| `--color-gray` | #A5A5A7 | `.text-gray` | `.bg-gray` | `.border-gray` |
| `--color-gray-80` | #A5A5A780 | - | `.bg-gray-80` | - |
| `--color-dark-33` | #1E1F2533 | - | `.bg-dark-33` | - |
| `--color-dark-66` | #1E1F2566 | - | `.bg-dark-66` | - |
| `--color-light-blue` | #DDEEF0 | - | `.bg-light-blue` | - |
| `--color-teal` | #448B96 | `.text-teal` | `.bg-teal` | - |
| `--color-border` | #E6EAEFBD | - | - | `.border-color` |

## 🔤 Police Gilroy

La police Gilroy est configurée comme police principale du projet.

### Utilisation Actuelle
La police est chargée via CDN depuis `fonts.cdnfonts.com`. Elle s'applique automatiquement à tout le projet.

### Option : Installation Locale (Recommandé pour Production)

Pour une meilleure performance et disponibilité offline :

1. **Téléchargez la police Gilroy** (Light, Regular, Medium, Bold, ExtraBold)
   - Formats nécessaires : `.woff2`, `.woff`, `.ttf`

2. **Créez le dossier fonts** :
   ```
   frontend/public/fonts/gilroy/
   ```

3. **Placez les fichiers** :
   ```
   public/fonts/gilroy/
   ├── Gilroy-Light.woff2
   ├── Gilroy-Regular.woff2
   ├── Gilroy-Medium.woff2
   ├── Gilroy-Bold.woff2
   └── Gilroy-ExtraBold.woff2
   ```

4. **Remplacez l'import CDN dans `index.css`** par :
   ```css
   /* Gilroy Font Family */
   @font-face {
     font-family: 'Gilroy';
     src: url('/fonts/gilroy/Gilroy-Light.woff2') format('woff2');
     font-weight: 300;
     font-style: normal;
     font-display: swap;
   }

   @font-face {
     font-family: 'Gilroy';
     src: url('/fonts/gilroy/Gilroy-Regular.woff2') format('woff2');
     font-weight: 400;
     font-style: normal;
     font-display: swap;
   }

   @font-face {
     font-family: 'Gilroy';
     src: url('/fonts/gilroy/Gilroy-Medium.woff2') format('woff2');
     font-weight: 500;
     font-style: normal;
     font-display: swap;
   }

   @font-face {
     font-family: 'Gilroy';
     src: url('/fonts/gilroy/Gilroy-Bold.woff2') format('woff2');
     font-weight: 700;
     font-style: normal;
     font-display: swap;
   }

   @font-face {
     font-family: 'Gilroy';
     src: url('/fonts/gilroy/Gilroy-ExtraBold.woff2') format('woff2');
     font-weight: 800;
     font-style: normal;
     font-display: swap;
   }
   ```

## 📖 Exemples d'Utilisation

### Exemple 1 : Bouton avec couleurs personnalisées
```tsx
<button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-teal transition-colors">
  Cliquez-moi
</button>
```

### Exemple 2 : Card avec bordure
```tsx
<div className="bg-white border-2 border-color p-6 rounded-lg">
  <h2 className="text-dark font-bold">Titre</h2>
  <p className="text-gray">Description</p>
</div>
```

### Exemple 3 : Utilisation en CSS
```css
.mon-composant {
  background: var(--color-light-blue);
  color: var(--color-dark);
  border: 1px solid var(--color-border);
}

.mon-composant:hover {
  background: var(--color-teal);
  color: var(--color-white);
}
```

### Exemple 4 : Utilisation avec Tailwind
```tsx
<div className="`bg-[--color-primary]` text-[--color-white]">
  Contenu avec variables CSS
</div>
```

## 🎯 Bonnes Pratiques

1. **Préférez les variables CSS** pour les couleurs personnalisées plutôt que les valeurs HEX en dur
2. **Utilisez les classes utilitaires** pour une cohérence visuelle
3. **Gardez les couleurs centralisées** dans `index.css` pour faciliter les changements futurs
4. **Utilisez `font-weight`** pour les différentes variations de Gilroy :
   - `font-light` (300) - Gilroy Light
   - `font-normal` (400) - Gilroy Regular
   - `font-medium` (500) - Gilroy Medium
   - `font-bold` (700) - Gilroy Bold
   - `font-extrabold` (800) - Gilroy ExtraBold

## 🔄 Mises à Jour

Pour modifier une couleur dans tout le projet, il suffit de changer sa valeur dans les variables CSS de `index.css`. Tous les composants qui utilisent cette variable seront automatiquement mis à jour.
