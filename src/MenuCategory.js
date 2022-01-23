import Meal from "./Meal.js";

/**
 * MenuCategory class returns a div with an h2 title and a paragraph description as children nodes. 
 */
 class MenuCategory{
  #categoryContainer = document.createElement("div");
  #categoryTitle = document.createElement("h2");
  #meals = [];

  constructor({category, meals}){
    this.#categoryTitle.innerText = category;
    this.#categoryTitle.className = "w100";
    this.#categoryContainer.className = "menuCategory";
    this.#addMeals(meals);
  }

  #addMeals(meals = []){
    meals.forEach( meal => {
      this.#meals.push( new Meal(meal) );
    })
  } 

  render(){
    this.#categoryContainer.appendChild(this.#categoryTitle);
    this.#meals.forEach( meal => {
      this.#categoryContainer.appendChild( meal.render() );
    });
    return this.#categoryContainer;
  }
}

export default MenuCategory;