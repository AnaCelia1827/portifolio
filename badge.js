(() => {
  const scene = document.querySelector("#interactive-badge");
  if (!scene) return;
  const assembly = scene.querySelector(".badge-assembly");
  const card = scene.querySelector(".badge-card-wrap");
  const button = scene.querySelector(".badge-turn");
  const front = scene.querySelector(".badge-front");
  const back = scene.querySelector(".badge-back");
  const hint = scene.querySelector(".badge-hint");
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
  let flipped = false;
  let sway;
  let pointerFrame = 0;
  let bounds;
  let pointerX = 0;
  let pointerY = 0;

  function resetTilt() {
    cancelAnimationFrame(pointerFrame);
    pointerFrame = 0;
    card.style.removeProperty("--badge-tilt-x");
    card.style.removeProperty("--badge-tilt-y");
    bounds = null;
  }

  function tilt() {
    pointerFrame = 0;
    if (motion.matches || !finePointer.matches) return;
    bounds ??= card.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, (pointerX - bounds.left) / bounds.width * 2 - 1));
    const y = Math.max(-1, Math.min(1, (pointerY - bounds.top) / bounds.height * 2 - 1));
    card.style.setProperty("--badge-tilt-x", `${-y * 5}deg`);
    card.style.setProperty("--badge-tilt-y", `${x * 7}deg`);
  }

  button.addEventListener("pointermove", event => {
    if (motion.matches || !finePointer.matches || event.pointerType !== "mouse") return;
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (!pointerFrame) pointerFrame = requestAnimationFrame(tilt);
  });
  button.addEventListener("pointerleave", resetTilt);
  button.addEventListener("blur", resetTilt);

  button.addEventListener("click", () => {
    resetTilt();
    flipped = !flipped;
    scene.classList.toggle("is-flipped", flipped);
    front.inert = flipped;
    back.inert = !flipped;
    front.setAttribute("aria-hidden", String(flipped));
    back.setAttribute("aria-hidden", String(!flipped));
    button.setAttribute("aria-pressed", String(flipped));
    button.setAttribute("aria-label", flipped ? "Voltar para a frente do crachá" : "Virar crachá para ver o verso");
    hint.querySelector("span").textContent = flipped ? "clique para ver a frente" : "clique para virar";
    const status = document.querySelector("#selection-status");
    if (status) status.textContent = flipped ? "Verso do crachá." : "Frente do crachá.";
    const currentTransform = getComputedStyle(assembly).transform;
    sway?.cancel();
    if (!motion.matches && typeof assembly.animate === "function") {
      const rest = Number.parseFloat(getComputedStyle(scene).getPropertyValue("--badge-rest-angle")) || 0;
      const kick = matchMedia("(max-width: 1050px)").matches ? 1.5 : 7;
      sway = assembly.animate([
        { transform: currentTransform, offset: 0 },
        { transform: `rotateZ(${rest + kick}deg)`, offset: .2 },
        { transform: `rotateZ(${rest - kick * .45}deg)`, offset: .48 },
        { transform: `rotateZ(${rest + kick * .22}deg)`, offset: .73 },
        { transform: `rotateZ(${rest}deg)`, offset: 1 },
      ], { duration: 950, easing: "cubic-bezier(.22,.7,.2,1)" });
    }
  });

  motion.addEventListener("change", () => {
    resetTilt();
    if (motion.matches) sway?.cancel();
  });
  window.addEventListener("resize", resetTilt);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      resetTilt();
      sway?.cancel();
    }
  });
  button.hidden = false;
  hint.hidden = false;
})();
