// DOM Elements
const toolsContainer = document.getElementById('tools-container');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const themeToggle = document.getElementById('theme-toggle');
const overlay = document.getElementById('tool-overlay');
const toolFrame = document.getElementById('tool-frame');
const closeTool = document.getElementById('close-tool');

// Theme Handling
function setTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  localStorage.setItem('darkMode', isDark);
}

// On load
window.addEventListener('DOMContentLoaded', () => {
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  setTheme(savedDarkMode);

  // Load tools
  fetch('tool.json')
    .then(res => res.json())
    .then(data => {
      window.toolsData = data;
      populateCategories(data);
      displayTools(data);
      setupSearchAndFilter(data);
    })
    .catch(err => {
      toolsContainer.innerHTML = `<p>Error loading tools. Please try again later.</p>`;
      console.error("Failed to load tool.json:", err);
    });
});

// Populate Category Filter
function populateCategories(tools) {
  const categories = [...new Set(tools.map(t => t.category))];
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

// Display Tools
function displayTools(tools) {
  toolsContainer.innerHTML = '';
  tools.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
      <i class="${tool.icon} icon"></i>
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <span class="category">${tool.category}</span>
    `;
    card.addEventListener('click', () => openTool(tool.url));
    // Lazy load animation
    card.style.animationDelay = '0.1s';
    toolsContainer.appendChild(card);
  });
}

// Search & Filter Logic
function setupSearchAndFilter(tools) {
  const filterTools = () => {
    const query = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const filtered = tools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(query) || 
                            tool.description.toLowerCase().includes(query);
      const matchesCategory = !selectedCategory || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    displayTools(filtered);
  };

  searchInput.addEventListener('input', filterTools);
  categoryFilter.addEventListener('change', filterTools);
}

// Fullscreen Tool View
function openTool(url) {
  toolFrame.src = url;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

closeTool.addEventListener('click', () => {
  overlay.classList.remove('active');
  toolFrame.src = '';
  document.body.style.overflow = '';
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('dark-mode');
  setTheme(isDark);
});