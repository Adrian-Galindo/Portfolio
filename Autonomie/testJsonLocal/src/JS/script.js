fetch("src/JSON/test.json")
    .then(rep=>rep.json())
        .then(data=>console.log((data)));

let testIn = 
    {
    "nom": "Galindo Adrian",
    "age": 20,
    "ville": "Rimac",
    }
;
console.log(testIn.ville);

let testIn2 = `[{
    "nom": "Galindo Eduardo",
    "age": 23,
    "ville": "Rimac"
},
{
    "nom": "Galindo Adrian",
    "age": 20,
    "ville": "Rimac"
}]`;
console.log(JSON.parse(testIn2)[0].nom);

document.getElementById('text').textContent=testIn.nom;