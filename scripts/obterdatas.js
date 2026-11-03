const anoAtual = new Date().getFullYear();

document.querySelector("#anoatual").textContent = anoAtual;

document.querySelector("#ultimaModificacao").textContent =
    `Last Modification: ${document.lastModified}`;