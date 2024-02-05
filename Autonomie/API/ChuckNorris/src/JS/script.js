const blagueChuck = async () => {
    let requestString = `https://api.chucknorris.io/jokes/random`;

    let data = await fetch(requestString);
    console.log(data);

    let response = await data.json();
    console.log(response);

    document.getElementById("blague").textContent=response.value;
};

blagueChuck()
document.getElementById("card").addEventListener("click",blagueChuck);