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

const promptInput = document.getElementById('promptInput');
const answerOutput = document.getElementById('answerOutput');
const generateButton = document.getElementById('generateButton');

function makeAIAnswer(prompt) {
  if (!prompt.trim()) {
    return 'Please enter a prompt above to generate an answer.';
  }

  return `Here is a strong starting point for your prompt:\n\n${prompt}\n\nSuggested response:\nUse this content to refine your message, clarify your goal, and make it more engaging. Focus on the main idea and keep the wording clear.`;
}

if (generateButton && promptInput && answerOutput) {
  generateButton.addEventListener('click', () => {
    answerOutput.value = 'Generating answer...';
    window.setTimeout(() => {
      answerOutput.value = makeAIAnswer(promptInput.value);
      answerOutput.scrollTop = 0;
    }, 250);
  });
}
