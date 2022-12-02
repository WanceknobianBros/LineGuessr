var global = {}

global.goalValue = Math.round(Math.random() * 100)
onNew()
onEnter()

function onNew() {
  global.goalValue = Math.round(Math.random() * 100)
  document.getElementById("goal").innerHTML = "Goal: Set the slider to " + global.goalValue + "%"
  document.getElementById("result").innerHTML = ""
}

function onConfirm() {
  var chosenValue = document.getElementById("slider").value
  console.log(chosenValue)
  var result = chosenValue - global.goalValue
  document.getElementById("result").innerHTML = "Result: You were " + result + "%" + " off"
  if (result === 0) {
    document.getElementById("result").innerHTML = "Yay, you got it!"
  }
}


function onEnter() {
  var scoreThumb = document.getElementById("thumbvalue").value
  console.log(scoreThumb)
  document.getElementById("thumb").innerHTML = scoreThumb

  if (scoreThumb > 10) {

    global.rank = "F"

    if (scoreThumb > 15) {

      document.getElementById("thumb").style.left = "0px"

    } else {

      document.getElementById("thumb").style.left = (53 - (53 * (scoreThumb - 10) / 5)).toString() + "px"

    }
  } else if (scoreThumb > 8 && scoreThumb <= 10) {

    global.rank = "E"
    document.getElementById("thumb").style.left = (56.5 * 2 - (58.3 * (scoreThumb - 8) / 2)).toString() + "px"

  } else if (scoreThumb > 6 && scoreThumb <= 8) {

    global.rank = "D"
    document.getElementById("thumb").style.left = (59.5 * 3 - (63 * (scoreThumb - 6) / 2)).toString() + "px"

  } else if (scoreThumb > 5 && scoreThumb <= 6) {

    global.rank = "C"
    document.getElementById("thumb").style.left = (59.75 * 4 - (63 * (scoreThumb - 5))).toString() + "px"

  } else if (scoreThumb > 4 && scoreThumb <= 5) {

    global.rank = "B"
    document.getElementById("thumb").style.left = (60.3 * 5 - (63 * (scoreThumb - 4))).toString() + "px"

  } else if (scoreThumb > 3 && scoreThumb <= 4) {

    global.rank = "A"
    document.getElementById("thumb").style.left = (60.7 * 6 - (63 * (scoreThumb - 3))).toString() + "px"

  } else if (scoreThumb > 2 && scoreThumb <= 3) {

    global.rank = "S"
    document.getElementById("thumb").style.left = (60.7 * 7 - (63 * (scoreThumb - 2))).toString() + "px"

  } else if (scoreThumb >= 1 && scoreThumb <= 2) {

    global.rank = "S+"
    document.getElementById("thumb").style.left = (60 * 8 - (56 * (scoreThumb - 1))).toString() + "px"

  } else if (scoreThumb < 1) {

    global.rank = "S+"
    document.getElementById("thumb").style.left = "480px"

  }
}
