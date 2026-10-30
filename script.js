const folderTabs = [...document.querySelectorAll(".folder-tab")];
const folderPanels = [...document.querySelectorAll(".folder-panel")];
const tablist = document.querySelector(".folder-tabs");

// Sem JavaScript, as abas continuam sendo âncoras e todas as pastas ficam visíveis.
tablist.setAttribute("role", "tablist");
folderTabs.forEach((tab, index) => {
  tab.setAttribute("role", "tab");
  tab.setAttribute("aria-controls", folderPanels[index].id);
  folderPanels[index].setAttribute("role", "tabpanel");
  folderPanels[index].tabIndex = 0;
});

function selectFolder(index, focus = false) {
  folderTabs.forEach((tab, current) => {
    const selected = index === current;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    folderPanels[current].hidden = !selected;
  });
  if (focus) folderTabs[index].focus();
}

function folderFromHash() {
  const index = folderPanels.findIndex(
    (panel) => `#${panel.id}` === location.hash,
  );
  if (index !== -1) selectFolder(index);
}

selectFolder(0);
folderFromHash();
window.addEventListener("hashchange", folderFromHash);
document.querySelectorAll('a[href="#projetos"]').forEach((link) => {
  link.addEventListener("click", () => selectFolder(0));
});

folderTabs.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    event.preventDefault();
    selectFolder(index);
    history.replaceState(null, "", tab.getAttribute("href"));
  });
  tab.addEventListener("keydown", (event) => {
    const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? folderTabs.length - 1
          : (index +
              (event.key === "ArrowRight" ? 1 : -1) +
              folderTabs.length) %
            folderTabs.length;
    selectFolder(next, true);
    history.replaceState(null, "", folderTabs[next].getAttribute("href"));
  });
});

const projects = {
  fibrac: {
    title: "Fibrac",
    year: "2025 · Tecnologia & sustentabilidade",
    description:
      "Máquina semi-automatizada para a produção de azulejos à base de fibra de coco. O projeto conecta tecnologia e sustentabilidade, transformando esse material em uma possibilidade para a produção de azulejos.",
    image: "assets/fibrac.png",
    alt: "Equipe do Fibrac apresentando o projeto na FEBIC",
    crop: "fibrac-crop",
    repository: "https://github.com/AnaCelia1827/area_operador_projetofibrac",
  },
  cobasi: {
    title: "Cobasi Shelter",
    year: "2026 · Jogo digital educativo",
    description:
      "Jogo digital educativo com o objetivo de conscientizar sobre a importância da adoção de animais. Uma forma de aproximar tecnologia, aprendizado e cuidado com os animais por meio de uma experiência interativa.",
    image: "assets/cobasi-shelter.png",
    alt: "Ana Célia testando o jogo Cobasi Shelter em um notebook",
    crop: "cobasi-crop",
    repository: "https://github.com/AnaCelia1827/CobasiShelter",
  },
  georisco: {
    title: "GeoRisco Santo André",
    year: "2026 · Inteli · Garotas do ENIAC",
    description:
      "Aplicação web georreferenciada para apoiar a Defesa Civil de Santo André no cadastro, consulta e monitoramento de famílias residentes em áreas de risco. O projeto reúne informações sobre moradias e vulnerabilidades para apoiar ações preventivas e prioridades de evacuação. Desenvolvido com React, TypeScript, Node.js e PostgreSQL.",
    poster: true,
    repository: "https://git.inteli.edu.br/publico/2026-1b/t25/g05",
  },
  stark: {
    title: "Stark",
    year: "2026 · Hack4Freedom · UX/UI & front-end",
    description:
      "Plataforma que conecta microcapacitação, trabalho digital e pagamentos para mulheres em vulnerabilidade econômica. A jornada aproxima o aprendizado de tarefas financiadas, com avaliação humana e pagamentos pela Lightning Network. Minha participação: UX/UI e front-end. Desenvolvida com React, TypeScript, Python e Flask.",
    poster: true,
    repository: "https://github.com/AnaCelia1827/Hack4freedom",
  },
};

const dialog = document.querySelector("#project-dialog");
const dialogImage = document.querySelector("#dialog-image");
let projectTrigger;

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projects[button.dataset.project];
    projectTrigger = button;
    document.querySelector("#dialog-title").textContent = project.title;
    document.querySelector("#dialog-year").textContent = project.year;
    document.querySelector("#dialog-description").textContent =
      project.description;
    dialogImage.className = `dialog-image project-image ${project.crop || ""}`;
    if (project.poster) {
      const poster = button.querySelector(".project-poster").cloneNode(true);
      dialogImage.replaceChildren(poster);
    } else {
      const image = new Image(591, 1280);
      image.src = project.image;
      image.alt = project.alt;
      dialogImage.replaceChildren(image);
    }
    document.querySelector("#dialog-repository").href = project.repository;
    document.querySelector("#dialog-contact").href =
      `mailto:anaceliaaugusta@gmail.com?subject=${encodeURIComponent(`Vamos conversar sobre o ${project.title}?`)}`;
    dialog.showModal();
  });
});

document
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  if (
    event.target === dialog &&
    (event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom)
  )
    dialog.close();
});
dialog.addEventListener("close", () => projectTrigger?.focus());

// A animação usa translate para preservar a inclinação própria de cada cartão.
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (!reducedMotion.matches && "IntersectionObserver" in window) {
  const revealTargets = document.querySelectorAll(
    ".about-heading, .about-copy, .section-heading, .skill-card, .archive-intro, .folder, .contact-top, .email-link",
  );
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
  );

  revealTargets.forEach((element) => {
    if (element.classList.contains("skill-card")) {
      const index = [...element.parentElement.children].indexOf(element);
      element.style.setProperty("--reveal-delay", `${index * 80}ms`);
    }
    element.classList.add("reveal-pending");
    revealObserver.observe(element);
  });
  reducedMotion.addEventListener("change", (event) => {
    if (!event.matches) return;
    revealObserver.disconnect();
    revealTargets.forEach((element) => element.classList.add("is-revealed"));
  });
}
