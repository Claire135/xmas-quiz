const players = [
  {name: "Juannoo", score: 0, image: "images/JuanFace.jpg"},
  {name: "Chacka", score: 0, image: "images/ClaireFace.jpg"},
  {name: "Olichix", score: 0, image: "images/OliverFace.jpg"}
];

//set up player score display
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


// Quiz questions
const quiz = [
  {question: "What is the capital city of France?", answer: "Paris"},
  {question: "Which planet is known as the Red Planet?", answer: "Mars"},
  {question: "What is the largest mammal in the world?", answer: "Blue Whale"},
  {question: "What is the smallest prime number?", answer: "2"},
  {question: "What is the chemical symbol for water?", answer: "H2O"},
  {question: "Who wrote 'Romeo and Juliet'?", answer: "Shakespeare"},
  {question: "What is the capital city of France?", answer: "Paris"},
  {question: "Which planet is known as the Red Planet?", answer: "Mars"},
  {question: "What is the largest mammal in the world?", answer: "Blue Whale"},
  {question: "What is the smallest prime number?", answer: "2"},
  {question: "What is the chemical symbol for water?", answer: "H2O"},
  {question: "Who wrote 'Romeo and Juliet'?", answer: "Shakespeare"},
  {question: "What is the capital city of France?", answer: "Paris"},
  {question: "Which planet is known as the Red Planet?", answer: "Mars"},
  {question: "What is the largest mammal in the world?", answer: "Blue Whale"},
  {question: "What is the smallest prime number?", answer: "2"},
  {question: "What is the chemical symbol for water?", answer: "H2O"},
  {question: "Who wrote 'Romeo and Juliet'?", answer: "Shakespeare"},
  {question: "What color is the sky?", answer: "Blue", image: "https://via.placeholder.com/150?text=Sky"},
  {question: "What animal says 'Moo'?", answer: "Cow", image: "https://via.placeholder.com/150?text=Cow"},
  {question: "What fruit is red and has seeds?", answer: "Strawberry", image: "https://via.placeholder.com/150?text=Strawberry"},
  {question: "What number comes after 2?", answer: "3", image: "https://via.placeholder.com/150?text=3"},
  {question: "What shape has 3 sides?", answer: "Triangle", image: "https://via.placeholder.com/150?text=Triangle"},
  {question: "What is the color of a banana?", answer: "Yellow", image: "https://via.placeholder.com/150?text=Banana"},
  {question: "What sound does a dog make?", answer: "Woof", image: "https://via.placeholder.com/150?text=Dog"},
  {question: "What is the color of grass?", answer: "Green", image: "https://via.placeholder.com/150?text=Grass"},
  {question: "Which animal has a long trunk?", answer: "Elephant", image: "https://via.placeholder.com/150?text=Elephant"},
  {question: "What do you wear on your feet?", answer: "Shoes", image: "https://via.placeholder.com/150?text=Shoes"},
  {question: "What do bees make?", answer: "Honey", image: "https://via.placeholder.com/150?text=Honey"},
  {question: "What is the color of a stop sign?", answer: "Red", image: "https://via.placeholder.com/150?text=Stop+Sign"}
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

    // Play the quiz for the specified number of rounds
  for (let roundNo = 1; roundNo <= rounds; roundNo++) {
      // Update roundText dynamically
      roundText.textContent = `Round ${roundNo}`;

    let questionIndex = 0; // Track the current question index globally

    const playerName = document.querySelector(".playerName");
    const questionText = document.querySelector(".questionText");
    const AnswerBtn = document.querySelector("#AnswerBtn");
    const rightBtn = document.querySelector("#rightBtn");
    const wrongBtn = document.querySelector("#wrongBtn");

    function nextQuestion() {
      questionIndex++;

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

      playerName.textContent = `${currentPlayer.name}'s turn`;
      questionText.textContent = question.question;

      if (question.image) {
        const questionImage = document.querySelector("#questionImage");
        questionImage.src = question.image;
        questionImage.alt = `${question.question}`;
      }
    }

    // Event listeners for buttons
    AnswerBtn.addEventListener("click", () => {
      alert(`Answer: ${quiz[questionIndex].answer}`);
    });

    rightBtn.addEventListener("click", () => {
      const playerIndex = questionIndex % 3;
      playerScores[playerIndex].score++;
      updateScores();
      nextQuestion();
    });

    wrongBtn.addEventListener("click", () => {
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
}

const btnStart = document.querySelector("#startQuiz");
btnStart.addEventListener("click", () => {
  startQuiz();
});
