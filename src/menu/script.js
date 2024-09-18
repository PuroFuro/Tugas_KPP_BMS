document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.getElementById("menuButton");
    var popupMenu = document.getElementById("popupMenu");

    menuButton.addEventListener("click", function() {
        if (popupMenu.classList.contains("hidden")) {
            popupMenu.classList.remove("hidden");
            popupMenu.classList.add("block");
        } else {
            popupMenu.classList.remove("block");
            popupMenu.classList.add("hidden");
        }
    });
});
