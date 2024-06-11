function toggleNavbar() {
    const links = document.getElementById("links");
    const navbar = document.getElementById("navbar");
    const hamburgerMenu = document.getElementById("hamburger-menu");
    if (links.style.display === "none" || links.style.display === "") {
        links.style.display = "flex";
        navbar.style.height = "100vh";
        hamburgerMenu.innerHTML = "&#10006;";
    } else {
        links.style.display = "none";
        navbar.style.height = "3rem";
        hamburgerMenu.innerHTML = "&#9776;";
    }
}

function handleResize() {
    const links = document.getElementById("links");
    const navbar = document.getElementById("navbar");
    const hamburgerMenu = document.getElementById("hamburger-menu");

    if (window.innerWidth > 1024) {
        links.style.display = "flex";
        navbar.style.height = "auto";
        hamburgerMenu.innerHTML = "&#9776;";
    } else {
        links.style.display = "none";
        navbar.style.height = "3rem";
    }
}

// Attach the resize event listener
window.addEventListener('resize', handleResize);

// Trigger the resize event to set the initial state
window.dispatchEvent(new Event('resize'));