
(function(){
  // Disable right-click context menu globally
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  }, {passive:false});

  // Disable text selection & dragging (optional)
  document.addEventListener('selectstart', e => e.preventDefault(), {passive:false});
  document.addEventListener('dragstart', e => e.preventDefault(), {passive:false});

  // Block common keyboard shortcuts that reveal source/devtools (not foolproof)
  window.addEventListener('keydown', function(e) {
    // e.key and e.code both used for compatibility
    const key = e.key.toLowerCase();
    const ctrl = e.ctrlKey || e.metaKey; // metaKey for macOS ⌘
    const shift = e.shiftKey;

    // Block: F12
    if (e.key === 'F12') {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Block: Ctrl+U (view-source), Ctrl+S (save), Ctrl+P (print/save page), Ctrl+Shift+I/J/C
    if (ctrl && key === 'u') { e.preventDefault(); return false; }
    if (ctrl && key === 's') { e.preventDefault(); return false; }
    if (ctrl && key === 'p') { e.preventDefault(); return false; } // prevents print dialog
    if (ctrl && shift && key === 'i') { e.preventDefault(); return false; } // devtools
    if (ctrl && shift && key === 'j') { e.preventDefault(); return false; } // console
    if (ctrl && shift && key === 'c') { e.preventDefault(); return false; } // inspect element
    if (ctrl && key === 'shift') { /* do nothing */ }

    // Block: Ctrl+Shift+K (Firefox devtools), Ctrl+Shift+S etc (various)
    if (ctrl && shift && (key === 'k' || key === 'k')) { e.preventDefault(); return false; }

    // Block: F1..F12 generic catch (some browsers won't allow blocking all function keys)
    if (e.key && e.key.startsWith('F') && !isNaN(e.key.slice(1))) {
      e.preventDefault();
      return false;
    }
  }, {passive:false});

  // Prevent long-press on mobile images (some mobile browsers show context menu)
  document.addEventListener('touchstart', function(e){
    if (e.touches && e.touches.length > 1) {
      e.preventDefault();
    }
  }, {passive:false});

  // Optional: cover obvious "view-source:" attempts via location change (very limited)
  const origAssign = window.location.assign;
  window.location.assign = function(url){
    if (typeof url === 'string' && url.startsWith('view-source:')) {
      console.warn('Blocked view-source attempt');
      return;
    }
    return origAssign.apply(this, arguments);
  };
})();
