
// Configuration
        const JSON_URL = 'tool.json';
        const CACHE_KEY = 'toolFinderData';
        const CACHE_TIMESTAMP_KEY = 'toolFinderTimestamp';
        const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

        // State management
        let toolsData = [];
        let categories = [];
        let filteredTools = [];
        let usageStats = JSON.parse(localStorage.getItem('toolUsageStats')) || {};

        // DOM elements
        const toolsGrid = document.getElementById('tools-grid');
        const categoryFilters = document.getElementById('category-filters');
        const searchInput = document.getElementById('search-input');
        const themeToggle = document.getElementById('theme-toggle');
        const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
        const toolModal = document.getElementById('tool-modal');
        const modalIframe = document.getElementById('modal-iframe');
        const modalTitle = document.getElementById('modal-title');
        const modalClose = document.getElementById('modal-close');
        const noResults = document.getElementById('no-results');
        const cookieConsent = document.getElementById('cookie-consent');
        const cookieAccept = document.getElementById('cookie-accept');
        const cookieReject = document.getElementById('cookie-reject');

        // Initialize the application
        document.addEventListener('DOMContentLoaded', init);

        function init() {
            // Set up event listeners
            setupEventListeners();
            
            // Check and apply saved theme
            applySavedTheme();
            
            // Check cookie consent
            checkCookieConsent();
            
            // Load tools data
            loadToolsData();
            
            // Check for deep link
            checkDeepLink();
        }

        function setupEventListeners() {
            // Theme toggles
            themeToggle.addEventListener('click', toggleTheme);
            themeToggleDesktop.addEventListener('click', toggleTheme);
            
            // Search with debounce
            let searchTimeout;
            searchInput.addEventListener('input', () => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    filterTools();
                }, 300);
            });
            
            // Modal close
            modalClose.addEventListener('click', closeModal);
            toolModal.addEventListener('click', (e) => {
                if (e.target === toolModal) closeModal();
            });
            
            // Cookie consent
            cookieAccept.addEventListener('click', acceptCookies);
            cookieReject.addEventListener('click', rejectCookies);
            
            // Keyboard events
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') closeModal();
            });
        }

        function loadToolsData() {
            const cachedData = localStorage.getItem(CACHE_KEY);
            const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
            const now = new Date().getTime();
            
            // Use cached data if it exists and isn't expired
            if (cachedData && cachedTimestamp && now - cachedTimestamp < CACHE_EXPIRY) {
                try {
                    const data = JSON.parse(cachedData);
                    processToolsData(data);
                    return;
                } catch (e) {
                    console.error('Error parsing cached data:', e);
                }
            }
            
            // Fetch fresh data from CDN
            fetch(JSON_URL)
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.json();
                })
                .then(data => {
                    // Cache the data
                    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
                    localStorage.setItem(CACHE_TIMESTAMP_KEY, now.toString());
                    processToolsData(data);
                })
                .catch(error => {
                    console.error('Error fetching tools data:', error);
                    // Try to use cached data even if expired as fallback
                    const cachedData = localStorage.getItem(CACHE_KEY);
                    if (cachedData) {
                        try {
                            const data = JSON.parse(cachedData);
                            processToolsData(data);
                        } catch (e) {
                            showError('Failed to load tools data.');
                        }
                    } else {
                        showError('Failed to load tools data.');
                    }
                });
        }

        function processToolsData(data) {
            toolsData = data;
            
            // Extract unique categories
            categories = ['all']; // Start with 'all' category
            toolsData.forEach(tool => {
                if (tool.category && !categories.includes(tool.category)) {
                    categories.push(tool.category);
                }
            });
            
            // Render category filters
            renderCategoryFilters();
            
            // Sort tools by usage (most used first)
            sortToolsByUsage();
            
            // Render all tools initially
            filteredTools = [...toolsData];
            renderTools();
        }

        function renderCategoryFilters() {
            // Clear existing filters (except the initial "All Tools")
            const allBtn = categoryFilters.querySelector('[data-category="all"]');
            categoryFilters.innerHTML = '';
            categoryFilters.appendChild(allBtn);
            
            // Add category buttons
            categories.slice(1).forEach(category => {
                const button = document.createElement('button');
                button.className = 'category-btn px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition';
                button.textContent = category;
                button.dataset.category = category;
                button.addEventListener('click', () => {
                    // Toggle active state
                    document.querySelectorAll('.category-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    button.classList.add('active');
                    
                    // Filter tools by category
                    filterToolsByCategory(category);
                });
                categoryFilters.appendChild(button);
            });
        }

        function renderTools() {
            toolsGrid.innerHTML = '';
            
            if (filteredTools.length === 0) {
                noResults.classList.remove('hidden');
                return;
            }
            
            noResults.classList.add('hidden');
            
            filteredTools.forEach((tool, index) => {
                const card = document.createElement('div');
                card.className = `tool-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in opacity-0`;
                card.style.animationDelay = `${index * 0.05}s`;
                
                card.innerHTML = `
                    <div class="p-6 cursor-pointer tool-content">
                        <div class="w-12 h-12 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                            <img src="${tool.icon}" alt="${tool.name} icon" class="w-8 h-8" loading="lazy">
                        </div>
                        <h3 class="text-lg font-semibold mb-2">${tool.name}</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">${tool.description}</p>
                        ${tool.category ? `<span class="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">${tool.category}</span>` : ''}
                    </div>
                    <div class="px-6 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-100 dark:border-gray-600">
                        <button class="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition use-tool" data-id="${tool.id}">Use Tool</button>
                    </div>
                `;
                
                toolsGrid.appendChild(card);
                
                // Add click event to the use button
                const useButton = card.querySelector('.use-tool');
                useButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openTool(tool);
                });
                
                // Also allow clicking anywhere on the card to open the tool
                const toolContent = card.querySelector('.tool-content');
                toolContent.addEventListener('click', () => {
                    openTool(tool);
                });
            });
        }

        function filterTools() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            // If no search term and no category filter, show all tools
            if (!searchTerm) {
                const activeCategory = document.querySelector('.category-btn.active')?.dataset.category || 'all';
                if (activeCategory === 'all') {
                    filteredTools = [...toolsData];
                } else {
                    filteredTools = toolsData.filter(tool => tool.category === activeCategory);
                }
            } else {
                // Filter by search term
                filteredTools = toolsData.filter(tool => 
                    tool.name.toLowerCase().includes(searchTerm) || 
                    tool.description.toLowerCase().includes(searchTerm) ||
                    (tool.category && tool.category.toLowerCase().includes(searchTerm))
                );
            }
            
            // Re-render tools
            renderTools();
        }

        function filterToolsByCategory(category) {
            if (category === 'all') {
                filteredTools = [...toolsData];
            } else {
                filteredTools = toolsData.filter(tool => tool.category === category);
            }
            
            // Apply search filter if there's a search term
            const searchTerm = searchInput.value.toLowerCase().trim();
            if (searchTerm) {
                filteredTools = filteredTools.filter(tool => 
                    tool.name.toLowerCase().includes(searchTerm) || 
                    tool.description.toLowerCase().includes(searchTerm)
                );
            }
            
            // Re-render tools
            renderTools();
        }

        function sortToolsByUsage() {
            toolsData.sort((a, b) => {
                const aCount = usageStats[a.id] || 0;
                const bCount = usageStats[b.id] || 0;
                return bCount - aCount;
            });
        }

        function openTool(tool) {
            // Update usage stats
            usageStats[tool.id] = (usageStats[tool.id] || 0) + 1;
            localStorage.setItem('toolUsageStats', JSON.stringify(usageStats));
            
            // Update URL with deep link
            window.location.hash = `tool=${tool.id}`;
            
            // Show modal
            modalTitle.textContent = tool.name;
            modalIframe.src = tool.url;
            toolModal.classList.remove('hidden');
            
            // Fade in modal
            setTimeout(() => {
                toolModal.classList.add('opacity-100');
                
                // Fade in iframe after a short delay
                setTimeout(() => {
                    modalIframe.classList.add('opacity-100');
                }, 300);
            }, 10);
        }

        function closeModal() {
            // Fade out iframe and modal
            modalIframe.classList.remove('opacity-100');
            toolModal.classList.remove('opacity-100');
            
            setTimeout(() => {
                toolModal.classList.add('hidden');
                modalIframe.src = '';
                
                // Remove deep link from URL
                if (window.location.hash.includes('tool=')) {
                    history.replaceState(null, document.title, window.location.pathname + window.location.search);
                }
            }, 300);
        }

        function toggleTheme() {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('darkMode', isDark);
        }

        function applySavedTheme() {
            const savedTheme = localStorage.getItem('darkMode');
            if (savedTheme === 'true') {
                document.documentElement.classList.add('dark');
            } else if (savedTheme === 'false') {
                document.documentElement.classList.remove('dark');
            } else {
                // Default to system preference if no saved preference
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('darkMode', 'true');
                }
            }
        }

        function checkCookieConsent() {
            const consentGiven = localStorage.getItem('cookieConsent');
            if (consentGiven === null) {
                // Show banner after a short delay
                setTimeout(() => {
                    cookieConsent.classList.add('show');
                }, 1000);
            }
        }

        function acceptCookies() {
            localStorage.setItem('cookieConsent', 'true');
            cookieConsent.classList.remove('show');
        }

        function rejectCookies() {
            localStorage.setItem('cookieConsent', 'false');
            cookieConsent.classList.remove('show');
        }

        function checkDeepLink() {
            const hash = window.location.hash;
            if (hash.includes('tool=')) {
                const toolId = hash.split('=')[1];
                
                // Wait for tools to load, then open the tool
                const checkToolLoaded = setInterval(() => {
                    if (toolsData.length > 0) {
                        clearInterval(checkToolLoaded);
                        const tool = toolsData.find(t => t.id === toolId);
                        if (tool) {
                            openTool(tool);
                        }
                    }
                }, 100);
            }
        }

        function showError(message) {
            toolsGrid.innerHTML = `
                <div class="col-span-full text-center py-10">
                    <svg class="w-16 h-16 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 class="text-xl font-semibold mt-4">Error</h3>
                    <p class="text-gray-600 dark:text-gray-400">${message}</p>
                    <button class="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition" onclick="loadToolsData()">Try Again</button>
                </div>
            `;
        }