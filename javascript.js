

const players = [
    {name: "Juannoo", score: 0, image: "images/JuanFace.jpg"},
    {name: "Chacka", score: 0, image: "images/ClaireFace.jpg"},
    {name: "Olichix", score: 0, image: "images/OliverFace.jpg"}
]


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


//quiz questions
const quiz = [
    {
      question: "What is the capital city of France?",
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      answer: "Mars"
    },
    {
      question: "What is the largest mammal in the world?",
      answer: "Blue Whale"
    },
    {
      question: "What is the smallest prime number?",
      answer: "2"
    },
    {
      question: "What is the chemical symbol for water?",
      answer: "H2O"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      answer: "Shakespeare"
    } 
]  

const easyQuiz = [
  {
    question: "What color is the sky?",
    answer: "Blue",
    image: "https://via.placeholder.com/150?text=Sky"
  },
  {
    question: "What animal says 'Moo'?",
    answer: "Cow",
    image: "https://via.placeholder.com/150?text=Cow"
  },
  {
    question: "What fruit is red and has seeds?",
    answer: "Strawberry",
    image: "https://via.placeholder.com/150?text=Strawberry"
  },
  {
    question: "What number comes after 2?",
    answer: "3",
    image: "https://via.placeholder.com/150?text=3"
  },
  {
    question: "What shape has 3 sides?",
    answer: "Triangle",
    image: "https://via.placeholder.com/150?text=Triangle"
  },
  {
    question: "What is the color of a banana?",
    answer: "Yellow",
    image: "https://via.placeholder.com/150?text=Banana"
  },
  {
    question: "What sound does a dog make?",
    answer: "Woof",
    image: "https://via.placeholder.com/150?text=Dog"
  },
  {
    question: "What is the color of grass?",
    answer: "Green",
    image: "https://via.placeholder.com/150?text=Grass"
  },
  {
    question: "Which animal has a long trunk?",
    answer: "Elephant",
    image: "https://via.placeholder.com/150?text=Elephant"
  },
  {
    question: "What do you wear on your feet?",
    answer: "Shoes",
    image: "https://via.placeholder.com/150?text=Shoes"
  },
  {
    question: "What do bees make?",
    answer: "Honey",
    image: "https://via.placeholder.com/150?text=Honey"
  },
  {
    question: "What is the color of a stop sign?",
    answer: "Red",
    image: "https://via.placeholder.com/150?text=Stop+Sign"
  }
];

  // Shuffle function
  function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array
  }

  function shuffle(toddlerArray) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array
  }

  function shuffle(toddlerArray) {
    let currentIndex = toddlerArray.length;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [toddlerArray[currentIndex], toddlerArray[randomIndex]] = [
        toddlerArray[randomIndex],
        toddlerArray[currentIndex]
      ];
    }
  
    return toddlerArray;
  }

//game logic

function startQuiz() {

    let p1Score = 0;
    let p2Score = 0;
    let p3Score = 0;
    let rounds = 5;

    for (let roundNo = 1; roundNo <= rounds; roundNo++ ) {   
        console.log(`Round ${roundNo}!`);

        const shuffledQuiz = shuffle([...quiz]); // Create a shuffled copy of the quiz array
        const toddlerQuiz = shuffle([...easyQuiz]);

        const questionsPerRound = 4; // Number of questions per player per round
        const player1Questions = shuffledQuiz.slice(0, questionsPerRound);
        const player2Questions = shuffledQuiz.slice(questionsPerRound, questionsPerRound * 2);
        const player3Questions = toddlerQuiz.slice(0, questionsPerRound);
    
        // Alternate questions among players
        for (let i = 0; i < questionsPerRound; i++) {
          console.log(`${players[0].name}'s turn: ${player1Questions[i].question}`);
          console.log(`${players[1].name}'s turn: ${player2Questions[i].question}`);
          console.log(`${players[2].name}'s turn: ${player3Questions[i].question}`);
        }      
    }
}

startQuiz()