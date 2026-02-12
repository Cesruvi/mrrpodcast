const episodes = [
  {
    id: "ep-001",
    title: "Pensar con claridad en tiempos de ruido",
    date: "5 Feb 2026",
    duration: "42 min",
    description:
      "Episodio sobre toma de decisiones cuando hay exceso de información y presión por publicar rápido.",
    cover:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80",
    spotifyEmbed:
      "https://open.spotify.com/embed/episode/7makk4oTQel546B0PZlDM5?utm_source=generator",
    platforms: [
      { label: "Spotify", url: "https://open.spotify.com/" },
      { label: "Apple Podcasts", url: "https://podcasts.apple.com/" },
      { label: "YouTube Music", url: "https://music.youtube.com/" },
    ],
    slides: [
      {
        image:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
        caption: "Mapa mental de ideas principales.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
        caption: "Checklist de decisión del episodio.",
      },
    ],
    sources: [
      { label: "Artículo sobre sesgos cognitivos", url: "https://fs.blog/cognitive-bias/" },
      { label: "Investigación sobre atención", url: "https://www.apa.org/topics/attention" },
    ],
  },
  {
    id: "ep-002",
    title: "Cómo investigar un tema antes de grabar",
    date: "29 Ene 2026",
    duration: "37 min",
    description:
      "Proceso para preparar una entrevista y convertir fuentes técnicas en una conversación entendible.",
    cover:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80",
    spotifyEmbed:
      "https://open.spotify.com/embed/episode/7makk4oTQel546B0PZlDM5?utm_source=generator",
    platforms: [
      { label: "Spotify", url: "https://open.spotify.com/" },
      { label: "Apple Podcasts", url: "https://podcasts.apple.com/" },
      { label: "YouTube Music", url: "https://music.youtube.com/" },
    ],
    slides: [
      {
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
        caption: "Flujo de investigación: hipótesis, contraste, guion.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
        caption: "Matriz de fuentes primarias y secundarias.",
      },
    ],
    sources: [
      { label: "Poynter - Fact-checking", url: "https://www.poynter.org/fact-checking/" },
      { label: "Nieman Lab", url: "https://www.niemanlab.org/" },
    ],
  },
  {
    id: "ep-003",
    title: "Publicar sin quemarse: ritmo sostenible",
    date: "22 Ene 2026",
    duration: "33 min",
    description:
      "Diseño de calendario editorial para sostener calidad, salud y consistencia sin perder creatividad.",
    cover:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    spotifyEmbed:
      "https://open.spotify.com/embed/episode/7makk4oTQel546B0PZlDM5?utm_source=generator",
    platforms: [
      { label: "Spotify", url: "https://open.spotify.com/" },
      { label: "Apple Podcasts", url: "https://podcasts.apple.com/" },
      { label: "YouTube Music", url: "https://music.youtube.com/" },
    ],
    slides: [
      {
        image:
          "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
        caption: "Calendario semanal de producción.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
        caption: "Indicadores de carga de trabajo real.",
      },
    ],
    sources: [
      { label: "Guía de productividad saludable", url: "https://www.mindtools.com/" },
      { label: "Harvard Business Review", url: "https://hbr.org/" },
    ],
  },
];

const blogPosts = [
  {
    title: "Qué no se oye en el episodio sobre claridad mental",
    date: "6 Feb 2026",
    excerpt:
      "Notas de preparación, preguntas descartadas y un mapa de lectura para profundizar en el episodio 001.",
    tag: "Detrás de micro",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    related: "Relacionado con ep-001",
  },
  {
    title: "Checklist para convertir una investigación en guion",
    date: "31 Ene 2026",
    excerpt:
      "Plantilla corta para pasar de fuentes sueltas a narrativa clara sin perder rigor técnico.",
    tag: "Método",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80",
    related: "Relacionado con ep-002",
  },
  {
    title: "Sistema semanal para publicar sin saturación",
    date: "23 Ene 2026",
    excerpt:
      "Cómo organizar producción, edición y promoción con bloques realistas para no romper el ritmo.",
    tag: "Curiosidades",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    related: "Relacionado con ep-003",
  },
];

const episodesGrid = document.querySelector("#episodes-grid");
const blogGrid = document.querySelector("#blog-grid");
const dialog = document.querySelector("#episode-dialog");
const closeDialogBtn = document.querySelector("#close-dialog");
const slidePrev = document.querySelector("#slide-prev");
const slideNext = document.querySelector("#slide-next");

let activeEpisode = null;
let activeSlideIndex = 0;

function createPlatformLinks(items) {
  return items
    .map(
      (item) =>
        `<a href="${item.url}" target="_blank" rel="noreferrer" class="btn btn-ghost">${item.label}</a>`
    )
    .join("");
}

function renderEpisodes() {
  episodesGrid.innerHTML = episodes
    .map(
      (episode) => `
      <article class="episode-card reveal">
        <img src="${episode.cover}" alt="Portada ${episode.title}" loading="lazy" />
        <p class="episode-meta">${episode.date} · ${episode.duration}</p>
        <h3>${episode.title}</h3>
        <p>${episode.description}</p>
        <iframe
          src="${episode.spotifyEmbed}"
          title="Escuchar ${episode.title} en Spotify"
          loading="lazy"
          allowfullscreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
        <div class="card-actions">
          <button class="btn btn-solid" type="button" data-open-episode="${episode.id}">Abrir ficha</button>
          ${createPlatformLinks(episode.platforms)}
        </div>
      </article>
    `
    )
    .join("");
}

function renderBlog() {
  blogGrid.innerHTML = blogPosts
    .map(
      (post) => `
      <article class="blog-card reveal">
        <img src="${post.image}" alt="Imagen de ${post.title}" loading="lazy" />
        <span class="tag">${post.tag}</span>
        <p class="episode-meta">${post.date}</p>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <p class="episode-meta">${post.related}</p>
      </article>
    `
    )
    .join("");
}

function fillDialog(episode) {
  document.querySelector("#dialog-meta").textContent = `${episode.date} · ${episode.duration}`;
  document.querySelector("#dialog-title").textContent = episode.title;
  document.querySelector("#dialog-player").src = episode.spotifyEmbed;
  document.querySelector("#dialog-description").textContent = episode.description;

  const sources = document.querySelector("#dialog-sources");
  sources.innerHTML = episode.sources
    .map((source) => `<li><a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a></li>`)
    .join("");

  const platformLinks = document.querySelector("#dialog-platforms");
  platformLinks.innerHTML = episode.platforms
    .map((platform) => `<li><a href="${platform.url}" target="_blank" rel="noreferrer">${platform.label}</a></li>`)
    .join("");
}

function renderSlide() {
  if (!activeEpisode) return;
  const slide = activeEpisode.slides[activeSlideIndex];
  const image = document.querySelector("#slide-image");
  image.src = slide.image;
  image.alt = `Diapositiva ${activeSlideIndex + 1} de ${activeEpisode.title}`;
  document.querySelector("#slide-caption").textContent = slide.caption;
}

function openEpisodeDialog(episodeId) {
  activeEpisode = episodes.find((item) => item.id === episodeId);
  if (!activeEpisode) return;
  activeSlideIndex = 0;
  fillDialog(activeEpisode);
  renderSlide();
  dialog.showModal();
}

episodesGrid.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const episodeId = target.dataset.openEpisode;
  if (episodeId) openEpisodeDialog(episodeId);
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("close", () => {
  document.querySelector("#dialog-player").src = "";
});

slidePrev.addEventListener("click", () => {
  if (!activeEpisode) return;
  activeSlideIndex = (activeSlideIndex - 1 + activeEpisode.slides.length) % activeEpisode.slides.length;
  renderSlide();
});

slideNext.addEventListener("click", () => {
  if (!activeEpisode) return;
  activeSlideIndex = (activeSlideIndex + 1) % activeEpisode.slides.length;
  renderSlide();
});

renderEpisodes();
renderBlog();
