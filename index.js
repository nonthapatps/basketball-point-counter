let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

let homeScore = 0
let guestScore = 0

// homescoring
function homeScores1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homeScores2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homeScores3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

// guest scoring
function guestScores1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestScores2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestScores3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

// reset score
function reset() {
    homeScore = 0
    homeScoreEl.textContent = homeScore
    guestScore = 0
    guestScoreEl.textContent = guestScore
}