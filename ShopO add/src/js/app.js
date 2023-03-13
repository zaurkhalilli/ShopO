console.log("salam");

const menuOpen = document.querySelector(".fa-solid");
const CloseMenu = document.querySelector(".fa-arrow-up");

const MenuItems = document.querySelector(".ul1");

menuOpen &&
  menuOpen.addEventListener("click", (event) => {
    event.preventDefault();
    MenuItems.style.height = "100vh";
    MenuItems.style.padding = "10px 0px";
    CloseMenu.style.display = "block";
    menuOpen.style.display = "none";
  });

CloseMenu &&
  CloseMenu.addEventListener("click", (event) => {
    event.preventDefault();
    MenuItems.style.height = "100vh";
    MenuItems.style.padding = "10px 0px";
    CloseMenu.style.display = "block";
    menuOpen.style.display = "none";
  });

function showModal() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("modal").style.display = "block";
}
function hideModal() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("modal").style.display = "none";
}
window.onload = function () {
  showModal();
};
