# Icons Components

Ce dossier contient les composants d'icônes personnalisés créés à partir de SVG.

## DashboardIcon

Une icône de tableau de bord personnalisée (4 carrés arrondis).

### Utilisation

```tsx
import { DashboardIcon } from "@/components/icons";

// Utilisation de base
<DashboardIcon />

// Avec couleur personnalisée
<DashboardIcon color="#0370ee" />

// Avec taille personnalisée
<DashboardIcon size={32} />

// Avec className pour le styling CSS
<DashboardIcon className="text-blue-500 hover:text-blue-700" />

// Avec épaisseur de trait personnalisée
<DashboardIcon strokeWidth={2} />

// Combinaison de props
<DashboardIcon 
  size={24} 
  color="currentColor" 
  strokeWidth={1.5}
  className="icon-class"
/>
```

### Props (DashboardIcon)

- **size** (number, optionnel): Taille de l'icône en pixels. Par défaut: 24
- **color** (string, optionnel): Couleur du trait de l'icône. Par défaut: "currentColor"
- **strokeWidth** (number, optionnel): Épaisseur du trait. Par défaut: 1.5
- **className** (string, optionnel): Classes CSS personnalisées

---

## PaymentsIcon

Une icône de paiements personnalisée (rectangle avec lignes et barres obliques).

### Utilisation

```tsx
import { PaymentsIcon } from "@/components/icons";

// Utilisation de base
<PaymentsIcon />

// Avec couleur personnalisée
<PaymentsIcon color="#1e1f25" />

// Avec taille personnalisée
<PaymentsIcon size={32} />

// Avec className pour le styling CSS
<PaymentsIcon className="text-gray-800 hover:text-black" />

// Combinaison de props
<PaymentsIcon 
  size={24} 
  color="currentColor" 
  className="icon-class"
/>
```

### Props (PaymentsIcon)

- **size** (number, optionnel): Taille de l'icône en pixels. Par défaut: 24
- **color** (string, optionnel): Couleur de remplissage de l'icône. Par défaut: "currentColor"
- **className** (string, optionnel): Classes CSS personnalisées

---

## Notes générales

- Les deux icônes utilisent `currentColor` par défaut, ce qui signifie qu'elles héritent automatiquement de la couleur du texte parent
- Les icônes sont entièrement personnalisables via les props
- Aucune couleur fixe n'est définie dans les composants, permettant une flexibilité maximale
- Compatible avec le système de types `NavbarType` qui accepte à la fois les icônes Lucide et les composants React personnalisés
