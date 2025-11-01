// ===== STATE =====
        let allTools = [...toolsData];
        let filteredTools = [...toolsData];
        let displayedTools = [];
        let currentCategory = 'all';
        let searchQuery = '';
        let loadIndex = 0;
        const loadPerBatch = 200;

        // ===== COOKIE HELPERS =====
        function setCookie(name, value, days = 365) {
            const d = new Date();
            d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
            document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
        }

        function getCookie(name) {
            const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            return match ? match[2] : null;
        }

        // ===== THEME TOGGLE =====
        const themeToggle = document.getElementById('themeToggle');
        const themeBall = themeToggle.querySelector('.theme-toggle-ball');
        const savedTheme = getCookie('theme') || 'light';

        document.documentElement.setAttribute('data-theme', savedTheme);
        themeBall.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            themeBall.textContent = newTheme === 'dark' ? '☀️' : '🌙';
            setCookie('theme', newTheme);
        });

        // ===== SEARCH BAR (DRAGGABLE) =====
        const searchIcon = document.getElementById('searchIcon');
        const searchBar = document.getElementById('searchBar');
        const searchClose = document.getElementById('searchClose');
        const searchInput = document.getElementById('searchInput');
        const searchHeader = searchBar.querySelector('.search-header');

        let isDragging = false;
        let currentX, currentY, initialX, initialY;

        // Load saved position
        const savedX = getCookie('searchX');
        const savedY = getCookie('searchY');
        if (savedX && savedY) {
            searchBar.style.left = savedX + 'px';
            searchBar.style.top = savedY + 'px';
        } else {
            searchBar.style.top = '100px';
            searchBar.style.right = '20px';
        }

        searchIcon.addEventListener('click', () => {
            searchBar.classList.add('active');
            searchInput.focus();
        });

        searchClose.addEventListener('click', () => {
            searchBar.classList.remove('active');
        });

        // Dragging functionality
        searchHeader.addEventListener('mousedown', dragStart);
        searchHeader.addEventListener('touchstart', dragStart);

        function dragStart(e) {
            if (e.target === searchInput) return;
            
            isDragging = true;
            initialX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
            initialY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
            
            const rect = searchBar.getBoundingClientRect();
            currentX = rect.left;
            currentY = rect.top;

            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', dragEnd);
            document.addEventListener('touchmove', drag);
            document.addEventListener('touchend', dragEnd);
        }

        function drag(e) {
            if (!isDragging) return;
            e.preventDefault();

            const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
            const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;

            const deltaX = clientX - initialX;
            const deltaY = clientY - initialY;

            searchBar.style.left = (currentX + deltaX) + 'px';
            searchBar.style.top = (currentY + deltaY) + 'px';
            searchBar.style.right = 'auto';
        }

        function dragEnd() {
            if (isDragging) {
                const rect = searchBar.getBoundingClientRect();
                setCookie('searchX', rect.left);
                setCookie('searchY', rect.top);
            }
            isDragging = false;
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', dragEnd);
            document.removeEventListener('touchmove', drag);
            document.removeEventListener('touchend', dragEnd);
        }

        // ===== SEARCH FUNCTIONALITY =====
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            filterTools();
        });

        // ===== CATEGORIES =====
        const categoryList = document.getElementById('categoryList');
        const categories = ['all', ...new Set(allTools.map(tool => tool.category))];

        categories.forEach(cat => {
            if (cat !== 'all') {
                const btn = document.createElement('button');
                btn.className = 'category-btn';
                btn.textContent = cat;
                btn.dataset.category = cat;
                categoryList.appendChild(btn);
            }
        });

        categoryList.addEventListener('click', (e) => {
            if (e.target.classList.contains('category-btn')) {
                document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                currentCategory = e.target.dataset.category;
                filterTools();
            }
        });

        // ===== FILTER TOOLS =====
        function filterTools() {
            filteredTools = allTools.filter(tool => {
                const matchesCategory = currentCategory === 'all' || tool.category === currentCategory;
                const matchesSearch = tool.name.toLowerCase().includes(searchQuery) ||
                                    tool.description.toLowerCase().includes(searchQuery) ||
                                    tool.tags.some(tag => tag.toLowerCase().includes(searchQuery));
                return matchesCategory && matchesSearch;
            });
            
            loadIndex = 0;
            displayedTools = [];
            document.getElementById('toolsGrid').innerHTML = '';
            loadMoreTools();
        }

        // ===== RENDER TOOLS =====
        function renderTools(tools) {
            const grid = document.getElementById('toolsGrid');
            
            tools.forEach((tool, index) => {
                const card = document.createElement('a');
                card.className = 'tool-card';
                card.href = tool.link;
                card.style.animationDelay = `${index * 0.05}s`;
                
                card.innerHTML = `
                    <span class="tool-icon">${tool.icon}</span>
                    <div class="tool-name">${tool.name}</div>
                    <div class="tool-description">${tool.description}</div>
                    <div class="tool-tags">
                        ${tool.tags.map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
                    </div>
                `;
                
                grid.appendChild(card);
            });

            if (filteredTools.length === 0) {
                grid.innerHTML = '<div class="no-results">No tools found. Try a different search or category.</div>';
            }
        }

        // ===== LAZY LOADING =====
        function loadMoreTools() {
            const batch = filteredTools.slice(loadIndex, loadIndex + loadPerBatch);
            displayedTools = [...displayedTools, ...batch];
            renderTools(batch);
            loadIndex += loadPerBatch;
        }

        // ===== INFINITE SCROLL =====
        const loading = document.getElementById('loading');
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && loadIndex < filteredTools.length) {
                loading.style.display = 'block';
                setTimeout(() => {
                    loadMoreTools();
                    loading.style.display = 'none';
                }, 500);
            }
        }, { threshold: 0.5 });

        observer.observe(loading);

        // ===== INITIAL LOAD =====
        loadMoreTools();
        
        
       // Allowed domains
const allowedDomains = ["onlinegamesb.xyz", "localhost", "onlinegamesb.xyz"];

// বর্তমান Host check করুন
const currentHost = window.location.hostname;

// যদি Allowed না হয় তাহলে গেম কাজ করবে না
if (!allowedDomains.includes(currentHost)) {
    document.body.innerHTML = "<h2 style='color:red; text-align:center; margin-top:50px;'>To launch your website, contact this email sabbirkhanmd245@gmail.com</h2>";
    throw new Error("This game is not allowed to run on this domain!");
}