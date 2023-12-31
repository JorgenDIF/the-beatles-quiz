const username = document.getElementById("username");
const saveScoresBtn = document.getElementById("saveScoresBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
console.log("Most recent score: " + mostRecentScore);
const highScoresString = localStorage.getItem("highScores");
const highScores = highScoresString ? JSON.parse(highScoresString) : [];

finalScore.innerText = "You scored " + mostRecentScore + " points!";
username.addEventListener("keyup", () => {
  saveScoresBtn.disabled = !username.value;
});

const saveHighScore = (e) => {
 e.preventDefault();
 

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("highscores.html");
};
document.getElementById("saveScoresBtn").addEventListener("click", saveHighScore);
