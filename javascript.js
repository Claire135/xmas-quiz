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

  // Initialize scores
  let playerScores = [
    { name: players[0].name, score: 0 },
    { name: players[1].name, score: 0 },
    { name: players[2].name, score: 0 },
  ];

  for (let roundNo = 1; roundNo <= rounds; roundNo++) {
    // Display round number
    //const roundCall = document.createElement("div");
    //roundCall.textContent = `Round ${roundNo}`;
    //roundDisplay.appendChild(roundCall);
    console.log(`Round no: ${roundNo}`)

    const questionPerRound = 12;
    function playRound(){
      for(let questionNo=1; questionNo<=questionsPerRound; questionNo++){
        console.log(`Question no: ${questionNo}`)
          
        function getPlayerTurn(questionNo){
            if ((questionNo=1) || (questionNo=4) || (questionNo=7) || (questionNo=10)){
              let playerTurn = player1Turn;
            }
            else if ((questionNo=2) || (questionNo=5) || (questionNo=8) || (questionNo=11)){
              let playerTurn = player2Turn;
            }
            else if ((questionNo=3) || (questionNo=6) || (questionNo=9) || (questionNo=12)){
              let playerTurn = player3Turn;
            } 
            return playerTurn;             
          }

          const whichPlayer = getPlayerTurn(questionNo);
          console.log(`Player is ${whichPlayer}`)

          function displayQuiz(whichPlayer, players, i){
            if (whichPlayer === player1){
              console.log(`${players[0].name}'s turn`)
              console.log(quiz[questionNo].question)
              console.log(quiz[questionNo].answer)
            }
            else if (whichPlayer === player2) {
              console.log(`${players[1].name}'s turn`)
              console.log(quiz[questionNo].question)
              console.log(quiz[questionNo].answer)
            }
            else if (whichPlayer === player3) {
              console.log(`${players[2].name}'s turn`)
              console.log(quiz[questionNo].question)
              console.log(quiz[questionNo].answer)
            }
          }
        
    
      }
    }
  }
}

console.log(startQuiz())


/*
        function getQuizQuestion(quiz){

        function displayAnswer(quiz){
          const btnAnswer = document.querySelector("#answerQuestion")
          btnStart.addEventListener("click"), () => {
            console.log(quiz[i].answer)
          }
        }

        function player2Turn(players, quiz){
          function getPlayerProfile(players){
              
          }
  
          function getQuizQuestion(quiz){
  
          function displayAnswer(quiz){
            const btnAnswer = document.querySelector("#answerQuestion")
            btnStart.addEventListener("click"), () => {
              console.log(quiz[i].answer)
            }
          }

          function player3Turn(players, quiz){
            function getPlayerProfile(players){
                
            }
    
            function getQuizQuestion(quiz){
    
            function displayAnswer(quiz){
              const btnAnswer = document.querySelector("#answerQuestion")
              btnStart.addEventListener("click"), () => {
                console.log(quiz[i].answer)
              }
            }

        }

        function augmentScore(){

        }
      }
    }
 
}

// Add event listener to start quiz button
const btnStart = document.querySelector("#startQuiz");
btnStart.addEventListener("click", () => {
  startQuiz();
});

*/