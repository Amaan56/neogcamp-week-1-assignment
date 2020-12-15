var readlineSync = require('readline-sync');
var chalk = require('chalk');

//List of questions
var questionSet = [
  {
    question:
      'In The Force Awakens, which character has Darth Vader’s damaged mask? ',
    options: [
      { option: 'a', value: 'Rey' },
      { option: 'b', value: 'Kylo Ren' },
      { option: 'c', value: 'Finn' },
      { option: 'd', value: 'Luke Skywalker' },
    ],
    answer: { option: 'b', value: 'Kylo Ren' },
  },
  {
    question:
      'While the Jedi use a number of crystal colors for their lightsabers, what color is preferred by the Sith? ',
    options: [
      { option: 'a', value: 'Blue' },
      { option: 'b', value: 'Green' },
      { option: 'c', value: 'Red' },
      { option: 'd', value: 'Purple' },
    ],
    answer: { option: 'c', value: 'Red' },
  },
  {
    question: 'What did Luke Skywalker lose in his fight with Darth Vader?',
    options: [
      { option: 'a', value: 'Left Hand' },
      { option: 'b', value: 'Right Hand' },
      { option: 'c', value: 'Light Saber' },
      { option: 'd', value: 'Spaceship' },
    ],
    answer: { option: 'b', value: 'Right Hand' },
  },
  {
    question: 'What is Han solo spaceship name?',
    options: [
      { option: 'a', value: 'Fly bot' },
      { option: 'b', value: 'Red booster' },
      { option: 'c', value: 'Millenium Falcon' },
      { option: 'd', value: 'Apollo 9' },
    ],
    answer: { option: 'c', value: 'Millenium Falcon' },
  },
];

//Initial leaderboard
var leaderboard = [
  {
    name: 'John',
    score: 4,
  },
  {
    name: 'Bill',
    score: 3,
  },
  {
    name: 'Roman',
    score: 2,
  },
];

//score of user
var score = 0;

var changeLeaderboard = false;

console.log(
  chalk.bgYellowBright.black.bold('Welcome to the Star Wars Quiz \n')
);

console.log(
  chalk.bgYellowBright.black.bold(' May the force be with you!!!  \n')
);

var username = readlineSync.question(chalk.blue('May I have your name? '));

console.log(`\nWelcome ${username}! Let\'s start\n`);

//Function of check answers
function checkAnswer(question, options, answer) {
  var userAnswer = readlineSync.question(
    chalk.cyan(
      `${question}\n\na. ${options[0].value}\nb. ${options[1].value}\nc. ${options[2].value}\nd. ${options[3].value}\n\nChoose one options [a, b, c, d]: `
    )
  );

  if (userAnswer.toLowerCase() === answer.option) {
    console.log(chalk.green('Correct Answer!'));
    score = score + 1;
  } else {
    console.log(chalk.red('Wrong Answer!'));
    score = score - 1;
  }
  console.log(chalk.yellow(`Current Score: ${score}`));
  console.log('--------------------');
}

for (var i = 0; i < questionSet.length; i++) {
  var currentQuestion = questionSet[i];
  checkAnswer(
    currentQuestion.question,
    currentQuestion.options,
    currentQuestion.answer
  );
}

console.log(chalk.bgWhite.black(`Your Final Score: ${score}\n`));

for (var i = 0; i < leaderboard.length; i++) {
  if (score >= leaderboard[i].score) {
    leaderboard.splice(i, 0, { name: username, score: score });
    changeLeaderboard = true;
    console.log(`Congratulations you secured Postion ${i + 1}!\n`);
    break;
  }
}

if (changeLeaderboard) {
  leaderboard.pop();
}

console.log('Leaderboard:\n');

console.table(leaderboard);
