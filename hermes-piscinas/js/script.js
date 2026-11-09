// Hermes Piscinas — interações da landing page
// Número em formato internacional: 55 + DDD + número, sem espaços ou símbolos.
const WHATSAPP_NUMBER = "5548999101943";

const defaultMessage = "Olá! Encontrei o site da Hermes Piscinas e gostaria de solicitar um orçamento.";
document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  const section = link.dataset.whatsapp;
  const message = section === "floating"
    ? "Olá! Gostaria de conversar sobre os serviços da Hermes Piscinas."
    : defaultMessage;
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

// Menu compacto para celulares.
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
    });
  });
}

// Ano automático no rodapé.
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
