var start = document.querySelector(".start-btn")
var words = document.querySelector(".word-blanks")
var win = document.querySelector(".win")
var lose = document.querySelector(".lose")

function getWin() {
  var storedWins = localStorage.getItem("winCount")
  if (storedWins == null) {
    winCounter = 0
  } else {
    winCounter = storedWins
  }
  win.textContent = winCounter
}

function getLoss() {
  var storedLoss = localStorage.getItem("lossCount")
  if (storedLoss == null) {
    lossCounter = 0
  } else {
    lossCounter = storedLoss
  }
  loss.textContent = lossCounter
}

function init() {
  getWin()
  getLoss()
}

init()



