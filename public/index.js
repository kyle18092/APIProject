let name = document.getElementById('pokemonName')
let image = document.getElementById('pokemonImage')
let baseUrl = 'https://pokeapi.co/api/v2/pokemon/'


function randomPokemon() {
  const pokemonArray = ["voltorb", "onix", "slowpoke", "machamp", "psyduck", "zubat", "jigglypuff", "raichu", "raticate", "kakuna", "metapod", "nidoran", "clefairy", "ninetails", "mankey", "abra", "poliwag", "meowth", "ekans", "pidgeot", "pidgey", "kakuna", "weedle","caterpie","charmeleon", "pikachu", "charizard","ivysaur","bulbasaur", "rattata", "squirtle"];
  let randomUrl = baseUrl + pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
  fetchPokemon(randomUrl);
}

function fetchPokemon(url){
  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then((data) => {
    name.innerHTML = data.name.toUpperCase()
    image.src = data.sprites.front_default;
    document.getElementById('pokemonWeight').innerText = "Weight: " + data.weight + " lbs";
    document.getElementById('pokemonHeight').innerText = "Height: " + data.height + " feet";
    document.getElementById('pokemonAbilities').innerText ="Abilities: " + getAbilities(data.abilities);
    document.getElementById('pokemonType').innerText="Type: " + getType(data.types);
    console.log(data);
  });
}

function getAbilities(abilities) {
  let pokemonAbility = '';
  console.log(abilities)
  for (let index = 0; index < abilities.length; index++) {
    if(index != abilities.length - 1) {
      pokemonAbility +=  abilities[index].ability.name.toUpperCase() + ",  ";
    } else {
      pokemonAbility +=  abilities[index].ability.name.toUpperCase();
    }
    
    
  }
  return pokemonAbility;

}
function getType(types) {
  let pokemonType = '';
  console.log(types)
  for (let index = 0; index < types.length; index++) {
    if(index != types.length - 1) {
      pokemonType +=  types[index].type.name.toUpperCase() + ",  ";
    } else {
      pokemonType +=  types[index].type.name.toUpperCase();
    }
    
    
  }
  return pokemonType;

}

fetchPokemon(baseUrl + 'pikachu')
