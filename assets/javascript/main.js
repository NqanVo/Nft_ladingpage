const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const html = document.documentElement;
const currentTheme = localStorage.getItem("theme");

moon.addEventListener("click", function () {
    moon.classList.add("hidden");
    sun.classList.remove("hidden");

    html.setAttribute("class", "dark");
    localStorage.setItem("theme", "dark");
});

sun.addEventListener("click", function () {
    moon.classList.remove("hidden");
    sun.classList.add("hidden");

    html.removeAttribute("class", "light");
    localStorage.setItem("theme", "light");
});

if (currentTheme) {
    html.setAttribute("class", currentTheme);
    if (currentTheme == "dark") {
        moon.classList.add("hidden");
        sun.classList.remove("hidden");
    }
}
