import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach((e) => {
    ["touchstart", "click"].forEach((userEvent) => {
      e.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(e) {
    e.preventDefault();
    this.classList.add("active");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
}
