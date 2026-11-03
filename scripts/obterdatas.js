const anoAtual = new Date().getFullYear();

document.querySelector("#anoatual").textContent = anoAtual;

document.querySelector("#ultima-modificacao").textContent =
    `Last Modification: ${document.lastModified}`;