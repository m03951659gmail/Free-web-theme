let exitConfirm = false;

window.addEventListener("popstate", function (event) {
  if (!exitConfirm) {
    event.preventDefault();
    showExitPopup();
    exitConfirm = true;
    history.pushState(null, "", window.location.href);
  } else {
    window.history.go(-2);
  }
});

history.pushState(null, "", window.location.href);
window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  event.returnValue = "আপনি কি সত্যিই অ্যাপ থেকে বের হতে চান?";
});

// Custom popup functions
const popup = document.getElementById("exit-popup");
const cancelExit = document.getElementById("cancel-exit");
const confirmExit = document.getElementById("confirm-exit");

function showExitPopup() {
  popup.classList.remove("hidden");
}

cancelExit.addEventListener("click", () => {
  popup.classList.add("hidden");
  exitConfirm = false;
});

confirmExit.addEventListener("click", () => {
  popup.classList.add("hidden");
  window.history.go(-2);
});