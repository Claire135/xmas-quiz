const players = [
  {name: "Juannoo", score: 0, image: "images/JuanFace.jpg"},
  {name: "Chacka", score: 0, image: "images/ClaireFace.jpg"},
  {name: "Olichix", score: 0, image: "images/OliverFace.jpg"}
];

// Shuffle function to randomize the quiz questions
function shuffle(array) {
let currentIndex = array.length;
while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
}
return array;
}

// Set up player score display dynamically
function displayScores() {
  // Player 1 Score
  const player1 = document.querySelector("#player1");
  player1.innerHTML = ''; // Clear previous content
  const player1Score = document.createElement("div");
  player1Score.classList.add("player1Score");
  player1Score.textContent = `${players[0].name}: ${players[0].score}`;
  player1.appendChild(player1Score);

  // Player 2 Score
  const player2 = document.querySelector("#player2");
  player2.innerHTML = ''; // Clear previous content
  const player2Score = document.createElement("div");
  player2Score.classList.add("player2Score");
  player2Score.textContent = `${players[1].name}: ${players[1].score}`;
  player2.appendChild(player2Score);

  // Player 3 Score
  const player3 = document.querySelector("#player3");
  player3.innerHTML = ''; // Clear previous content
  const player3Score = document.createElement("div");
  player3Score.classList.add("player3Score");
  player3Score.textContent = `${players[2].name}: ${players[2].score}`;
  player3.appendChild(player3Score);
}

// Set up player profile pictures dynamically
function displayPlayerPictures() {
  // Player 1 Profile Image
  const player1Pic = document.querySelector("#player1Pic");
  player1Pic.innerHTML = ''; // Clear previous content
  const player1Profile = document.createElement("img");
  player1Profile.classList.add("player1Profile");
  player1Profile.src = players[0].image;
  player1Profile.alt = `${players[0].name}'s image`;
  player1Pic.appendChild(player1Profile);

  // Player 2 Profile Image
  const player2Pic = document.querySelector("#player2Pic");
  player2Pic.innerHTML = ''; // Clear previous content
  const player2Profile = document.createElement("img");
  player2Profile.classList.add("player2Profile");
  player2Profile.src = players[1].image;
  player2Profile.alt = `${players[1].name}'s image`;
  player2Pic.appendChild(player2Profile);

  // Player 3 Profile Image
  const player3Pic = document.querySelector("#player3Pic");
  player3Pic.innerHTML = ''; // Clear previous content
  const player3Profile = document.createElement("img");
  player3Profile.classList.add("player3Profile");
  player3Profile.src = players[2].image;
  player3Profile.alt = `${players[2].name}'s image`;
  player3Pic.appendChild(player3Profile);
}

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
  {question: "Who wrote 'Romeo and Juliet'?", answer: "Shakespeare"}
];

const easyQuiz = [
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

// Start Quiz Function
function startQuiz() {
  let rounds = 5;
  let questionsPerRound = 4; // Number of questions per player per round

  // Update scores and player images
  displayScores();
  displayPlayerPictures();

  for (let roundNo = 1; roundNo <= rounds; roundNo++) {
      const roundsElement = document.querySelector('#rounds');
      const roundCall = document.createElement("div");
      roundCall.textContent = `Round ${roundNo}`;
      roundsElement.appendChild(roundCall);

      console.log(`Round ${roundNo}!`);

      const shuffledQuiz = shuffle([...quiz]);
      const toddlerQuiz = shuffle([...easyQuiz]);

      // Assign questions to players
      const player1Questions = shuffledQuiz.slice(0, questionsPerRound);
      const player2Questions = shuffledQuiz.slice(questionsPerRound, questionsPerRound * 2);
      const player3Questions = toddlerQuiz.slice(0, questionsPerRound);

      // Alternate questions among players
      const playerQuestions = document.querySelector("#playerQuestions");
      playerQuestions.innerHTML = ''; // Clear any previous questions

      for (let i = 0; i < questionsPerRound; i++) {
          // Player 1 Question
          const player1Call = document.createElement("div");
          player1Call.classList.add("player1Call");
          player1Call.textContent = `${players[0].name}'s turn:`;
          playerQuestions.appendChild(player1Call);

          const player1Question = document.createElement("div");
          player1Question.classList.add("player1Question");
          player1Question.textContent = player1Questions[i].question;
          playerQuestions.appendChild(player1Question);

          // Player 2 Question
          const player2Call = document.createElement("div");
          player2Call.classList.add("player2Call");
          player2Call.textContent = `${players[1].name}'s turn:`;
          playerQuestions.appendChild(player2Call);

          const player2Question = document.createElement("div");
          player2Question.classList.add("player2Question");
          player2Question.textContent = player2Questions[i].question;
          playerQuestions.appendChild(player2Question);

          // Player 3 Question (for toddlers)
          const player3Call = document.createElement("div");
          player3Call.classList.add("player3Call");
          player3Call.textContent = `${players[2].name}'s turn:`;
          playerQuestions.appendChild(player3Call);

          const player3Question = document.createElement("div");
          player3Question.classList.add("player3Question");
          player3Question.textContent = player3Questions[i].question;
          playerQuestions.appendChild(player3Question);
      }
  }
}

// Start the quiz on page load
startQuiz();