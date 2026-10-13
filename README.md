# Portfolio d’Émile Tremblay

Portfolio général en français, réalisé avec Next.js, TypeScript et Tailwind. Le site et ses contenus sont dans le dépôt. Aucune base de données, clé API ou variable d’environnement n’est nécessaire.

## Démarrer

```sh
npm ci
npm run dev
```

```sh
npm run build
npm start
```

## Modifier les contenus

`data/portfolio.json` est la source de contenu pour les pages et le CV :

- `profile` : coordonnées, présentation, compétences et intérêts.
- `general` : expériences professionnelles de l’accueil.
- `education` : formations.
- `coding` : présentation, compétences, expérience et projets web.
- `music` : présentation, compétences, expériences, projets et distinctions.

Ajouter un objet à la liste concernée pour ajouter une expérience ou un projet. Conserver les propriétés des objets voisins. Les images locales sont dans `public/images/`; référencer une image sous la forme `/images/nom.jpg`. Les liens de projets sont conservés depuis l’ancien portfolio et peuvent être remplacés dans le JSON. Ces sites externes peuvent avoir leurs propres services : le portfolio lui-même ne les interroge pas.

La police Inter est incluse dans `public/fonts/` et servie localement. Les captures originales restent dans `assets/images/` pour conserver les sources.

## Pages

- `/` : parcours professionnel général.
- `/coding` : développement web et projets.
- `/musique` : expériences musicales, collaborations et distinctions.
- `/cv` : CV général imprimable ; `?volet=coding` et `?volet=music` sélectionnent les CV spécialisés. Le bouton permet d’imprimer ou d’enregistrer un PDF via le navigateur.
- `/resume` et `/resume-music` : redirections des anciennes adresses.

Le CV et le portfolio lisent le même JSON. Les contenus sont pré-rendus lors du build, à l’exception du CV qui sélectionne son volet selon l’URL. Navigation clavier, lien d’évitement, états actifs, petits écrans et préférences de réduction des animations sont pris en charge.
