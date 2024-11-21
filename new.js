const jokeContainer = document.getElementById("jokep")
const btn = document.getElementById("jokeb")
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,explicit";
let getJoke = () => {
    fetch(url)
    .the(data => data.json())
    .then(item => {jokeContainer.textContent = '${item.jokep}';});
}   
jokeb.addEventLister("click", getJoke);
getJoke();