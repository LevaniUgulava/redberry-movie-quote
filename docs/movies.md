# Movies

> Movies page test data — static mock array for UI development before the backend API is wired up.

## Overview

`resources/js/pages/Movies/TestMovies.ts` exports `TestMovies`, a static array of 10 movie objects used to build and style the Movies page (`Movies.tsx`) without a real data source.

### Object shape

| Field | Type | Meaning |
| --- | --- | --- |
| `movieImage` | `string` | Poster image URL |
| `movieName` | `string` | Movie title |
| `movieYear` | `number` | Release year |
| `commentQuantity` | `number` | Number of comments/quotes on the movie |

```ts
export const TestMovies = [
    {
        movieImage: 'https://picsum.photos/seed/shawshank/400/600',
        movieName: 'The Shawshank Redemption',
        movieYear: 1994,
        commentQuantity: 128,
    },
    // ...9 more
];
```

## Usage

```tsx
import { TestMovies } from './TestMovies';

TestMovies.map((movie) => <MovieCard key={movie.movieName} movie={movie} />);
```

## Decisions

| Decision | Reasoning | Alternatives rejected |
| --- | --- | --- |
| camelCase field names (`movieImage`, `commentQuantity`) | Matches JS/TS naming conventions; original blueprint used snake_case strings. Same meanings kept. | Keeping snake_case (unidiomatic in TSX props) |
| Seeded picsum.photos placeholder URLs | Deterministic per-movie images at 400x600 poster ratio; no binary assets needed for mock data. | Empty strings (can't test image layout), local placeholder files (repo clutter) |
| Real famous movies as entries | Makes UI content realistic and recognizable while testing. | Random/fake titles (harder to eyeball correctness) |

## Challenges & Solutions

None yet. This is mock data only — replace with API-driven data (Wayfinder controller actions) once the movies endpoint exists.
