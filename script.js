const folderTabs = [...document.querySelectorAll('.folder-tab')];
const folderPanels = [...document.querySelectorAll('.folder-panel')];
const tablist = document.querySelector('.folder-tabs');

// Sem JavaScript, as abas continuam sendo âncoras e todas as pastas ficam visíveis.
tablist.setAttribute('role', 'tablist');
folderTabs.forEach((tab, index) => {
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-controls', folderPanels[index].id);
  folderPanels[index].setAttribute('role', 'tabpanel');
  folderPanels[index].tabIndex = 0;
});

function selectFolder(index, focus = false) {
  folderTabs.forEach((tab, current) => {
    const selected = index === current;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    folderPanels[current].hidden = !selected;
  });
  if (focus) folderTabs[index].focus();
}

function folderFromHash() {
  const index = folderPanels.findIndex(panel => `#${panel.id}` === location.hash);
  if (index !== -1) selectFolder(index);
}

selectFolder(0);
folderFromHash();
window.addEventListener('hashchange', folderFromHash);

folderTabs.forEach((tab, index) => {
  tab.addEventListener('click', event => {
    event.preventDefault();
    selectFolder(index);
    history.replaceState(null, '', tab.getAttribute('href'));
  });
  tab.addEventListener('keydown', event => {
    const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0
      : event.key === 'End' ? folderTabs.length - 1
      : (index + (event.key === 'ArrowRight' ? 1 : -1) + folderTabs.length) % folderTabs.length;
    selectFolder(next, true);
    history.replaceState(null, '', folderTabs[next].getAttribute('href'));
  });
});

const projects = {
  fibrac: {
    title: 'Fibrac',
    year: '2025 · Tecnologia & sustentabilidade',
    description: 'Máquina semi-automatizada para a produção de azulejos à base de fibra de coco. O projeto conecta tecnologia e sustentabilidade, transformando esse material em uma possibilidade para a produção de azulejos.',
    image: 'assets/fibrac.png',
    alt: 'Equipe do Fibrac apresentando o projeto na FEBIC',
    crop: 'fibrac-crop'
  },
  cobasi: {
    title: 'Cobasi Shelter',
    year: '2026 · Jogo digital educativo',
    description: 'Jogo digital educativo com o objetivo de conscientizar sobre a importância da adoção de animais. Uma forma de aproximar tecnologia, aprendizado e cuidado com os animais por meio de uma experiência interativa.',
    image: 'assets/cobasi-shelter.png',
    alt: 'Ana Célia testando o jogo Cobasi Shelter em um notebook',
    crop: 'cobasi-crop'
  }
};

const dialog = document.querySelector('#project-dialog');
const dialogImage = document.querySelector('#dialog-image');
let projectTrigger;

document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    projectTrigger = button;
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-year').textContent = project.year;
    document.querySelector('#dialog-description').textContent = project.description;
    dialogImage.className = `dialog-image project-image ${project.crop}`;
    const image = new Image(591, 1280);
    image.src = project.image;
    image.alt = project.alt;
    dialogImage.replaceChildren(image);
    document.querySelector('#dialog-contact').href = `mailto:anaceliaaugusta@gmail.com?subject=${encodeURIComponent(`Vamos conversar sobre o ${project.title}?`)}`;
    dialog.showModal();
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => projectTrigger?.focus());
