const fs = require('fs')
const express = require('express');

// Constants
const dist = `${__dirname}/dist`;
const port = 3000;

// Setup app
const app = express()
app.use(express.json());
app.use(express.static(dist));

function getDate() {
  const toTwoDigits = num => num < 10 ? '0' + num : num;
  let today = new Date();
  let year = today.getFullYear();
  let month = toTwoDigits(today.getMonth() + 1);
  let day = toTwoDigits(today.getDate());
  let hours = toTwoDigits(today.getHours());
  let minutes = toTwoDigits(today.getMinutes());
  return `${day}-${month}-${year} ${hours}:${minutes}`;
}


function readLeaderBoard() {
  try {
    const file = fs.readFileSync("./leaderboard.json");
    return JSON.parse(file);
  } catch {
    return [];
  }
}
function writeLeaderBoard(leaderboard) {
  try {
    const data = JSON.stringify(leaderboard)
    fs.writeFileSync("./leaderboard.json", data)
  } catch (e) {
    console.log(e)
  }
}
function addScore(pseudo, score) {
  const date = getDate();
  let classement = readLeaderBoard();
  classement.push({
    pseudo, score, date
  })
  classement = classement.sort((a, b) => a.score > b.score)
  writeLeaderBoard(classement);
  return classement;
}

app.all('/end-of-quizz', (req, res, next) => {
  const { pseudo, score } = req.body;
  const answer = addScore(pseudo, score)
  res.send(JSON.stringify(answer));
})

app.listen(port);
