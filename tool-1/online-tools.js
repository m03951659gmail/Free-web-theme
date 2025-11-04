document.addEventListener('DOMContentLoaded', () => {
    const toolGrid = document.getElementById('tool-grid');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const themeToggle = document.getElementById('theme-toggle');
    const iframeContainer = document.getElementById('iframe-container');
    const toolIframe = document.getElementById('tool-iframe');
    const closeIframeButton = document.getElementById('close-iframe');
    const backButton = document.getElementById('back-button');

    let allTools = [];
    let displayedTools = [];
    const toolsPerLoad = 12; // Number of tools to load at once for lazy loading
    let currentToolIndex = 0;

    // --- Theme Toggle Functionality ---
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun text-yellow-400"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-moon text-blue-800"></i>';
    }

    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fa-solid fa-sun text-yellow-400"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fa-solid fa-moon text-blue-800"></i>';
        }
    });

    // --- Fetch Tools and Initialize ---
    const fetchTools = async () => {
        try {
            // Using a relative path for local testing, replace with CDN URL for deployment
            const response = await fetch('/tool-1/data.json'); // Assumes tool.json is in the same directory or accessible
            // const response = await fetch('https://cdn.jsdelivr.net/gh/your-username/your-repo/tool.json'); // Example CDN URL
            allTools = await response.json();
            populateCategories();
            filterAndDisplayTools();
        } catch (error) {
            console.error('Error fetching tools:', error);
            // Display an error message to the user
            toolGrid.innerHTML = '<p class="text-red-500 col-span-full text-center">Failed to load tools. Please try again later.</p>';
        }
    };

    // --- Populate Category Filter ---
    const populateCategories = () => {
        const categories = new Set(allTools.map(tool => tool.category));
        categoryFilter.innerHTML = '<option value="">All Categories</option>'; // Default option
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    };

    // --- Render Tool Card ---
    const createToolCard = (tool) => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 flex flex-col justify-between';
        toolCard.dataset.id = tool.id;
        toolCard.setAttribute('aria-label', `Open ${tool.name}`);

        toolCard.innerHTML = `
            <div>
                <div class="text-4xl text-blue-600 mb-4 dark:text-blue-400">
                    <i class="${tool.icon}"></i>
                </div>
                <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">${tool.name}</h3>
                <p class="text-gray-700 dark:text-gray-300 text-sm">${tool.description}</p>
            </div>
            <div class="mt-4">
                <span class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">${tool.category}</span>
            </div>
        `;

        toolCard.addEventListener('click', () => openToolInIframe(tool.url));
        return toolCard;
    };

    // --- Lazy Loading with Intersection Observer ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadMoreTools();
            }
        });
    }, {
        rootMargin: '0px 0px 200px 0px', // Load when 200px from bottom
        threshold: 0.1
    });

    const loadMoreTools = () => {
        const fragment = document.createDocumentFragment();
        const toolsToLoad = displayedTools.slice(currentToolIndex, currentToolIndex + toolsPerLoad);

        toolsToLoad.forEach(tool => {
            fragment.appendChild(createToolCard(tool));
        });

        toolGrid.appendChild(fragment);
        currentToolIndex += toolsToLoad.length;

        // If there are more tools to load, keep observing the last element
        if (currentToolIndex < displayedTools.length) {
            const lastCard = toolGrid.lastElementChild;
            if (lastCard) {
                observer.unobserve(lastCard); // Unobserve old last card
                observer.observe(lastCard);    // Observe new last card
            }
        } else {
            // No more tools to load, disconnect observer
            if (toolGrid.lastElementChild) {
                observer.unobserve(toolGrid.lastElementChild);
            }
        }
    };

    // --- Filter and Display Tools ---
    const filterAndDisplayTools = () => {
        currentToolIndex = 0; // Reset index for new filter
        toolGrid.innerHTML = ''; // Clear existing tools

        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        displayedTools = allTools.filter(tool => {
            const matchesSearch = tool.name.toLowerCase().includes(searchTerm) ||
                                  tool.description.toLowerCase().includes(searchTerm) ||
                                  tool.category.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === '' || tool.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        if (displayedTools.length === 0) {
            toolGrid.innerHTML = '<p class="text-gray-600 dark:text-gray-400 col-span-full text-center py-8">No tools found matching your criteria.</p>';
            if (toolGrid.lastElementChild) {
                observer.unobserve(toolGrid.lastElementChild); // No cards to observe
            }
        } else {
            loadMoreTools(); // Load initial batch
            if (toolGrid.lastElementChild) {
                observer.unobserve(toolGrid.lastElementChild); // Unobserve before re-observing
                observer.observe(toolGrid.lastElementChild); // Observe for lazy loading
            }
        }
    };

    // --- Event Listeners for Search and Filter ---
    searchInput.addEventListener('input', filterAndDisplayTools);
    categoryFilter.addEventListener('change', filterAndDisplayTools);

    // --- Iframe Handling ---
    const openToolInIframe = (url) => {
        toolIframe.src = url;
        iframeContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling body when iframe is open
    };

    const closeIframe = () => {
        toolIframe.src = ''; // Clear iframe src to stop playback/process
        iframeContainer.classList.add('hidden');
        document.body.style.overflow = ''; // Restore body scrolling
    };

    closeIframeButton.addEventListener('click', closeIframe);
    backButton.addEventListener('click', closeIframe); // Also use back button to close iframe

    // --- Initialize ---
    fetchTools();
});