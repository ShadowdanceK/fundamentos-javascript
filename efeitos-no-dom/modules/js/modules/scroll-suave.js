export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  /* Forma alternativa para scroll suave
  const setTop = section.offsetTop;
  window.scrollTo({
    top: setTop,
    behavior: "smooth",
  }); */

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
