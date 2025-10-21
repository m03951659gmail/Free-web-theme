let popupVisible = false;
    let userNavigated = false;

    // প্রথমে history push করি (কিন্তু popup না দেখিয়ে)
    setTimeout(() => {
      history.pushState({ page: 1 }, "", "");
      userNavigated = true; // এই flag পরে true হলে বোঝা যাবে user এসেছে
    }, 100); // কিছু delay দিলে Chrome এটাকে initial load হিসেবে নেয় না

    window.addEventListener("popstate", function (event) {
      if (userNavigated && !popupVisible) {
        event.preventDefault();
        document.getElementById("exit-popup").style.display = "flex";
        popupVisible = true;
        history.pushState({ page: 1 }, "", ""); // আবার state push করি যাতে দ্বিতীয়বারে সত্যিই exit হয়
      } else if (popupVisible) {
        // যদি popup খোলা থাকে, আবার ব্যাক করলে পেজ বন্ধ হবে
        window.history.go(-2);
      }
    });

    // Popup buttons
    document.getElementById("cancel-exit").addEventListener("click", () => {
      document.getElementById("exit-popup").style.display = "none";
      popupVisible = false;
    });

    document.getElementById("confirm-exit").addEventListener("click", () => {
      document.getElementById("exit-popup").style.display = "none";
      window.history.go(-2);
    });