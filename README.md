# Portfolio d’Émile Tremblay

Portfolio général en français, réalisé avec Next.js, TypeScript et CSS. Le site et ses contenus sont dans le dépôt. Aucune base de données, clé API ou variable d’environnement n’est nécessaire.

## Démarrer

Node.js 24 et pnpm 12.11.2 (version fixée dans `packageManager`) sont requis.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

```sh
pnpm build
pnpm start
```

## Modifier les contenus

`data/portfolio.json` est la source de contenu pour les pages et le CV :

- `profile` : coordonnées, présentation, compétences et intérêts.
- `general` : expériences professionnelles de l’accueil.
- `education` : formations.
- `coding` : présentation, compétences, expérience et projets web.
- `music` : présentation, compétences, expériences, projets et distinctions.

Ajouter un objet à la liste concernée pour ajouter une expérience ou un projet. Conserver les propriétés des objets voisins. Les images locales sont dans `public/images/`; référencer une image sous la forme `/images/nom.jpg`. Les liens de projets sont conservés depuis l’ancien portfolio et peuvent être remplacés dans le JSON. Ces sites externes peuvent avoir leurs propres services : le portfolio lui-même ne les interroge pas.

La police Inter est incluse dans `public/fonts/` et servie localement. Les captures utilisées sont conservées dans `public/images/`, sans doublons.

## Pages

- `/` : parcours professionnel général.
- `/coding` : développement web et projets.
- `/musique` : expériences musicales, collaborations et distinctions.
- `/cv` : CV général imprimable ; `?volet=coding` et `?volet=music` sélectionnent les CV spécialisés. Le bouton permet d’imprimer ou d’enregistrer un PDF via le navigateur.
- `/resume` et `/resume-music` : redirections des anciennes adresses.

Le CV et le portfolio lisent le même JSON. Les contenus sont pré-rendus lors du build, à l’exception du CV qui sélectionne son volet selon l’URL. Navigation clavier, lien d’évitement, états actifs, petits écrans et préférences de réduction des animations sont pris en charge.

## Contrôles

```sh
pnpm check
pnpm build
pnpm audit
```

`pnpm check` exécute ESLint, la génération des types Next.js, TypeScript et la vérification du formatage. Le build est un contrôle distinct. Le CSS est natif : aucun framework CSS ni bibliothèque d’animation n’est nécessaire. Les pages principales sont pré-rendues ; seul le sélecteur de section et le bouton d’impression utilisent du JavaScript client personnalisé.

## Déploiement et sécurité

`vercel.json` fixe les commandes d’installation et de build sur la même version de pnpm que le développement local. `npx` sert uniquement à lancer cette version : l’installation du projet utilise pnpm et son unique lockfile. `engines.node` sélectionne Node.js 24 pour Vercel.

L’audit du 13 octobre 2026 ne signale aucune vulnérabilité dans les dépendances de production. L’audit complet signale une alerte non corrigée dans `braces`, dépendance transitive d’ESLint (`GHSA-vfj7-8cjw-p6xm`) ; elle concerne les outils de développement. Refaire `pnpm audit` après les mises à jour : ce constat ne remplace pas les audits futurs. ESLint 9 et TypeScript 6 sont retenus pour respecter les dépendances compatibles de la configuration Next.js.
