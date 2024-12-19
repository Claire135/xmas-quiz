

const players = [
    {name: "Juannoo", score: 0, image: "images/JuanFace.jpg"},
    {name: "Chacka", score: 0, image: "images/ClaireFace.jpg"},
    {name: "Olichix", score: 0, image: "images/OliverFace.jpg"}
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


const player3 = document.querySelector("#player3");

const player3Score = document.createElement("div");
player3Score.classList.add("player3Score");
player3Score.textContent = `${players[2].name}: ${players[2].score}`;
player3.appendChild(player3Score);


const player1Pic = document.querySelector("#player1Pic");

const player1Profile = document.createElement("img");
player1Profile.classList.add("player1Profile");
player1Profile.src = players[0].image;  // Using the image path stored in the player object
player1Profile.alt = `${players[0].name}'s image`;
player1Pic.appendChild(player1Profile);

const player2Pic = document.querySelector("#player2Pic");

const player2Profile = document.createElement("img");
player2Profile.classList.add("player2Profile");
player2Profile.src = players[1].image;  // Using the image path stored in the player object
player2Profile.alt = `${players[1].name}'s image`;
player2Pic.appendChild(player2Profile);

const player3Pic = document.querySelector("#player3Pic");

const player3Profile = document.createElement("img");
player3Profile.classList.add("player3Profile");
player3Profile.src = players[2].image;  // Using the image path stored in the player object
player3Profile.alt = `${players[2].name}'s image`;
player3Pic.appendChild(player3Profile);


