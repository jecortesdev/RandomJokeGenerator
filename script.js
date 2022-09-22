const jokerContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const api = "https://v2.jokeapi.dev/joke/Any?lang=en&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    jokerContainer.classList.remove("fade");
    fetch(api)
    .then(data => data.json())
    .then(item => {
        jokerContainer.textContent = `${item.joke}`;
        jokerContainer.classList.add("fade")
    });
}

btn.addEventListener("click",getJoke);
getJoke();
