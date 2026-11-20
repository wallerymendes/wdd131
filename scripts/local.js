
// Dados do clima
const temperature = 35;
const windSpeed = 8;

// Cálculo da sensação térmica
function calcularSensacaoTermica(temp, wind) {
    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(wind, 0.16)) +
        (0.3965 * temp * Math.pow(wind, 0.16))
    ).toFixed(1);
}

// Atualizar temperatura
const temperatura = document.querySelector("#temperatura");

if (temperatura) {
    temperatura.textContent = temperature + "°C";
}

// Atualizar velocidade do vento
const vento = document.querySelector("#Vento-velocidade");

if (vento) {
    vento.textContent = String(windSpeed).padStart(2, "0") + " km/h";
}

// Exibir sensação térmica
const windChill = document.querySelector("#sensacao-termica");

if (windChill) {
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill.textContent =
            calcularSensacaoTermica(temperature, windSpeed) + " °C";
    } else {
        windChill.textContent = "N/A";
    }
}

// Atualizar ano atual
const ano = document.querySelector("#anoatual");

if (ano) {
    ano.textContent = new Date().getFullYear();
}

// Data da última modificação
const ultimaModificacao = document.querySelector("#ultima-modificacao");

if (ultimaModificacao) {
    const dataModificacao = new Date(document.lastModified);

    ultimaModificacao.textContent =
        "Última modificação: " +
        dataModificacao.toLocaleDateString("pt-BR") +
        " às " +
        dataModificacao.toLocaleTimeString("pt-BR");
}


