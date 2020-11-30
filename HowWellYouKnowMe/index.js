var readLine=require("readline-sync");
const chalk = require('chalk');

var userLogged=readLine.question(chalk.yellow("Please enter your name "));

console.log(chalk.blue.bold("Hey "+chalk.blueBright(userLogged)+" great to have you onboard"+"\n"+"Lets check How well you know Kiran !"));

var score=0;

function quizCheck(question,answer){
  var userAnswer=readLine.question(question);
//console.log(userAnswer);
//console.log(answer);

  if(userAnswer==answer){
    console.log(chalk.green("You are right"));
    score=score+1;
  }else{
    console.log(chalk.red("Wrong Answer"));
    score=score-1;
  }

  console.log(chalk.blue("Your Score ",score));
}

var questionsList=[
  {question:"Is Kiran photogenic ?",
  answer:"no"
  },
  {question:
  "What is Kiran's age(in Months)? ",
  answer:"270"
  },
  {question:"What was Kiran's favourite subject in School? ",
  answer:"mathematics"
  },
  {question:"What will Kiran choose among Sandwich, Pizza, Pasta? ",
  answer:"Sandwich"
  },
  {question:"What is Kiran's hobby travelling or watching movie ? ",
  answer:"travelling"
  },
]

for(let i=0;i<questionsList.length;i++){
  
  quizCheck(questionsList[i].question,questionsList[i].answer);
}


console.log("----------------------------------------");
console.log(chalk.bold.green("Your final score is "+score));