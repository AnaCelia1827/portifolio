document.documentElement.classList.add("js");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const book = document.querySelector("#project-book");
const bookScroll = document.querySelector(".book-scroll");
const interior = document.querySelector("#book-interior");
const cover = document.querySelector("#book-cover");
const indexButton = document.querySelector("#book-index");
const ribbon = document.querySelector(".book-ribbon");
const rightPage = document.querySelector(".book-page-right");
const sheets = [...document.querySelectorAll(".project-sheet")];
const projects = new Map(sheets.map(sheet => [sheet.dataset.project, sheet]));
const hackProjects = new Map([...document.querySelectorAll("[data-hack-project]")].map(card => [card.dataset.hackProject, card]));
const chapters = [...document.querySelectorAll("[data-chapter]")];
const live = document.querySelector("#selection-status");
let selected = "fibrac";
let currentFilter = "all";
let visibleKeys = [...projects.keys()];
let saved = new Set();
let pageAnimation;
let showingCase = false;
try {
  const stored = JSON.parse(localStorage.getItem("ana-celia-saved-projects") || "[]");
  if (Array.isArray(stored)) saved = new Set(stored.filter(key => projects.has(key)));
} catch { /* Sem armazenamento, os favoritos continuam disponíveis nesta visita. */ }
const emptyPage = document.createElement("p");
emptyPage.className = "empty-project-page";
emptyPage.textContent = "Escolha outro filtro para continuar explorando meus projetos.";
emptyPage.hidden = true;
rightPage.prepend(emptyPage);

function titleOf(key) { return (projects.get(key) || hackProjects.get(key)).querySelector("h3").textContent.trim(); }
function announce(message) { live.textContent = message; }
function moveBookViewport(toCase = false, instant = false) {
  showingCase = toCase;
  book.classList.toggle("show-index", !showingCase);
  // As páginas agora crescem com o conteúdo; no celular, mostramos uma por vez.
  bookScroll.scrollLeft = 0;
}
function setBookOpen(open, focus = false, toCase = false) {
  const pageToShow = open ? toCase : showingCase;
  book.classList.toggle("is-open", open);
  interior.inert = !open;
  interior.setAttribute("aria-hidden", String(!open));
  cover.setAttribute("aria-expanded", String(open));
  cover.tabIndex = open ? -1 : 0;
  indexButton.hidden = !open;
  ribbon.hidden = !open;
  requestAnimationFrame(() => {
    moveBookViewport(pageToShow);
    if (focus) {
      if (!open) cover.focus({ preventScroll: true });
      else if (toCase && projects.has(selected)) projects.get(selected).querySelector("h3").focus({ preventScroll: true });
      else chapters.find(link => link.dataset.chapter === selected)?.focus({ preventScroll: true });
    }
  });
}
function updateSaved() {
  document.querySelectorAll("[data-save]").forEach(button => {
    const key = button.dataset.save;
    const isSaved = saved.has(key);
    button.setAttribute("aria-pressed", String(isSaved));
    button.setAttribute("aria-label", `${isSaved ? "Remover dos salvos:" : "Salvar"} ${titleOf(key)}`);
  });
}
function selectChapter(key, animate = true) {
  if (!projects.has(key)) return;
  selected = key;
  pageAnimation?.cancel();
  sheets.forEach(sheet => { sheet.hidden = sheet.dataset.project !== key; });
  emptyPage.hidden = true;
  const heading = projects.get(key).querySelector("h3");
  heading.setAttribute("tabindex", "-1");
  chapters.forEach(link => {
    if (link.dataset.chapter === key) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
  rightPage.scrollTop = 0;
  rightPage.setAttribute("aria-label", `Case: ${titleOf(key)}`);
  document.querySelector("#book-page-status").textContent = `Projeto ${visibleKeys.indexOf(key) + 1} de ${visibleKeys.length} · ${titleOf(key)}`;
  if (animate && book.classList.contains("is-open") && !reducedMotion.matches && typeof rightPage.animate === "function") {
    pageAnimation = rightPage.animate(
      [{ opacity: .35, transform: "perspective(900px) rotateY(-7deg)", transformOrigin: "left center" }, { opacity: 1, transform: "none", transformOrigin: "left center" }],
      { duration: 440, easing: "cubic-bezier(.16,1,.3,1)" },
    );
  }
}
function applyFilter(filter = currentFilter) {
  currentFilter = filter;
  visibleKeys = sheets.filter(sheet => filter === "all" || (filter === "saved" ? saved.has(sheet.dataset.project) : sheet.dataset.category === filter)).map(sheet => sheet.dataset.project);
  chapters.forEach(link => { link.parentElement.hidden = !visibleKeys.includes(link.dataset.chapter); });
  document.querySelectorAll("[data-filter]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.filter === filter)));
  document.querySelectorAll("[data-book-tab]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.bookTab === filter)));
  document.querySelector(".chapter-empty").hidden = visibleKeys.length > 0;
  if (!visibleKeys.length) {
    sheets.forEach(sheet => { sheet.hidden = true; });
    emptyPage.hidden = false;
    document.querySelector("#book-page-status").textContent = "Nenhum projeto nesta seleção";
  } else selectChapter(visibleKeys.includes(selected) ? selected : visibleKeys[0], false);
}
function openProject(key, { focus = true, scroll = true } = {}) {
  const hack = hackProjects.get(key);
  if (hack) {
    hack.open = true;
    if (focus) hack.querySelector("summary").focus({ preventScroll: true });
    if (scroll) hack.scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth", block: "start" });
    return;
  }
  if (!projects.has(key)) return;
  if (!visibleKeys.includes(key)) applyFilter("all");
  selectChapter(key);
  setBookOpen(true, focus, true);
  if (scroll) document.querySelector("#projetos").scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth", block: "start" });
}
cover.addEventListener("click", () => setBookOpen(true, true));
ribbon.addEventListener("click", () => setBookOpen(false, true));
indexButton.addEventListener("click", () => {
  moveBookViewport(false);
  chapters.find(link => link.dataset.chapter === selected && !link.parentElement.hidden)?.focus({ preventScroll: true });
});
chapters.forEach(link => link.addEventListener("click", event => {
  event.preventDefault();
  const key = link.dataset.chapter;
  history.replaceState(null, "", `#projeto-${key}`);
  openProject(key, { scroll: false });
}));
document.querySelectorAll("[data-open-project]").forEach(link => link.addEventListener("click", event => {
  const key = link.dataset.openProject;
  if (projects.has(key)) return;
  event.preventDefault();
  history.replaceState(null, "", `#projeto-${key}`);
  openProject(key);
}));
document.querySelectorAll("[data-open-book]").forEach(link => link.addEventListener("click", () => setBookOpen(true)));
document.querySelector(".book-filters").hidden = false;
document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
  applyFilter(button.dataset.filter);
  announce(`${visibleKeys.length} ${visibleKeys.length === 1 ? "projeto" : "projetos"} nesta seleção.`);
}));
document.querySelectorAll("[data-book-tab]").forEach(button => button.addEventListener("click", () => {
  applyFilter(button.dataset.bookTab);
  setBookOpen(true, true, false);
}));
document.querySelectorAll("[data-save]").forEach(button => {
  button.hidden = false;
  button.addEventListener("click", () => {
    const key = button.dataset.save;
    const wasSaved = saved.has(key);
    wasSaved ? saved.delete(key) : saved.add(key);
    let persistent = true;
    try { localStorage.setItem("ana-celia-saved-projects", JSON.stringify([...saved])); } catch { persistent = false; }
    updateSaved();
    if (currentFilter === "saved") {
      applyFilter();
      document.querySelector(".index-options").open = true;
      document.querySelector('[data-filter="saved"]').focus();
      moveBookViewport(false);
    }
    announce(`${titleOf(key)}: ${wasSaved ? "removido dos salvos" : persistent ? "projeto salvo" : "salvo nesta visita"}.`);
  });
});

const stackData = {
  "typescript": {
    "name": "TypeScript",
    "description": "Desenvolvimento web com tipagem. No GeoRisco, faz parte da stack da plataforma de gestão de áreas de risco.",
    "project": "georisco"
  },
  "node": {
    "name": "Node.js",
    "description": "Back-end, APIs e regras de negócio. No GeoRisco, integra a stack de cadastro, consulta e acompanhamento de famílias.",
    "project": "georisco"
  },
  "react": {
    "name": "React",
    "description": "Interfaces organizadas em componentes. No Stark, sustenta o front-end da jornada de capacitação, trabalho e pagamentos.",
    "project": "stark"
  },
  "mongodb": {
    "name": "MongoDB",
    "description": "Banco de dados orientado a documentos. Integra as ferramentas previstas para a plataforma Banco Inter.",
    "project": "banco-inter"
  },
  "postgresql": {
    "name": "PostgreSQL",
    "description": "Banco de dados relacional. No GeoRisco, organiza as informações de áreas de risco e famílias cadastradas.",
    "project": "georisco"
  },
  "sql": {
    "name": "SQL",
    "description": "Modelagem relacional e consulta de dados. No GeoRisco, acompanha a organização das informações cadastrais.",
    "project": "georisco"
  },
  "python": {
    "name": "Python",
    "description": "Análise exploratória, preparação de dados e modelagem. No LDC, conecta dados e hipóteses à investigação de modelos preditivos.",
    "project": "ldc"
  },
  "c": {
    "name": "C",
    "description": "Programação estruturada, lógica e trabalho com memória."
  },
  "cpp": {
    "name": "C++",
    "description": "Programação orientada a objetos, estruturas de dados e algoritmos."
  },
  "pandas": {
    "name": "pandas",
    "description": "Tratamento, organização e análise de dados tabulares. Faz parte das ferramentas utilizadas no estudo do LDC.",
    "project": "ldc"
  },
  "scikitlearn": {
    "name": "scikit-learn",
    "description": "Preparação de dados, construção e avaliação de modelos de aprendizado de máquina no estudo do LDC.",
    "project": "ldc"
  },
  "numpy": {
    "name": "NumPy",
    "description": "Arrays e operações numéricas para análise de dados. Integra as ferramentas do estudo de modelagem preditiva do LDC.",
    "project": "ldc"
  }
};
document.querySelectorAll("[data-stack]").forEach(button => {
  button.disabled = false;
  button.addEventListener("click", () => {
    const stack = stackData[button.dataset.stack];
    document.querySelectorAll("[data-stack]").forEach(token => token.setAttribute("aria-pressed", String(token === button)));
    document.querySelector("#stack-title").textContent = stack.name;
    document.querySelector("#stack-description").textContent = stack.description;
    const link = document.querySelector("#stack-project");
    link.hidden = !stack.project;
    document.querySelector(".stack-example-label").hidden = !stack.project;
    if (stack.project) {
      link.dataset.openProject = stack.project;
      link.href = projects.has(stack.project) ? `projetos/${stack.project}.html` : `#projeto-${stack.project}`;
      link.firstChild.textContent = `Explorar ${titleOf(stack.project)} `;
    } else {
      delete link.dataset.openProject;
      link.removeAttribute("href");
    }
    announce(`Stack selecionada: ${stack.name}.`);
  });
});

let paused = false;
try { paused = localStorage.getItem("ana-celia-background-motion") === "paused"; } catch {}
function applyMotion() {
  const isPaused = paused || reducedMotion.matches;
  document.body.classList.toggle("motion-paused", isPaused);
}
reducedMotion.addEventListener("change", () => { applyMotion(); if (reducedMotion.matches) pageAnimation?.cancel(); });

const tin = document.querySelector(".tin-stage");
const tinContents = tin.querySelector(".tin-contents");
tin.tabIndex = 0;
tin.setAttribute("role", "group");
tin.setAttribute("aria-label", "Latinha de ferramentas");
let tinFrame = 0;
let previousTinProgress = -1;
function updateTinScroll() {
  tinFrame = 0;
  const bounds = tin.getBoundingClientRect();
  const start = innerHeight * .94 - bounds.height * .485;
  const end = innerHeight * .12;
  const keyboardFocus = tin.matches(":focus-visible") || tin.querySelector(":focus-visible");
  const progress = reducedMotion.matches || keyboardFocus
    ? 1
    : Math.max(0, Math.min(1, (start - bounds.top) / Math.max(140, start - end)));
  if (Math.abs(progress - previousTinProgress) < .002) return;
  previousTinProgress = progress;
  tin.style.setProperty("--tin-lid-angle", `${-180 * (1 - progress)}deg`);
  tin.style.setProperty("--tin-content-opacity", String(Math.max(0, Math.min(1, (progress - .25) / .5))));
  tinContents.inert = progress < .82;
}
function scheduleTinScroll() {
  if (!tinFrame) tinFrame = requestAnimationFrame(updateTinScroll);
}
window.addEventListener("scroll", scheduleTinScroll, { passive: true });
window.addEventListener("resize", scheduleTinScroll);
tin.addEventListener("focusin", scheduleTinScroll);
tin.addEventListener("focusout", scheduleTinScroll);
reducedMotion.addEventListener("change", scheduleTinScroll);
scheduleTinScroll();
window.addEventListener("resize", () => requestAnimationFrame(() => moveBookViewport(showingCase, true)));

const aliases = { "#painel-projetos": "#projetos", "#painel-formacao": "#formacao", "#painel-comunidade": "#comunidade" };
function handleHash() {
  const alias = aliases[location.hash];
  if (alias) history.replaceState(null, "", alias);
  const target = document.getElementById(location.hash.slice(1));
  const hack = target?.closest("[data-hack-project]");
  if (hack) { openProject(hack.dataset.hackProject, { focus: false }); return; }
  const sheet = target?.closest(".project-sheet");
  if (sheet) { openProject(sheet.dataset.project, { focus: false }); return; }
  const folder = target?.closest(".club-folder");
  if (folder) {
    folder.closest(".community-archive").open = true;
    folder.open = true;
  }
  if (alias && target) requestAnimationFrame(() => target.scrollIntoView());
}
window.addEventListener("hashchange", handleHash);
const copyButton = document.querySelector(".copy-email");
if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    const status = document.querySelector("#copy-status");
    try { await navigator.clipboard.writeText("anaceliaaugusta@gmail.com"); status.textContent = "E-mail copiado!"; }
    catch { status.textContent = "Selecione o endereço acima para copiar."; }
  });
}
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    const entry = entries.find(item => item.isIntersecting);
    if (!entry) return;
    document.querySelectorAll(".nav-link").forEach(link => {
      if (link.getAttribute("href") === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
  document.querySelectorAll("main > section[id], main > footer[id]").forEach(section => observer.observe(section));
}
updateSaved();
applyFilter("all");
applyMotion();
setBookOpen(false);
handleHash();
