// Aqui está a chave de API que usaremos para acessar os dados meteorológicos
const apiKey = 'f912c39962a8435ffec24e3a8654b764';

// Estamos pegando referências para os elementos HTML relevantes usando seus IDs
const searchBtn = document.getElementById('searchBtn'); // Botão de pesquisa
const cityInput = document.getElementById('cityInput'); // Campo de entrada de cidade
const weatherInfo = document.getElementById('weatherInfo'); // Onde exibiremos as informações meteorológicas

// Vamos adicionar um evento de clique ao botão de pesquisa
searchBtn.addEventListener('click', async () => {
    // Obtendo o nome da cidade inserido pelo usuário
    const cityName = cityInput.value;

    // Verificando se o nome da cidade foi inserido
    if (cityName) {
        // Realizando uma chamada à API de meteorologia usando o nome da cidade e a chave de API
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
        
        // Obtendo os dados da resposta em formato JSON
        const data = await response.json();

        // Extraindo a temperatura e a descrição do tempo a partir dos dados
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        // Criando uma string HTML para exibir as informações meteorológicas
        const html = `
            <h2>Weather in ${cityName}</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
        `;

        // Atualizando o conteúdo do elemento HTML "weatherInfo" com as informações meteorológicas
        weatherInfo.innerHTML = html;
    }
});