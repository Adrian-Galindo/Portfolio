const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 150) + 1; // 1 et 151

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    let data = await fetch(requestString);
    console.log(data);

    let response = await data.json();
    console.log(response);

    document.getElementById("nom").textContent=response.name;
    document.getElementById("image").src = response.sprites.front_default;
};

changePokemon();
document.getElementById("card").addEventListener("click",changePokemon);
