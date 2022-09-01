const animalsCardTemplate = document.querySelector("[data-animals-template]")
const animalsCardContainer = document.querySelector("[data-animals-cards-container]")
const searchInput = document.querySelector("[data-search]")

let animalss = []
let sortDesec="?sortBy=createdAt&order=desc";// onclick activated event
let sortAsec= "?sortBy=createdAt&order=asc";
var x;
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  animalss.forEach(animals => {
    const isVisible =
      animals.name.toLowerCase().includes(value) ||
      animals.id.toLowerCase().includes(value)
    animals.element.classList.toggle("hide", !isVisible)
  })
})
// testing(){
//     let x=1;
// 
//function for basic search
    function testing(){
      method: "GET",
    fetch("https://60d075407de0b20017108b89.mockapi.io/animals").then(res => res.json()).then(data => {
    animalss = data.map(animals => {
      const card = animalsCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = animals.name;
      body.textContent = animals.id;
      animalsCardContainer.append(card)
      return { name: animals.name, id: animals.id, element: card };
    })
  })
}

// function for sorting in acending order
function accending(){
    method: "GET",
    fetch("https://60d075407de0b20017108b89.mockapi.io/animals?sortBy=createdAt&order").then(res => res.json()).then(data => {
    animalss = data.map(animals => {
      const card = animalsCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = animals.name;
      body.textContent = animals.id;
      animalsCardContainer.append(card)
      return { name: animals.name, id: animals.id, element: card };
    })
  })
}
function Decending(){
      method: "GET",
      fetch("https://60d075407de0b20017108b89.mockapi.io/animals?sortBy=createdAt&order=desc").then(res => res.json()).then(data => {
      animalss = data.map(animals => {
        const card = animalsCardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[data-header]");
        const body = card.querySelector("[data-body]");
        header.textContent = animals.name;
        body.textContent = animals.id;
        animalsCardContainer.append(card)
        return { name: animals.name, id: animals.id, element: card };
      })
    })
}
function Reset(){
  window.location.reload();
}
