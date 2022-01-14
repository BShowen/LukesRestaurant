/**
 * The Menu class allows you to create a menu and add menu items to the menu. 
 * Menu items would be meals that you can order from the menu. 
 */
class Menu{
  #cardContainer = document.createElement("div");
  #cardTitle = document.createElement("h2");
  #cardBody = document.createElement("div");

  constructor({title}){
    this.#cardTitle.innerText = title;
    this.#cardContainer.className = "cardContainer";
    this.#cardTitle.className = "cardTitle";
    this.#cardBody.className = "cardBody";
  }

  // adds menu items to the menu. 
  addMenuItems(menuItems = []){
    menuItems.forEach( menuItem => {
      this.#cardBody.appendChild(new MenuItem(menuItem).render());
    });
  }   

  render(){
    this.#cardContainer.appendChild(this.#cardTitle);
    this.#cardContainer.appendChild(this.#cardBody);
    return this.#cardContainer
  }
}

/**
 * MenuItem class returns a div with an h2 title and a paragraph description as children nodes. 
 */
class MenuItem{
  #menuItemContainer = document.createElement("div");
  #name = document.createElement("h2");
  #description = document.createElement("p");

  constructor({name, description}){
    this.#name.innerText = name;
    this.#description.innerText = description;
    this.#menuItemContainer.className = "menuItemContainer";
  }

  render(){
    this.#menuItemContainer.appendChild(this.#name);
    this.#menuItemContainer.appendChild(this.#description);
    return this.#menuItemContainer;
  }
}

/**
 * MenuPage is an object that holds all of the menus for the restaurant. In my case "Lunch" and "Dinner" menus. 
 * Each menu is an attribute of the MenuPage. 
 */
class MenuPage{
  // This is the container for the menu page. 
  #pageContainer = document.createElement("div");
  
  /**
   *  These are all of the individual menus. 
   * #menus = {
   *  lunch: Menu object, 
   *  dinner: Menu object, 
   * }
   */
  #menus;

  constructor(){
    this.#menus = {};
    this.#pageContainer.id = "menuPageContainer";
  }

  /**
   * addMenu({string: title}); 
   * Adds a menu to the menu page. 
   * title should be the name of the menu. 
   */
  addMenu({title}){
    this.#menus[title] = new Menu({title: title});
  }

  /**
   * Returns the specified menu. 
   * This is used so the caller can use the methods defined in the Menu class. 
   */
  getMenu(menuTitle){
    try{
      if(this.#menus[menuTitle]){
        return this.#menus[menuTitle];
      }
      throw new Error(`${menuTitle} not found.`);
    } catch(error){
      console.log(error.message);
    }
  }

  // Returns an HTML DOM node with all children nodes. Ready to be rendered into the HTML DOM. 
  render(){
    Object.keys(this.#menus).forEach( key => {
      this.#pageContainer.appendChild(this.#menus[key].render());
    });
    return this.#pageContainer;
  }
}

const page = new MenuPage();
page.addMenu({title: "Breakfast"});
page.addMenu({title: "Lunch"});
page.getMenu("Lunch").addMenuItems(
  [
    {
      name: "Mc Double", 
      description: "A delicious burger."
    }, 
    {
      name: "Mc Chicken", 
      description: "A delicious chicken sandwich!"
    }, 
  ]
);
page.getMenu("Breakfast").addMenuItems([
  {
    name: "Healthy eggs", 
    description: "Scrambled eggs and quinoa"
  }, 
  {
    name: "The American", 
    description: "Fried egss (of course!), Bacon, Grits with cheese, and a screeching bald eagle"
  }
]);

export default page; 