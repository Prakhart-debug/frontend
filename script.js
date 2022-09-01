const animalsCardTemplate = document.querySelector("[data-animals-template]")
const animalsCardContainer = document.querySelector("[data-animals-cards-container]")
const searchInput = document.querySelector("[data-search]")

let animalss = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  animalss.forEach(animals => {
    const isVisible =
      animals.name.toLowerCase().includes(value)
    animals.element.classList.toggle("hide", !isVisible)
  })
})

fetch("https://60d075407de0b20017108b89.mockapi.io/animals")
  .then(res => res.json())
  .then(data => {
    animalss = data.map(animals => {
      const card = animalsCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = animals.name
      body.textContent = animals.email
      animalsCardContainer.append(card)
      return { name: animals.name, email: animals.email, element: card }
    })
  })