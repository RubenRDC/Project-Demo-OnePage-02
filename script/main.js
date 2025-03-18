const btnMenu = document.getElementById("btn_menu");
const menu = document.getElementById("menu");
btnMenu.addEventListener("click", (e) => {
    switchStatusMenu()
});
menu.addEventListener("click", (e) => {
    switchStatusMenu()
});
function switchStatusMenu() {
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        btnMenu.classList.remove("active");
    } else {
        menu.classList.add("show");
        btnMenu.classList.add("active");
    }
};