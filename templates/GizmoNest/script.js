// DOM Elements
        const toolsGrid = document.getElementById('toolsGrid');
        const searchInput = document.getElementById('searchInput');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const themeToggle = document.getElementById('themeToggle');
        const toolModal = document.getElementById('toolModal');
        const closeModal = document.getElementById('closeModal');
        const toolIframe = document.getElementById('toolIframe');
        const modalTitle = document.getElementById('modalTitle');
        const modalIcon = document.getElementById('modalIcon');

        // Initialize the page
        function init() {
            loadTools(toolsData.tools);
            setupEventListeners();
            loadThemePreference();
        }

        // Load tools into the grid
        function loadTools(tools) {
            toolsGrid.innerHTML = '';
            
            tools.forEach(tool => {
                const toolCard = document.createElement('div');
                toolCard.className = 'tool-card';
                toolCard.innerHTML = `
                    <div class="tool-icon">
                        <i class="${tool.icon}"></i>
                    </div>
                    <div class="tool-content">
                        <span class="tool-category">${tool.category}</span>
                        <h3 class="tool-title">${tool.name}</h3>
                        <p class="tool-description">${tool.description}</p>
                        <a href="#" class="tool-btn" data-id="${tool.id}">Use Tool</a>
                    </div>
                `;
                
                toolsGrid.appendChild(toolCard);
            });
            
            // Add event listeners to tool buttons
            document.querySelectorAll('.tool-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const toolId = this.getAttribute('data-id');
                    openTool(toolId);
                });
            });
        }

        // Filter tools based on search input
        function filterTools() {
            const searchText = searchInput.value.toLowerCase();
            const activeCategory = document.querySelector('.category-btn.active').dataset.category;
            
            const filteredTools = toolsData.tools.filter(tool => {
                const matchesSearch = tool.name.toLowerCase().includes(searchText) || 
                                    tool.description.toLowerCase().includes(searchText);
                const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
                
                return matchesSearch && matchesCategory;
            });
            
            loadTools(filteredTools);
        }

        // Open tool in modal
        function openTool(toolId) {
            const tool = toolsData.tools.find(t => t.id == toolId);
            
            if (tool) {
                modalTitle.textContent = tool.name;
                modalIcon.className = tool.icon;
                toolIframe.src = tool.url;
                toolModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }

        // Close modal
        function closeToolModal() {
            toolModal.style.display = 'none';
            toolIframe.src = 'about:blank';
            document.body.style.overflow = 'auto';
        }

        // Toggle theme
        function toggleTheme() {
            const isDarkMode = document.body.classList.contains('dark-mode');
            
            if (isDarkMode) {
                document.body.classList.remove('dark-mode');
                document.body.classList.add('light-mode');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'light');
            } else {
                document.body.classList.remove('light-mode');
                document.body.classList.add('dark-mode');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'dark');
            }
        }

        // Load theme preference from localStorage
        function loadThemePreference() {
            const savedTheme = localStorage.getItem('theme');
            
            if (savedTheme === 'dark') {
                document.body.classList.remove('light-mode');
                document.body.classList.add('dark-mode');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                document.body.classList.remove('dark-mode');
                document.body.classList.add('light-mode');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        }

        // Set up event listeners
        function setupEventListeners() {
            searchInput.addEventListener('input', filterTools);
            
            categoryBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    categoryBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    filterTools();
                });
            });
            
            themeToggle.addEventListener('click', toggleTheme);
            closeModal.addEventListener('click', closeToolModal);
            
            // Close modal when clicking outside
            toolModal.addEventListener('click', function(e) {
                if (e.target === toolModal) {
                    closeToolModal();
                }
            });
            
            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && toolModal.style.display === 'block') {
                    closeToolModal();
                }
            });
        }

        // Initialize the page when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);