import { getAllGames, deleteGame, updateGame, createGame } from "./service.js";

window.onload = () => {
    loadGames();
};
const loadGames = () => {
    console.log('>>>')
    const dataContainer = 
        document.getElementById('data-container');
        getAllGames().then(resp =>{
        resp.forEach(game => {
            const gamesElement = 
                document.createElement('div');
                gamesElement.innerHTML = 
`<strong>${game.nome}</strong><p>${game.preco}</p>`;
             dataContainer.appendChild(gamesElement);
        });
    })
};

document.getElementById ('btnCreate')
.addEventListener('click', ()=>{
const jogo = {
  "nome": "The legend of Zelda 2",
  "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
  "preco": 300,
  "id": 3
  };

  createGame(jogo);
});


document.getElementById('btnUpdate')
.addEventListener('click',()=>{
  const jogo = {
    nome: "The legend of Zelda 2",
    img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
    preco: 300,
    id: 3
  };
  updateGame(jogo);

});



document.getElementById('btnDelete').addEventListener('click', ()=>{
  const jogo = {
    "nome": "The legend of Zelda",
    "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
    "preco": 100

};

  deleteGame(jogo);
})


