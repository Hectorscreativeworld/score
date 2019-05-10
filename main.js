let teamOneScore = 0
let teamTwoScore = 0

const disableButtons = () => {
  let buttons = document.querySelectorAll('.game-btn')
  buttons.forEach(function (btn) {
    btn.setAttribute('disabled', 'true')
  })
  document.querySelector('.restart').style.display = 'block'
}

const enableButtons = () => {
  let buttons = document.querySelectorAll('.game-btn')
  buttons.forEach(function (btn) {
    btn.removeAttribute('disabled')
  })
  document.querySelector('.restart').style.display = 'none'
}

// Add

const addTeamOne = () => {
  if (teamOneScore < 21) {
    teamOneScore += 1
    document.querySelector('.team1Score').textContent = teamOneScore
  }
  if (teamOneScore === 21) {
    document.querySelector('.team1Message').textContent = 'Team One Wins'
    disableButtons()
  }
}

const addTeamTwo = () => {
  if (teamTwoScore < 21) {
    teamTwoScore += 1
    document.querySelector('.team2Score').textContent = teamTwoScore
  }
  if (teamTwoScore === 21) {
    document.querySelector('.team2Message').textContent = 'Team Two Wins'
    disableButtons()
  }
}

// subtrack

const subtractTeamOne = () => {
  if (teamOneScore > 0) {
    teamOneScore += -1
    document.querySelector('.team1Score').textContent = teamOneScore
  }
}

const subtractTeamTwo = () => {
  if (teamTwoScore > 0) {
    teamTwoScore += -1
    document.querySelector('.team2Score').textContent = teamTwoScore
  }
}
const restartGame = () => {
  // scores go back to zero
  teamOneScore = 0
  teamTwoScore = 0
  document.querySelector('.team1Score').textContent = teamOneScore
  document.querySelector('.team2Score').textContent = teamTwoScore
  // the winning messages go away
  document.querySelector('.team1Message').textContent = ''
  document.querySelector('.team2Message').textContent = ''

  enableButtons()
}

//Update Team Name

const updateTeamOne = () => {
  updateTeam('one')
}

const updateTeamTwo = () => {
  updateTeam('two')
}

const updateTeamOne = number() => {
  let teamInput = document.querySelector('.update-team-' + number + '-input')
  let teamName = teamInput.value
  if (teamName !== '') {
    document.querySelector('.team-' + number + '-name').textContent = teamName
    teamInput.value = ''
  }
}

const main = () => {
  document
    .querySelector('.team-1-add-1-button')
    .addEventListener('click', addTeamOne)
  document
    .querySelector('.team-1-subtract-1-button')
    .addEventListener('click', subtractTeamOne)
  document
    .querySelector('.team-2-add-1-button')
    .addEventListener('click', addTeamTwo)
  document
    .querySelector('.team-2-subtract-1-button')
    .addEventListener('click', subtractTeamTwo)
  document.querySelector('.restart').addEventListener('click', restartGame)
  document
    .querySelector('.update-team-1-name')
    .addEventListener('click', updateTeamOne)
  document
    .querySelector('.update-team-2-name')
    .addEventListener('click', updateTeamTwo)
}

document.addEventListener('DOMContentLoaded', main)