const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    // Open/Close sidebar
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      sidebar.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    // Close when clicking outside
    overlay.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });