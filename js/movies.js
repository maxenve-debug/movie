// ============================================================
// MOVIE ARCHIVE DATA
// Replace the movies below with your own.
// Each movie needs: id, title, year, poster, backdrop, synopsis,
// genres, director, runtime, rating, and gallery (array of image URLs)
// ============================================================

const movies = [
  {
    id: "dune-part-two",
    title: "Dune: Part Two",
    year: 2024,
    poster: "https://picsum.photos/seed/dune2/300/450",
    backdrop: "https://picsum.photos/seed/dune2bg/1280/720",
    synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    director: "Denis Villeneuve",
    runtime: "166 min",
    rating: 8.6,
    gallery: [
      "https://picsum.photos/seed/dune2a/800/450",
      "https://picsum.photos/seed/dune2b/800/450",
      "https://picsum.photos/seed/dune2c/800/450",
      "https://picsum.photos/seed/dune2d/800/450"
    ]
  },
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    year: 2023,
    poster: "https://picsum.photos/seed/oppen/300/450",
    backdrop: "https://picsum.photos/seed/oppenbg/1280/720",
    synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II. A gripping historical drama that explores the moral complexities of scientific discovery.",
    genres: ["Biography", "Drama", "History"],
    director: "Christopher Nolan",
    runtime: "180 min",
    rating: 8.3,
    gallery: [
      "https://picsum.photos/seed/oppena/800/450",
      "https://picsum.photos/seed/oppenb/800/450",
      "https://picsum.photos/seed/oppenc/800/450"
    ]
  },
  {
    id: "barbie",
    title: "Barbie",
    year: 2023,
    poster: "https://picsum.photos/seed/barbie/300/450",
    backdrop: "https://picsum.photos/seed/barbiebg/1280/720",
    synopsis: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. When they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    genres: ["Comedy", "Adventure", "Fantasy"],
    director: "Greta Gerwig",
    runtime: "114 min",
    rating: 6.9,
    gallery: [
      "https://picsum.photos/seed/barbiea/800/450",
      "https://picsum.photos/seed/barbieb/800/450",
      "https://picsum.photos/seed/barbiec/800/450"
    ]
  },
  {
    id: "everything-everywhere",
    title: "Everything Everywhere All at Once",
    year: 2022,
    poster: "https://picsum.photos/seed/eeaao/300/450",
    backdrop: "https://picsum.photos/seed/eeaaobg/1280/720",
    synopsis: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the multiverse by connecting with the lives she could have led. A wild, emotional, and inventive journey through parallel realities.",
    genres: ["Action", "Adventure", "Comedy"],
    director: "Daniels",
    runtime: "139 min",
    rating: 7.8,
    gallery: [
      "https://picsum.photos/seed/eeaaoa/800/450",
      "https://picsum.photos/seed/eeaaob/800/450",
      "https://picsum.photos/seed/eeaaoc/800/450",
      "https://picsum.photos/seed/eeaaod/800/450"
    ]
  },
  {
    id: "top-gun-maverick",
    title: "Top Gun: Maverick",
    year: 2022,
    poster: "https://picsum.photos/seed/topgun/300/450",
    backdrop: "https://picsum.photos/seed/topgunbg/1280/720",
    synopsis: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
    genres: ["Action", "Drama"],
    director: "Joseph Kosinski",
    runtime: "130 min",
    rating: 8.2,
    gallery: [
      "https://picsum.photos/seed/topguna/800/450",
      "https://picsum.photos/seed/topgunb/800/450",
      "https://picsum.photos/seed/topgunc/800/450"
    ]
  },
  {
    id: "parasite",
    title: "Parasite",
    year: 2019,
    poster: "https://picsum.photos/seed/parasite/300/450",
    backdrop: "https://picsum.photos/seed/parasitebg/1280/720",
    synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan. A masterful dark comedy thriller that took the world by storm.",
    genres: ["Thriller", "Drama", "Comedy"],
    director: "Bong Joon-ho",
    runtime: "132 min",
    rating: 8.5,
    gallery: [
      "https://picsum.photos/seed/parasitea/800/450",
      "https://picsum.photos/seed/parasiteb/800/450",
      "https://picsum.photos/seed/parasitec/800/450"
    ]
  },
  {
    id: "joker",
    title: "Joker",
    year: 2019,
    poster: "https://picsum.photos/seed/joker/300/450",
    backdrop: "https://picsum.photos/seed/jokerbg/1280/720",
    synopsis: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    genres: ["Crime", "Drama", "Thriller"],
    director: "Todd Phillips",
    runtime: "122 min",
    rating: 8.4,
    gallery: [
      "https://picsum.photos/seed/jokera/800/450",
      "https://picsum.photos/seed/jokerb/800/450",
      "https://picsum.photos/seed/jokerc/800/450"
    ]
  },
  {
    id: "interstellar",
    title: "Interstellar",
    year: 2014,
    poster: "https://picsum.photos/seed/interstellar/300/450",
    backdrop: "https://picsum.photos/seed/interstellarbg/1280/720",
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. A visually stunning and emotionally powerful sci-fi epic about love, time, and the survival of the human race.",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    director: "Christopher Nolan",
    runtime: "169 min",
    rating: 8.7,
    gallery: [
      "https://picsum.photos/seed/interstellara/800/450",
      "https://picsum.photos/seed/interstellarb/800/450",
      "https://picsum.photos/seed/interstellarc/800/450",
      "https://picsum.photos/seed/interstellard/800/450"
    ]
  },
  {
    id: "whiplash",
    title: "Whiplash",
    year: 2014,
    poster: "https://picsum.photos/seed/whiplash/300/450",
    backdrop: "https://picsum.photos/seed/whiplashbg/1280/720",
    synopsis: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    genres: ["Drama", "Music"],
    director: "Damien Chazelle",
    runtime: "106 min",
    rating: 8.5,
    gallery: [
      "https://picsum.photos/seed/whiplasha/800/450",
      "https://picsum.photos/seed/whiplashb/800/450",
      "https://picsum.photos/seed/whiplashc/800/450"
    ]
  },
  {
    id: "inception",
    title: "Inception",
    year: 2010,
    poster: "https://picsum.photos/seed/inception/300/450",
    backdrop: "https://picsum.photos/seed/inceptionbg/1280/720",
    synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    genres: ["Action", "Sci-Fi", "Thriller"],
    director: "Christopher Nolan",
    runtime: "148 min",
    rating: 8.8,
    gallery: [
      "https://picsum.photos/seed/inceptiona/800/450",
      "https://picsum.photos/seed/inceptionb/800/450",
      "https://picsum.photos/seed/inceptionc/800/450",
      "https://picsum.photos/seed/inceptiond/800/450"
    ]
  }
];
