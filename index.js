const chuckNorrisJokesAPI = "https://api.chucknorris.io/jokes/random";
document.getElementById("getJokeBtn").addEventListener("click", async () => {
  const response = await fetch(chuckNorrisJokesAPI);
  const data = await response.json();
  document.getElementById("jokeText").innerText = data.value;
});
