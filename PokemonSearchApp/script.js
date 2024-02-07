let inputValue = document.getElementById("search-input");
const inputBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const imgContainer = document.getElementById("sprite-container");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const allpokemonsUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
let pokemonSearchUrl;

inputBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(inputValue.value);
  types.innerHTML = "";

  const fetchData = async () => {
    try {
      const res = await fetch(allpokemonsUrl);
      const data = await res.json();
      checkIdandName(data, inputValue.value);
    } catch (err) {
      console.log(err);
    }
  };

  fetchData();
});

const fetchData2 = async () => {
  try {
    const res = await fetch(pokemonSearchUrl);
    const data = await res.json();
    checkOtherInformation(data);
  } catch (err) {
    console.log(err);
  }
};

const checkIdandName = (data, inputVal) => {
  inputVal = checkInputString(inputVal);
  console.log(inputVal);
  let pokemontFound = false;
  for (let i = 0; i < data.results.length; i++) {
    if (inputVal === data.results[i].name) {
      pokemonSearchUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${data.results[i].name}`;
      console.log(
        `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${data.results[i].name}`
      );
      showInformation(i, data);
      fetchData2(pokemonSearchUrl);

      pokemontFound = true;
      break;
    } else if (inputVal == data.results[i].id) {
      pokemonSearchUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${data.results[i].id}`;
      showInformation(i, data);
      fetchData2(pokemonSearchUrl);
      pokemontFound = true;
      break;
    }
  }
  if (!pokemontFound) {
    alert("Pokémon not found");
  }
};

const checkOtherInformation = (data) => {
  data.types.forEach(({ type: { name } }) => {
    types.innerHTML += `<div id="type">${name.toUpperCase()}</div> `;
  });

  weight.innerText = `Weight: ${data.weight}`;
  height.innerText = `Height: ${data.height}`;

  hp.innerText = `${data.stats[0].base_stat}`;
  attack.innerText = `${data.stats[1].base_stat}`;
  defense.innerText = `${data.stats[2].base_stat}`;
  specialAttack.innerText = `${data.stats[3].base_stat}`;
  specialDefense.innerText = `${data.stats[4].base_stat}`;
  speed.innerText = `${data.stats[5].base_stat}`;
  imgContainer.innerHTML = `<img id="sprite" src=${data.sprites.front_default}>
  `;
};

const showInformation = (i, data) => {
  pokemonName.innerText = data.results[i].name.toUpperCase();
  pokemonId.innerText = `#${data.results[i].id}`;
};

const checkInputString = (input) => {
  let resultString = input.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
  return resultString;
};
