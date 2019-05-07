let teamOneScore = 0
let teamTwoScore = 0



// add score //
const addScoreTeamOne = () => {
  if (teamOneScore < 21) {
    teamOneScore += 1
    document.querySelector('.team1Score').textContent = teamOneScore
  }
}
const addScoreTeamTwo = () => {
  if (teamTwoScore < 21) {
    teamTwoScore += 1
    document.querySelector('.team2Score').textContent = teamTwoScore
  }
}

// subtract score //
const subtractScoreTeamOne = () => {
  if (teamOneScore > 0) {
    teamOneScore += -1
    document.querySelector('.team1Score').textContent = teamOneScore
  }
}
const subtractScoreTeamTwo = () => {
  if (teamTwoScore > 0) {
    teamTwoScore += -1
    document.querySelector('.team2Score').textContent = teamTwoScore
  }
}



// add Event Listener //

const main = () => {
  document.querySelector('.team-1-add-1-button')
    .addEventListener('click', addScoreTeamOne)
  document.querySelector('.team-1-subtract-1-button').addEventListener('click', subtractScoreTeamOne)
  document.querySelector('.team-2-add-1-button').addEventListener('click', addScoreTeamTwo)
  document.querySelector('.team-2-subtract-1-button').addEventListener('click', subtractScoreTeamTwo)
  document.querySelector('.update-team-one-input').addEventListener('click'
    updateTeamOne)

}


document.addEventListener('DOMContentLoaded', main)

// type vaules inside box and click update button to return new team name