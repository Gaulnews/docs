const apiKey = 'AIzaSyBF87HqdBiWeSxdMb0-s7bfY4ypHhMYFas'; // Sua chave de API do Google Custom Search Engine
const searchEngineId = 'YOUR_SEARCH_ENGINE_ID'; // ID do seu mecanismo de pesquisa personalizado
const newsContainer = document.getElementById('news-container'); // Elemento HTML onde as notícias serão exibidas

function updateNews() {
  const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=google+news+showcase`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      newsContainer.innerHTML = ''; // Limpar conteúdo anterior

      data.items.forEach(item => {
        const articleElement = document.createElement('div');
        articleElement.innerHTML = `
          <h3><a href="${item.link}">${item.title}</a></h3>
          <p>${item.snippet}</p>
        `;
        newsContainer.appendChild(articleElement);
      });
    })
    .catch(error => console.error('Erro ao buscar notícias:', error));
}

// Executar a função de atualização a cada 5 minutos
setInterval(updateNews, 300000); // 300000 milissegundos = 5 minutos

// Executar a função de atualização inicialmente para carregar as notícias
updateNews();
