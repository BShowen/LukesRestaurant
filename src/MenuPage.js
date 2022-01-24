import "./assets/css/menu.css";
import PageBanner from "./PageBanner.js";
import Menu from "./Menu.js";

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
    return this.#menus[title];
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
    this.#pageContainer.appendChild( new PageBanner("MENU").render() );

    Object.keys(this.#menus).forEach( key => {
      this.#pageContainer.appendChild(this.#menus[key].render());
    });
    return this.#pageContainer;
  }
}

export default MenuPage;