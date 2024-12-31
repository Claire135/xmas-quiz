const players = [
  {name: "Juannoo", score: 0, image: "images/JuanFace.jpg"},
  {name: "Chacka", score: 0, image: "images/ClaireFace.jpg"},
  {name: "Olichix", score: 0, image: "images/OliverFace.jpg"}
];

// Set up player score display
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
player1Profile.src = players[0].image;
player1Profile.alt = `${players[0].name}'s image`;
player1Pic.appendChild(player1Profile);

const player2Pic = document.querySelector("#player2Pic");
const player2Profile = document.createElement("img");
player2Profile.classList.add("player2Profile");
player2Profile.src = players[1].image;
player2Profile.alt = `${players[1].name}'s image`;
player2Pic.appendChild(player2Profile);

const player3Pic = document.querySelector("#player3Pic");
const player3Profile = document.createElement("img");
player3Profile.classList.add("player3Profile");
player3Profile.src = players[2].image;
player3Profile.alt = `${players[2].name}'s image`;
player3Pic.appendChild(player3Profile);

// Quiz questions
const quiz = [
  {question: "What is the name of Uruguay’s oldest football club, founded in 1891?", answer: "Albion Football Club"},
  {question: "The national flag of Uruguay has nine stripes. What do they symbolize?", answer: "The nine original departments of Uruguay"},
  {question: "What color is the sky during the day when there are no clouds?", answer: "Blue"},

  {question: "Which Uruguayan composer wrote 'La Cumparsita', often called the most famous tango?", answer: "Gerardo Matos Rodríguez"},
  {question: "What is the name of the iconic Uruguayan writer who authored 'The Truce' ('La Tregua')?", answer: "Mario Benedetti"},
  {question: "What animal says 'Woof'?", answer: "Dog"},

  {question: "In which year did Uruguay win its second FIFA World Cup title?", answer: "1950"},
  {question: "What was the name of the British battleship that was scuttled off the coast of Uruguay during World War II?", answer: "Admiral Graf Spee"},
  {question: "What do you call the big yellow thing in the sky?", answer: "The Sun"},

  {question: "What is the highest point in Uruguay, standing at just 513 meters?", answer: "Cerro Catedral"},
  {question: "Which Uruguayan city was originally founded by the Portuguese in 1680?", answer: "Colonia del Sacramento"},
  {question: "What shape has 4 sides of the same length?", answer: "Square"},

  {question: "What significant role did José Gervasio Artigas play during the Cisplatine War?", answer: "He led the fight for independence and is known as the 'Father of Uruguayan Nationhood'."},
  {question: "What is the traditional Uruguayan biscuit-like pastry, often served with dulce de leche, called?", answer: "Bizcocho"},
  {question: "What is the name of the vehicle that flies in the sky?", answer: "Airplane"},

  {question: "What is the oldest university in Ireland, founded in 1592?", answer: "Trinity College Dublin"},
  {question: "The Irish flag has three colors. What does the orange stripe symbolize?", answer: "The Protestant community in Ireland"},
  {question: "What sound does a cat make?", answer: "Meow"},

  {question: "What is the Irish name for Ireland, often used in poetry and songs?", answer: "Éire"},
  {question: "Which Irish author won the Nobel Prize for Literature in 1969?", answer: "Samuel Beckett"},
  {question: "What fruit is red and crunchy?", answer: "Apple"},

  {question: "What ancient Irish festival inspired Halloween?", answer: "Samhain"},
  {question: "What is the traditional Irish musical instrument played using a bellows and chanters?", answer: "Uilleann pipes"},
  {question: "What is the color of grass?", answer: "Green"},

  {question: "What is the name of the Irish revolutionary who served as President of the Provisional Government in 1922?", answer: "Michael Collins"},
  {question: "What is the name of the limestone region in County Clare known for its unique landscape and biodiversity?", answer: "The Burren"},
  {question: "What is the name of the animal with a long trunk?", answer: "Elephant"},

  {question: "What year was the Good Friday Agreement signed, bringing peace to Northern Ireland?", answer: "1998"},
  {question: "What is the Irish name of the mythical warrior who fought with the Fianna, often linked to tales of bravery?", answer: "Fionn mac Cumhaill"},
  {question: "What do you wear on your feet outside?", answer: "Shoes"}
];

function startQuiz() {
  const rounds = 5;
  const questionsPerRound = 12;
  const roundText = document.querySelector("#roundText");

  let playerScores = [
    { name: players[0].name, score: 0 },
    { name: players[1].name, score: 0 },
    { name: players[2].name, score: 0 },
  ];

  let questionIndex = 0;

  const playerImage = document.querySelector("#playerImage");
  const playerName = document.querySelector(".playerName");
  const questionText = document.querySelector(".questionText");
  const AnswerBtn = document.querySelector("#AnswerBtn");
  const rightBtn = document.querySelector("#rightBtn");
  const wrongBtn = document.querySelector("#wrongBtn");

  function nextQuestion() {
    // If all questions are answered, end the quiz
    if (questionIndex >= quiz.length) {
      console.log("Quiz complete!");
      console.log("Final Scores:");
      playerScores.forEach((player) => console.log(`${player.name}: ${player.score}`));
      return;
    }

    // Update current player and question
    const playerIndex = questionIndex % 3;
    const currentPlayer = players[playerIndex];
    const question = quiz[questionIndex];

    // Update UI
    const playerImage = document.querySelector("#playerImage");
    const playerProfileImage = document.createElement("img");
    playerProfileImage.classList.add("playerProfileImage");
    playerProfileImage.src = currentPlayer.image;
    playerProfileImage.alt = `${currentPlayer.name}'s image`;
    playerImage.appendChild(playerProfileImage);
    
  
    playerName.textContent = `${currentPlayer.name}'s turn`;
    questionText.textContent = question.question;

    // Clear answer text
    document.querySelector("#answerText").textContent = "";
  }

  // Event listeners for buttons
  AnswerBtn.addEventListener("click", () => {
    const answerText = document.querySelector("#answerText");
    answerText.textContent = `Answer: ${quiz[questionIndex].answer}`;
  });

  rightBtn.addEventListener("click", () => {
    const playerIndex = questionIndex % 3;
    playerScores[playerIndex].score++;
    updateScores();
    questionIndex++;
    nextQuestion();
  });

  wrongBtn.addEventListener("click", () => {
    questionIndex++;
    nextQuestion();
  });

  // Initial question setup
  nextQuestion();

  function updateScores() {
    document.querySelector(".player1Score").textContent = `${players[0].name}: ${playerScores[0].score}`;
    document.querySelector(".player2Score").textContent = `${players[1].name}: ${playerScores[1].score}`;
    document.querySelector(".player3Score").textContent = `${players[2].name}: ${playerScores[2].score}`;
  }
}

const btnStart = document.querySelector("#startQuiz");
btnStart.addEventListener("click", () => {
  startQuiz();
});
