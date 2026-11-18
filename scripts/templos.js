
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");
const header = document.querySelector("header");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("open");
    header.classList.toggle("menu-open");

    const aberto = nav.classList.contains("open");

    menuButton.setAttribute("aria-expanded", aberto);

    menuButton.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});

// Ano atual
document.querySelector("#anoatual").textContent =
    new Date().getFullYear();

// Data da última modificação
const dataModificacao = new Date(document.lastModified);

document.querySelector("#ultima-modificacao").textContent =
    "Última Modificação: " +
    dataModificacao.toLocaleDateString("pt-BR") +
    " às " +
    dataModificacao.toLocaleTimeString("pt-BR");
