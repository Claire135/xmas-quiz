

const players = [
    {name: "Juan", score: 0},
    {name: "Claire", score: 0,},
    {name: "Oliver", score: 0}
]

const player1 = document.querySelector("#player1");

const player1Score = document.createElement("div");
player1Score.classList.add("player1Score");
player1Score.textContent = `${players[0].name}: ${players[0].score}`;
player1.appendChild(player1Score);

const player2 = document.querySelector("#player2");

const player2Score = document.createElement("div");
player2Score.classList.add("player2Score");
player2Score.textContent = `${players[1].name}: ${players[1].score}`;
player2.appendChild(player2Score);

const player3Score = document.createElement("div");
player3Score.classList.add("player3Score");
player3Score.textContent = `${players[2].name}: ${players[2].score}`;
player3.appendChild(player3Score);



