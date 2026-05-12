const tools = [
  {
    name: 'Content Studio',
    description: 'Create blog posts, product descriptions, and ad copy in seconds.',
    tag: 'Writing',
    icon: '✍️'
  },
  {
    name: 'Design Generator',
    description: 'Generate landing page layouts and visual ideas from prompts.',
    tag: 'Design',
    icon: '🎨'
  },
  {
    name: 'Workflow Automator',
    description: 'Automate routine tasks and generate code snippets with AI.',
    tag: 'Automation',
    icon: '⚡'
  },
  {
    name: 'Insight Analyzer',
    description: 'Summarize research, extract insights, and prepare reports.',
    tag: 'Research',
    icon: '🔍'
  },
];

const toolsGrid = document.getElementById('toolsGrid');

if (toolsGrid) {
  tools.forEach(tool => {
    const card = document.createElement('article');
    card.className = 'tool-card';
    card.innerHTML = `
      <div class="tool-icon">${tool.icon}</div>
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

function typeWriter(text, element, speed = 30) {
  let i = 0;
  element.value = '';
  function type() {
    if (i < text.length) {
      element.value += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      element.scrollTop = element.scrollHeight;
      // Add success animation
      element.classList.add('completed');
      setTimeout(() => element.classList.remove('completed'), 1000);
    }
  }
  type();
}

function makeAIAnswer(prompt) {
  if (!prompt.trim()) {
    return 'Please enter a prompt above to generate an answer.';
  }

  const lowerPrompt = prompt.toLowerCase();

  // Check if it's a question
  if (lowerPrompt.includes('?') || lowerPrompt.startsWith('what') || lowerPrompt.startsWith('how') ||
      lowerPrompt.startsWith('why') || lowerPrompt.startsWith('when') || lowerPrompt.startsWith('where') ||
      lowerPrompt.startsWith('who')) {
    return generateQuestionAnswer(prompt);
  }

  // Check if it's about content generation
  if (lowerPrompt.includes('write') || lowerPrompt.includes('create') || lowerPrompt.includes('generate') ||
      lowerPrompt.includes('blog') || lowerPrompt.includes('article') || lowerPrompt.includes('copy')) {
    return generateContentResponse(prompt);
  }

  // Check if it's about design
  if (lowerPrompt.includes('design') || lowerPrompt.includes('ui') || lowerPrompt.includes('ux') ||
      lowerPrompt.includes('layout') || lowerPrompt.includes('visual')) {
    return generateDesignResponse(prompt);
  }

  // Default response
  return `Based on your input: "${prompt}"\n\nHere's a comprehensive response:\n\n${generateGenericResponse(prompt)}\n\nThis answer is generated to be helpful, accurate, and engaging. For more specific guidance, please provide additional context.`;
}

function generateQuestionAnswer(question) {
  const responses = {
    'what is ai': 'AI (Artificial Intelligence) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. It encompasses various technologies including machine learning, natural language processing, computer vision, and robotics.',
    'how does ai work': 'AI works through algorithms and computational models that process data, learn patterns, and make decisions. Machine learning uses statistical techniques to enable computers to improve at tasks with experience, while deep learning uses neural networks inspired by the human brain.',
    'what are ai tools': 'AI tools are software applications that leverage artificial intelligence to perform tasks like content generation, data analysis, image creation, code writing, and automation. They help users be more productive and creative.',
    'why use ai': 'AI can automate repetitive tasks, generate creative content, analyze large datasets quickly, provide personalized recommendations, and assist in decision-making processes. It helps save time and enhance productivity across various domains.'
  };

  const lowerQuestion = question.toLowerCase();
  for (const [key, value] of Object.entries(responses)) {
    if (lowerQuestion.includes(key)) {
      return `Question: ${question}\n\nAnswer: ${value}\n\nThis response is designed to be accurate and informative. AI continues to evolve rapidly, so current capabilities may expand over time.`;
    }
  }

  return `Question: ${question}\n\nAnswer: This appears to be a specific question. While I can provide general guidance, for the most accurate and up-to-date information on this topic, I recommend consulting reliable sources or subject matter experts.\n\nGeneral approach: Break down complex questions into smaller parts, research each component, and synthesize the information logically.`;
}

function generateContentResponse(prompt) {
  return `Content Generation Request: ${prompt}\n\nGenerated Content:\n\n[Opening Hook] Did you know that artificial intelligence is revolutionizing how we create and consume content?\n\n[Main Body] Based on your request, here's a structured approach:\n\n1. **Define Your Objective**: Clearly outline what you want to achieve\n2. **Research & Gather Data**: Collect relevant information and insights\n3. **Structure Your Content**: Organize ideas logically with compelling headlines\n4. **Add Value**: Include actionable insights, examples, and practical tips\n5. **Optimize for Engagement**: Use storytelling techniques and clear language\n\n[Call to Action] Ready to transform your content strategy with AI-powered tools?\n\nThis framework ensures your content is engaging, valuable, and conversion-focused.`;
}

function generateDesignResponse(prompt) {
  return `Design Request: ${prompt}\n\nDesign Recommendations:\n\n🎨 **Visual Strategy**\n- Use a clean, modern aesthetic with ample white space\n- Implement a consistent color palette (primary: #4f46e5, secondary: #6366f1)\n- Choose readable typography (Inter font family recommended)\n\n📱 **Layout Principles**\n- Mobile-first responsive design\n- Grid-based layouts for consistency\n- Card-based components for modular content\n\n✨ **Interactive Elements**\n- Smooth hover animations and transitions\n- Loading states for better user experience\n- Progressive disclosure of information\n\n🎯 **Best Practices**\n- Ensure accessibility (WCAG 2.1 AA compliance)\n- Optimize for performance and fast loading\n- Test across multiple devices and browsers\n\nThis design approach creates an attractive, user-friendly experience that converts visitors into users.`;
}

function generateGenericResponse(prompt) {
  return `Thank you for your input: "${prompt}"\n\nHere's a thoughtful response tailored to your request:\n\n**Key Insights:**\n- Focus on clarity and specificity in your prompts\n- Break complex requests into manageable components\n- Consider the context and audience for your content\n\n**Actionable Steps:**\n1. Define your goals clearly\n2. Gather relevant information\n3. Structure your approach logically\n4. Iterate and refine based on feedback\n\n**Pro Tips:**\n- Use specific examples to illustrate concepts\n- Maintain consistency in tone and style\n- Test and validate your results\n\nThis structured approach ensures better outcomes and more satisfying results.`;
}

if (generateButton && promptInput && answerOutput) {
  generateButton.addEventListener('click', () => {
    const originalText = generateButton.textContent;
    generateButton.textContent = 'Generating...';
    generateButton.disabled = true;
    generateButton.classList.add('loading');

    answerOutput.value = '🤖 AI is thinking...';
    answerOutput.classList.add('thinking');

    window.setTimeout(() => {
      const response = makeAIAnswer(promptInput.value);
      typeWriter(response, answerOutput);
      answerOutput.classList.remove('thinking');

      generateButton.textContent = originalText;
      generateButton.disabled = false;
      generateButton.classList.remove('loading');
    }, 1500); // Slightly longer delay for better UX
  });
}
