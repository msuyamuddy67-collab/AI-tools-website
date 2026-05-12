const tools = [
  {
    name: 'Content Studio',
    description: 'Create blog posts, product descriptions, and ad copy in seconds.',
    tag: 'Writing',
  },
  {
    name: 'Design Generator',
    description: 'Generate landing page layouts and visual ideas from prompts.',
    tag: 'Design',
  },
  {
    name: 'Workflow Automator',
    description: 'Automate routine tasks and generate code snippets with AI.',
    tag: 'Automation',
  },
  {
    name: 'Insight Analyzer',
    description: 'Summarize research, extract insights, and prepare reports.',
    tag: 'Research',
  },
];

const toolsGrid = document.getElementById('toolsGrid');

if (toolsGrid) {
  tools.forEach(tool => {
    const card = document.createElement('article');
    card.className = 'tool-card';
    card.innerHTML = `
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <span class="tag">${tool.tag}</span>
    `;
    toolsGrid.appendChild(card);
  });
}

const demoButton = document.getElementById('demoButton');
if (demoButton) {
  demoButton.addEventListener('click', () => {
    window.location.href = '#tools';
  });
}
