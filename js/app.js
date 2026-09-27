// ============================================================
// MOVIE ARCHIVE – Main App Logic
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const isDetail = path.includes("movie.html") || window.location.search.includes("id=");

  if (isDetail || document.getElementById("detail-root")) {
    renderDetailPage();
  } else {
    renderHomePage();
  }
});

/* ---------- HOME PAGE ---------- */
function renderHomePage() {
  const container = document.getElementById("rows-container");
  if (!container) return;

  // Group movies by year (newest first)
  const byYear = {};
  movies.forEach(m => {
    if (!byYear[m.year]) byYear[m.year] = [];
    byYear[m.year].push(m);
  });

  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

  years.forEach(year => {
    const section = document.createElement("section");
    section.className = "year-section";
    section.dataset.year = year;

    section.innerHTML = `
      <div class="year-header">
        <h2 class="year-title">${year} <span class="year-count">(${byYear[year].length})</span></h2>
      </div>
      <div class="slider-wrapper">
        <button class="slider-btn prev" aria-label="Previous">‹</button>
        <div class="slider" data-year="${year}"></div>
        <button class="slider-btn next" aria-label="Next">›</button>
      </div>
    `;

    const slider = section.querySelector(".slider");
    byYear[year].forEach(movie => {
      slider.appendChild(createMovieCard(movie));
    });

    // Arrow controls
    const prevBtn = section.querySelector(".prev");
    const nextBtn = section.querySelector(".next");

    prevBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -slider.clientWidth * 0.8, behavior: "smooth" });
    });
    nextBtn.addEventListener("click", () => {
      slider.scrollBy({ left: slider.clientWidth * 0.8, behavior: "smooth" });
    });

    container.appendChild(section);
  });

  // Search
  const searchInput = document.getElementById("search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      filterMovies(q);
    });
  }
}

function createMovieCard(movie) {
  const card = document.createElement("a");
  card.className = "movie-card";
  card.href = `movie.html?id=${encodeURIComponent(movie.id)}`;
  card.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}" loading="lazy"
         onerror="this.src='https://via.placeholder.com/300x450/222/666?text=No+Poster'">
    <div class="info">
      <div class="title">${movie.title}</div>
      <div class="meta">
        <span>${movie.year}</span>
        <span class="rating">★ ${movie.rating}</span>
      </div>
    </div>
  `;
  return card;
}

function filterMovies(query) {
  const sections = document.querySelectorAll(".year-section");
  let anyVisible = false;

  sections.forEach(section => {
    const cards = section.querySelectorAll(".movie-card");
    let sectionHasMatch = false;

    cards.forEach(card => {
      const title = card.querySelector(".title").textContent.toLowerCase();
      const match = !query || title.includes(query);
      card.style.display = match ? "" : "none";
      if (match) sectionHasMatch = true;
    });

    section.style.display = sectionHasMatch ? "" : "none";
    if (sectionHasMatch) anyVisible = true;
  });

  // Show / hide empty message
  let emptyMsg = document.getElementById("no-results");
  if (!anyVisible && query) {
    if (!emptyMsg) {
      emptyMsg = document.createElement("div");
      emptyMsg.id = "no-results";
      emptyMsg.className = "no-results";
      emptyMsg.textContent = "No movies found.";
      document.getElementById("rows-container").appendChild(emptyMsg);
    }
  } else if (emptyMsg) {
    emptyMsg.remove();
  }
}

/* ---------- DETAIL PAGE ---------- */
function renderDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const movie = movies.find(m => m.id === id);
  const root = document.getElementById("detail-root");
  if (!root) return;

  if (!movie) {
    root.innerHTML = `
      <div class="no-results" style="padding-top:120px">
        <h2>Movie not found</h2>
        <p style="margin-top:12px"><a href="index.html" class="back-btn">← Back to Archive</a></p>
      </div>
    `;
    return;
  }

// ===== ONE BIG SECTION (backdrop + info + gallery) =====
const page = document.createElement("div");
page.className = "detail-page";
page.style.backgroundImage = `url(${movie.backdrop})`;

const theme = movie.themeColor || "#0f0f0f";
document.body.style.backgroundColor = theme;
document.documentElement.style.setProperty('--theme-color', theme);

page.innerHTML = `
  <div class="detail-overlay" style="..."></div>

  <div class="detail-main">
    <!-- Title + Meta + Line -->
    <div class="detail-top">
      <h1 class="detail-title">
        ${movie.titleLogo 
          ? `<img src="${movie.titleLogo}" alt="${movie.title}" class="title-logo">`
          : movie.title}
      </h1>

      <div class="detail-meta-top">
        <span>${movie.year}</span>
        <span class="dot">·</span>
        <span>${movie.runtime}</span>
        <span class="dot">·</span>
        <span>Language: ${movie.language || "English"}</span>
      </div>

      <div class="detail-divider"></div>
    </div>

  <!-- BOTTOM PART: Poster + Info + Score -->
  <div class="detail-content">
    <div class="detail-poster">
      <img src="${movie.poster}" alt="${movie.title}"
           onerror="this.src='https://via.placeholder.com/300x450/222/666?text=No+Poster'">
    </div>

    <div class="detail-info">
      <p class="detail-director">Dir. <strong>${movie.director}</strong></p>
      <p class="detail-synopsis">${movie.synopsis}</p>

      <div class="genre-tags">
        ${movie.genres.map(g => `<span class="genre-tag">${g}</span>`).join("")}
      </div>
    </div>

    <div class="detail-score">
      <div class="score-circle">
        <span>${movie.rating}</span>
      </div>
    </div>
  </div>

  <!-- Gallery -->
  <div class="gallery-section">
    <div class="gallery-header">
      <h2 class="gallery-title">Gallery</h2>
      <div class="gallery-arrow"><i class="fas fa-angle-down"></i></div>
    </div>
    <div class="gallery-grid">
      ${movie.gallery.map((src, i) => `
        <div class="gallery-item" data-src="${src}">
          <img src="${src}" alt="Still ${i + 1}" loading="lazy"
               onerror="this.parentElement.style.display='none'">
        </div>
      `).join("")}
    </div>
  </div>
`;

root.appendChild(page);

  // ===== LIGHTBOX (same as before) =====
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close">×</button>
    <img src="" alt="Full size">
  `;
  document.body.appendChild(lightbox);

  const lbImg = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      lbImg.src = item.dataset.src;
      lightbox.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    lightbox.classList.remove("active");
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") lightbox.classList.remove("active");
  });
}
