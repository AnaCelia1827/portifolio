document.documentElement.classList.add("js");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");
const header = document.querySelector(".site-header");
function setMenu(open, restoreFocus = false) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  navigation.classList.toggle("is-open", open);
  if (restoreFocus) menuButton.focus();
}
menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
navigation.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    setMenu(false);
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    }
  });
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") setMenu(false, true);
});
document.addEventListener("click", event => {
  if (!header.contains(event.target)) setMenu(false);
});
window.matchMedia("(min-width: 801px)").addEventListener("change", event => {
  if (event.matches) setMenu(false);
});
const previousSections = {"#painel-projetos":"#projetos", "#painel-formacao":"#formacao", "#painel-comunidade":"#comunidade"};
function resolvePreviousSection() {
  const destination = previousSections[location.hash];
  if (!destination) return;
  history.replaceState(null, "", destination);
  requestAnimationFrame(() => document.querySelector(destination)?.scrollIntoView());
}
resolvePreviousSection();
window.addEventListener("hashchange", resolvePreviousSection);

// Links diretos para clubes ou cases abrem a pasta correspondente.
function openClubFolderFromHash() {
  const target = document.getElementById(location.hash.slice(1));
  const clubFolder = target?.closest(".club-folder");
  if (clubFolder) clubFolder.open = true;
}
openClubFolderFromHash();
window.addEventListener("hashchange", openClubFolderFromHash);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation.querySelectorAll("a").forEach(link => {
        const sectionId = entry.target.id === "hackathons" ? "projetos" : entry.target.id;
        if (link.getAttribute("href") === `#${sectionId}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, {rootMargin: "-10% 0px -65% 0px", threshold: 0});
  document.querySelectorAll("main section[id], .bio-group[id], footer[id]").forEach(section => observer.observe(section));
}
const copyButton = document.querySelector(".copy-email");
const copyStatus = document.querySelector(".copy-status");
let statusTimer;
if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    clearTimeout(statusTimer);
    try {
      await navigator.clipboard.writeText("anaceliaaugusta@gmail.com");
      copyStatus.textContent = "E-mail copiado!";
    } catch {
      copyStatus.textContent = "Selecione o endereço acima para copiar.";
    }
    statusTimer = setTimeout(() => { copyStatus.textContent = ""; }, 5000);
  });
}
