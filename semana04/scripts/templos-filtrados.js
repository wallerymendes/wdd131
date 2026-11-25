
/* MENU */

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

/* ANO ATUAL */

document.querySelector("#anoatual").textContent =
    new Date().getFullYear();

/* DATA DA ÚLTIMA MODIFICAÇÃO */

const dataModificacao = new Date(document.lastModified);

document.querySelector("#ultima-modificacao").textContent =
    "Última Modificação: " +
    dataModificacao.toLocaleDateString("pt-BR") +
    " às " +
    dataModificacao.toLocaleTimeString("pt-BR");

/* LISTA DOS TEMPLOS */

function toggleActive(element) {
    document.querySelectorAll('a').forEach(link => {
        link.classList.remove('active');
});

    element.classList.add("active");

}

//document.querySelector('#all').addEventListener('click', () => {
//    toggleActive(document.querySelector('#all'));
//    createTempleCard(templos);
//});

//document.querySelector('#old').addEventListener('click', () => {
//    toggleActive(document.querySelector('#old'));
//    createTempleCard(temples.filter(temple => new Date(temple.dedicated) < new Date('1950-01-01')));
//});

//document.querySelector('#new').addEventListener('click', ()=> {
//    toggleActive(document.querySelector('#new'));
//    createTempleCard(temples.filter(temple => new Date(temple.dedicated) > new Date('1950-01-01')));
//});

//document.querySelector('#new').addEventListener('click', ()=> {
//    toggleActive(document.querySelector('#large'));
//    createTempleCard(temples.filter(temple => temple.area >= 50000 ));
//});

//document.querySelector('#new').addEventListener('click', ()=> {
//    toggleActive(document.querySelector('#small'));
//    createTempleCard(temples.filter(temple => temple.area < 50000 ));
//});


const cutoffDate = new Date('1950-01-01');
const largeArea = 50000;

function setFilter(seletor, filterFunction) {
    const element = document.querySelector(seletor);
    
    element.addEventListener('click', () => {
        toggleActive(element);
        createTempleCard(temples.filter(filterFunction));
    });

}



const templos = [

    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005-08-07",
        area: 11500,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888-05-21",
        area: 74792,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },

    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015-06-07",
        area: 96630,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },

    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020-05-02",
        area: 6861,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },

    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974-11-19",
        area: 156558,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },

    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986-01-10",
        area: 9600,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },

    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983-12-02",
        area: 116642,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        nomeDoTemplo: "Belo Horizonte Brasil",
        localizacao: "Belo Horizonte, Minas Gerais, Brasil",
        consagracao: "2026-08-16",
        area: 28686,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/belo-horizonte-brazil-temple/belo-horizonte-brazil-temple-22100.jpg"
    },

    {
        nomeDoTemplo: "Rio de Janeiro Brasil",
        localizacao: "Barra da Tijuca, Rio de Janeiro, Brasil",
        consagracao: "2022-05-08",
        area: 29966,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167.jpg"
    },

    {
        nomeDoTemplo: "Manaus Brasil",
        localizacao: "Ponta Negra, Manaus, Brasil",
        consagracao: "2012-06-10",
        area: 32032,
        urlDaImagem: "https://churchofjesuschristtemples.org/assets/img/temples/manaus-brazil-temple/manaus-brazil-temple-3918.jpg"
    }

];

function setFilter(seletor, filterFunction) {
    const element = document.querySelector(seletor);
    
    element.addEventListener('click', () => {
        toggleActive(element);
        createTempleCard(templos.filter(filterFunction));
    });

}
setFilter('#all', () => templos);
setFilter('#old', templo => new Date (templo.consagracao) < cutoffDate);
setFilter('#new', templo => new Date (templo.consagracao) > cutoffDate);
setFilter('#large', templo => templo.area >= largeArea);
setFilter('#small', templo => templo.area < largeArea);

/* CRIAR CARTÕES DOS TEMPLOS */

createTempleCard(templos);

function createTempleCard(templos) {

    const gallery = document.querySelector(".res-grid");

    gallery.innerHTML = "";

    templos.forEach(temple => {

        const card = document.createElement("section");

        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedication = document.createElement("p");
        const area = document.createElement("p");
        const img = document.createElement("img");

        /* INFORMAÇÕES DO TEMPLO */

        name.textContent = temple.nomeDoTemplo;

        location.innerHTML =
            `<span class="label">Localização:</span> ${temple.localizacao}`;

        dedication.innerHTML =
            `<span class="label">Dedicado:</span> ${temple.consagracao}`;

        area.innerHTML =
            `<span class="label">Tamanho:</span> ${temple.area} pés²`;

        /* IMAGEM */

        img.src = temple.urlDaImagem;
        img.alt = `Templo ${temple.nomeDoTemplo}`;
        img.loading = "lazy";

        /* MONTAR CARTÃO */

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        gallery.appendChild(card);

    });

}


