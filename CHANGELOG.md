# Changelog

All notable changes to apen-icons. This project follows [semantic versioning](https://semver.org).

## 1.2.0

The whole set is redrawn on one grid, and icons are now generated from SVG files.

### Added

- 160 new icons, for 291 in total: dashboard and layout, files, commerce, media, charts, text editing, devices, weather, time and maps.
- Solid variants `PlayFill`, `PauseFill`, `StarFill` and `BookmarkFill`.
- `absoluteStrokeWidth` and `title` props. Icons are `aria-hidden` unless they have a `title` or `aria-label`.
- Every icon gets the classes `apen-icon` and `apen-icon-<name>`.
- `createIcon`, `IconProps`, `IconNode` and `ApenIcon` are exported.
- Raw SVG files ship in the package: `apen-icons/icons/<name>.svg`, plus `apen-icons/meta.json`.
- Editor hover previews for every icon.

### Changed

- Every icon is redrawn on a 24 × 24 grid with a 2px rounded stroke and rounded corners, so sizes and weights match.
- Icons that were solid (`Search`, `Settings`, `Folder`, `Play`, `Pause`, `Bookmark` and others) are now outlined. Use the `*Fill` icons for solid versions.
- `Bolt` is now a lightning bolt, matching its tags.
- The UMD global is `apenIcons`.

### Deprecated

Duplicates were merged. The old names still work as aliases and will be removed in 2.0:
`Cross` → `X`, `CircleCross` → `CircleX`, `Dash` → `Minus`, `SquareOutline` → `Square`, `Kebab` / `KebabMenu` → `MenuKebab`, `User2` → `User`, `Eye2` → `Eye`, `Moon2` → `Moon`, `VideoCamera` → `Video`, `Joystick2` → `Joystick`, `Home2` → `Home`, and `Home2Plus`, `Home2Minus`, `Home2Check`, `Home2X`, `Home2Pen`, `Home2Alert`, `Home2One`, `Home2Two` → the same names without the `2`.

### Fixed

- `react-router-dom` is no longer installed with the library.

### Internal

- Icons live as SVG files in `icons/` with metadata in `icons/meta.json`. `npm run icons` validates them against the grid rules and generates the components; the hand-written versioned folders are gone.
- The website is rebuilt with the Apen UI design system (Tailwind v4).
