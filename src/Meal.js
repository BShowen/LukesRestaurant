class Meal{
  #container = document.createElement("div");
  #mealDescription = document.createElement("p");

  constructor(meal){
    this.#container.classList.add("mealContainer", "w100");
    this.#mealDescription.innerText = `${meal.name} ${meal.description}`;
  }

  render(){
    this.#container.appendChild(this.#mealDescription);
    return this.#container;
  }
}

export default Meal;