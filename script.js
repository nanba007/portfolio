
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
    sideMenu.classList.add("open");
    overlay.classList.add("show");
    menuBtn.setAttribute("aria-expanded", "true");
    closeBtn.focus();
}

function closeMenu(returnFocus = true) {
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");

    if (returnFocus) {
        menuBtn.focus();
    }
}

menuBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", function() {
    closeMenu();
});

overlay.addEventListener("click", function() {
    closeMenu();
});

document.querySelectorAll(".side-menu a").forEach(function(link) {
    link.addEventListener("click", function() {
        closeMenu(false);
    });
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" &&
        sideMenu.classList.contains("open")) {
        closeMenu();
    }
});