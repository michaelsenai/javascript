import { getALLGames } from "./service";

var URL = "http://localhost:3000/jogos";
window.onload = () => {
  loadGames();
}
  // pegando a div com id="data-container"
  const loadGames =() => {
    console.log('>>>')
    const dataContainer =
    document.getElementById('data-container');
    getALLGames().then(resp =>{
      resp.forEach(game =>{
        const gamesElement =
        document.createComment('div');
        gamesElement.innerHTML =
        `<strong>${game.nome}<strong><p>${game.preco}</P>`;
        dataContainer.appendChild(gamesElement);

      });
    })
  };
  // Função para buscar e exibir dados da API
  const fetchData = async () => {
    try {
      // Fazendo uma solicitação GET para obter produtos da AP
      const response = await fetch(URL);
      //lidando com oerros na resposta
      handleErrors(response);

      //converter os dados para json
      const data = await response.json();

      //exibir os dados na pagina html
      data.forEach((jogo) => {
        const tagDiv = document.createElement("div");
        tagDiv.innerHTML = `<strong>${jogo.nome}</strong><p>${jogo.preco}</p>`;
        dataContainer.appendChild(tagDiv);
      });
    } catch (error) {
      console.log("Error >>>", error);
    }
  };

  // Chamando a função para buscar e exibir dados ao carregar a página
  fetchData();
});

const createGame = () => {
  const jogoTeste = {
    nome: "The legend of Zelda",
    img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
    preco: 100,
  };
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jogoTeste),
  })
    .then((response) => response.json())
    .then((data) => console.log("sucesso: ", data))
    .catch((error) => console.log("Erro: ", error));
};

const deleteGame = () => {
  const game = {
    nome: "The legend of Zelda",
    img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
    preco: 100,
    id: 3,
  };

  fetch(URL + `/${game.id}`, { method: "DELETE" })
    .then((response) => response.json())
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
};

const updateGame = () => {
  const game = {
    nome: "O retorno do micha doido",
    img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
    preco: 100,
    id: 3,
  };

  fetch(URL+`/${game.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify(game),
  })
    .then((response) => response.json())
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
};
