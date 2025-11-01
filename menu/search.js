/*
  Standalone Search Script
  - Independent from existing app.
  - Filters #games-grid and #recent-games cards using .game-card, .game-card-title, .game-card-description
  - Restores original display values after clearing search.
*/

(function() {
  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  onReady(() => {
    const input = document.getElementById('standalone-search-input');
    const clearBtn = document.getElementById('standalone-search-clear');
    const containers = [
      document.getElementById('games-grid'),
      document.getElementById('recent-games')
    ].filter(Boolean);

    if (!input || containers.length === 0) {
      // nothing to do
      return;
    }

    // Save original display for each card so we can restore later
    function saveOriginalDisplay(card) {
      if (!card.dataset._origDisplay) {
        const cs = window.getComputedStyle(card);
        card.dataset._origDisplay = cs.display === 'inline' ? 'inline-block' : cs.display || 'block';
      }
    }

    containers.forEach(container => {
      container.querySelectorAll('.game-card').forEach(saveOriginalDisplay);
    });

    function filterCards(query) {
      const q = (query || '').trim().toLowerCase();
      let totalVisible = 0;

      containers.forEach(container => {
        const cards = Array.from(container.querySelectorAll('.game-card'));
        let containerVisible = 0;

        cards.forEach(card => {
          saveOriginalDisplay(card);

          const title = (card.querySelector('.game-card-title')?.textContent || '').toLowerCase();
          const desc = (card.querySelector('.game-card-description')?.textContent || '').toLowerCase();

          const match = q === '' || title.includes(q) || desc.includes(q);

          if (match) {
            // restore original display
            card.style.display = card.dataset._origDisplay || '';
            containerVisible++;
            totalVisible++;
          } else {
            card.style.display = 'none';
          }
        });

        // If container has no visible cards, hide the container element itself to avoid empty grid
        if (containerVisible === 0) {
          container.classList.add('standalone-search-empty');
          // keep layout behavior sensible: set to none
          container.style.display = 'none';
        } else {
          container.classList.remove('standalone-search-empty');
          container.style.display = ''; // let CSS handle it (grid/whatever)
        }
      });

      // show/hide global no-results element if present (id="no-results")
      const noResultsEl = document.getElementById('no-results');
      if (noResultsEl) {
        if (totalVisible === 0) {
          noResultsEl.classList.remove('hidden');
        } else {
          noResultsEl.classList.add('hidden');
        }
      }
    }

    // Attach listener (debounced a little to be smoother)
    let debounceTimer = null;
    input.addEventListener('input', (e) => {
      const q = e.target.value;
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        filterCards(q);
      }, 150);
    });

    // Clear button
    clearBtn.addEventListener('click', () => {
      input.value = '';
      filterCards('');
      input.focus();
    });

    // Optional: run once on load to sync with any pre-filled value
    if (input.value && input.value.trim() !== '') {
      filterCards(input.value);
    }
  });
})();

//hdh
if (screen.orientation && screen.orientation.lock) {
  screen.orientation.lock("portrait").catch((err) => {
    console.log("Orientation lock failed:", err);
  });
}