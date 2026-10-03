// ============================================================
// MOVIE ARCHIVE DATA
// Replace the movies below with your own.
// Each movie needs: id, title, year, poster, backdrop, synopsis,
// genres, director, runtime, rating, and gallery (array of image URLs)
// ============================================================

const movies = [
  {
    id: "spy-x-family-code-white",
    title: "SPY X FAMILY CODE: White",
    titleLogo: "images/logo/spyxfamilycodewhite2023.png",
    language: "Japanese",
    year: 2023,
    poster: "images/posters/spyxfamily2023.png",
    backdrop: "images/overlays/spyxfamily2023.png",
    themeColor: "#96c5ef",
    synopsis: "While under the guise of taking his family on a weekend winter getaway, Loid's attempt to make progress on his current mission Operation Strix proves difficult when Anya mistakenly gets involved and triggers events that threaten world peace.",
    genres: ["Comedy", "Adventure", "Action"],
    director: "Takashi Katagiri",
    runtime: "110 min",
    rating: 7.2,
    gallery: [
      "images/gallery/spyxfamily2023-3.png",
      "images/gallery/spyxfamily2023-2.png",
      "images/gallery/spyxfamily2023-1.png",
      "images/gallery/spyxfamily2023-5.png",
      "images/gallery/spyxfamily2023-4.png",
      "images/gallery/spyxfamily2023-6.png",
      "images/gallery/spyxfamily2023-7.png",
      "images/gallery/spyxfamily2023-9.png",
      "images/gallery/spyxfamily2023-8.png"
    ]
  },
  {
    id: "enola-holmes",
    title: "Enola Holmes",
    titleLogo: "images/logo/enolaholmes2020.png",
    language: "English",
    year: 2020,
    poster: "images/posters/enolaholmes2020.png",
    backdrop: "images/overlays/enolaholmes2020.png",
    themeColor: "#6eb9b4",
    synopsis: "When Enola Holmes, Sherlock's sister, discovers her mother is missing, she endeavors to find her, becoming a super-sleuth in her own right as she outwits her famous brother and unravels a dangerous conspiracy.",
    genres: ["Cozy Mystery", "Dark Comedy", "Adventure", "Drama"],
    director: "Harry Bradbeer",
    runtime: "123 min",
    rating: 6.7,
    gallery: [
      "images/gallery/enolaholmes2020-3.png",
      "images/gallery/enolaholmes2020-2.png",
      "images/gallery/enolaholmes2020-1.png",
      "images/gallery/enolaholmes2020-4.png",
      "images/gallery/enolaholmes2020-5.png",
      "images/gallery/enolaholmes2020-6.png",
      "images/gallery/enolaholmes2020-7.png",
      "images/gallery/enolaholmes2020-8.png",
      "images/gallery/enolaholmes2020-9.png"
      
    ]
  },
  {
    id: "barbie",
    title: "Barbie",
    titleLogo: "images/logo/barbie2023.png",
    language: "English",
    year: 2023,
    poster: "images/posters/barbie2023.png",
    backdrop: "images/overlays/barbie2023.png",
    themeColor: "#f200a4",
    synopsis: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. When they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    genres: ["Comedy", "Adventure", "Fantasy"],
    director: "Greta Gerwig",
    runtime: "114 min",
    rating: 6.9,
    gallery: [
      "images/gallery/barbie2023-1.png",
      "images/gallery/barbie2023-2.png",
      "images/gallery/barbie2023-3.png",
      "images/gallery/barbie2023-6.png",
      "images/gallery/barbie2023-5.png",
      "images/gallery/barbie2023-7.png",
      "images/gallery/barbie2023-4.png",
      "images/gallery/barbie2023-8.png",
      "images/gallery/barbie2023-9.png"
    ]
  },
  {
    id: "perayaan-mati-rasa",
    title: "Perayaan Mati Rasa",
    titleLogo: "images/logo/perayaanmatirasa2025.png",
    language: "Indonesian",
    year: 2025,
    poster: "images/posters/perayaanmatirasa2025.png",
    backdrop: "images/overlays/perayaanmatirasa2025.png",
    themeColor: "#86a6bf",
    synopsis: "When they suddenly lose their parents, rival siblings lan and Uta must set aside their dreams to help each other navigate their grief.",
    genres: ["Drama", "Family", "Music"],
    director: "Umay Shahab",
    runtime: "125 min",
    rating: 7.0,
    gallery: [
      "images/gallery/perayaanmatirasa2025-1.png",
      "images/gallery/perayaanmatirasa2025-2.png",
      "images/gallery/perayaanmatirasa2025-3.png",
      "images/gallery/perayaanmatirasa2025-4.png",
      "images/gallery/perayaanmatirasa2025-5.png",
      "images/gallery/perayaanmatirasa2025-6.png",
      "images/gallery/perayaanmatirasa2025-7.png",
      "images/gallery/perayaanmatirasa2025-9.png",
      "images/gallery/perayaanmatirasa2025-8.png"
    ]
  },
  {
    id: "ponyo",
    title: "Ponyo",
    titleLogo: "images/logo/ponyo2008.png",
    language: "Japanese",
    year: 2008,
    poster: "images/posters/ponyo2008.png",
    backdrop: "images/overlays/ponyo2008.png",
    themeColor: "#5b749a",
    synopsis: "A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him.",
    genres: ["Fairytale", "Adventure"],
    director: "Hayao Miyazaki",
    runtime: "101 min",
    rating: 7.6,
    gallery: [
      "images/gallery/ponyo2008-1.png",
      "images/gallery/ponyo2008-2.png",
      "images/gallery/ponyo2008-3.png",
      "images/gallery/ponyo2008-4.png",
      "images/gallery/ponyo2008-5.png",
      "images/gallery/ponyo2008-6.png",
      "images/gallery/ponyo2008-7.png",
      "images/gallery/ponyo2008-8.png",
      "images/gallery/ponyo2008-9.png"
    ]
  },
  {
    id: "parasite",
    title: "Parasite",
    titleLogo: "images/titles/barbie-logo.png",
    language: "English",
    year: 2019,
    poster: "https://picsum.photos/seed/parasite/300/450",
    backdrop: "https://picsum.photos/seed/parasitebg/1280/720",
    themeColor: "#e91e63",
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
    titleLogo: "images/titles/barbie-logo.png",
    language: "English",
    year: 2019,
    poster: "https://picsum.photos/seed/joker/300/450",
    backdrop: "https://picsum.photos/seed/jokerbg/1280/720",
    themeColor: "#e91e63",
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
    titleLogo: "images/titles/barbie-logo.png",
    language: "English",
    year: 2014,
    poster: "https://picsum.photos/seed/interstellar/300/450",
    backdrop: "https://picsum.photos/seed/interstellarbg/1280/720",
    themeColor: "#e91e63",
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
    titleLogo: "images/titles/barbie-logo.png",
    language: "English",
    year: 2014,
    poster: "https://picsum.photos/seed/whiplash/300/450",
    backdrop: "https://picsum.photos/seed/whiplashbg/1280/720",
    themeColor: "#e91e63",
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
    titleLogo: "images/titles/barbie-logo.png",
    language: "English",
    year: 2010,
    poster: "https://picsum.photos/seed/inception/300/450",
    backdrop: "https://picsum.photos/seed/inceptionbg/1280/720",
    themeColor: "#e91e63",
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
