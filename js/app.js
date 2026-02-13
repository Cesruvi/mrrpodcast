(function(){
  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = String(new Date().getFullYear());

  async function loadEpisodes(){
    const grid = document.getElementById("episodesGrid");
    if(!grid) return;

    try{
      const res = await fetch("data/episodes.json", { cache: "no-store" });
      const eps = await res.json();

      grid.innerHTML = eps.slice(0,3).map(ep => {
        const title = esc(String(ep.title||""));
        const img = escAttr(String(ep.image||""));
        const play = escAttr(String(ep.playUrl||"#"));
        const info = escAttr(String(ep.infoUrl||"#"));

        return `
          <article class="episode">
            <div class="episode-cover" style="background-image:url('${img}')"></div>
            <div class="episode-body">
              <h3 class="episode-title">${title}</h3>
              <div class="episode-actions">
                <a class="btn btn-primary" href="${play}">PLAY RIGHT NOW</a>
                <a class="btn btn-outline" href="${info}">MORE INFO</a>
              </div>
            </div>
          </article>
        `;
      }).join("");
    }catch(e){
      grid.innerHTML = '<div class="card"><h3>Error</h3><p class="muted">No se pudieron cargar los episodios.</p></div>';
    }
  }

  function initSubscribe(){
    const form = document.getElementById("subscribeForm");
    if(!form) return;

    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const name = (form.elements.namedItem("name")?.value || "").trim();
      const email = (form.elements.namedItem("email")?.value || "").trim();
      if(!email) return;

      const to = "you@example.com"; // TODO: cambia esto por tu email
      const subject = encodeURIComponent("Subscribe: El Ático de las Historias");
      const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n`);
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }

  function esc(str){
    return str.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  function escAttr(str){ return String(str).replace(/"/g,"&quot;"); }

  loadEpisodes();
  initSubscribe();
})();