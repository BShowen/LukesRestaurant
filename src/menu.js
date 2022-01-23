import MenuCategory from "./MenuCategory.js";
import chevron from "./assets/images/chevron-down.svg";

/**
 * The Menu class allows you to create a menu, eg. Breakfast menu, Lunch menu, Dinner menu. 
 * Menus have categories. For example, Breakfast might have a Snack, Drinks, and/or Desserts category. 
 * The Lunch menu might have Sandwiches, Burgers, and Salads category. 
 */
 class Menu{
  #cardContainer = document.createElement("div");
  #titleContainer = document.createElement("div");
  #titleText = document.createElement("h2");
  #cardBody = document.createElement("div");
  #leftSideCardBody = document.createElement("div");
  #rightSideCardBody = document.createElement("div");
  #chevronIcon = new Image();

  constructor({title}){
    this.#chevronIcon.src = chevron;  
    this.#cardContainer.className = "menu";
    this.#titleContainer.className = "titleContainer";
    this.#titleText.innerText = title;
    this.#cardBody.classList.add("menuBody");
    this.#leftSideCardBody.className = "left";
    this.#rightSideCardBody.className = "right";
    // OnClick call handleClick and pass in the child node to be expanded. 
    this.#titleContainer.addEventListener("click", this.#handleTitleClick.bind(this.#cardBody) );
    this.#titleContainer.addEventListener("click", this.#rotateChevron);
  }

  // The menu body is hidden from view until the user clicks on the title banner and triggers this method. 
  // This method toggles the class that expands the menu body. 
  #handleTitleClick(){
    // "this" has been bound to "this.#menuBody"
    this.classList.toggle("expanded");
    if(this.style.padding == "5px"){
      setTimeout( () => {
        this.style.padding = "0px";
        this.style.margin = "0px";
      }, 330);
    }else{
      this.style.padding = "5px";
      this.style.margin = "5px";
    }
  }

  #rotateChevron(){ 
    this.lastChild.classList.toggle("rotate");
  }

  // adds menu items to the menu. 
  // categories = [
  //   {
  //     category: "breakfast", 
  //     meals: [
  //       {
  //         name: "Greasy Cheesy", 
  //         description: "A cheese burger."
  //       }, 
  //       {
  //         name: "The clucker", 
  //         description: "A chicken sandwich."
  //       }, 
  //     ],
  //   },
  // ];
  addCategory(categories = []){

    const leftSide = (function(){
      let left = false;
      function toggle(){
        left = !left;
        return left;
      }
      return toggle;
    })();

    categories.forEach( category => {
      // If left === 0 then add the node to the left div. Else add the node to the right div. 
      if(leftSide()){ 
        this.#leftSideCardBody.appendChild( new MenuCategory(category).render() );
      }else{
        this.#rightSideCardBody.appendChild( new MenuCategory(category).render() );
      }
    });
  }   

  render(){
    this.#titleContainer.appendChild(this.#titleText);
    this.#titleContainer.appendChild(this.#chevronIcon);
    this.#cardContainer.appendChild(this.#titleContainer);
    this.#cardBody.appendChild(this.#leftSideCardBody);
    this.#cardBody.appendChild(this.#rightSideCardBody);
    this.#cardContainer.appendChild(this.#cardBody);
    return this.#cardContainer
  }
}

export default Menu;