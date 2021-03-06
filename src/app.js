import "./assets/css/reset.css";
import "./assets/css/app.css";
import nav from "./nav.js";
import homePage from "./home.js";
import MenuPage from "./MenuPage.js";
import ContactPage from "./ContactPage.js";

import { lunch, dinner, brunch, cocktailsAndBeer, wine } from "./testDB.js";

const app = (function(){

  const _root = document.querySelector("#app");
  const _navButtons = nav.childNodes;
  const _contentContainer = document.createElement("div");

  const _appendNav = function(){
    _root.appendChild(nav);
  }
  const _events = {
    home: () => {
      _clearPageContent();
      _contentContainer.appendChild(homePage);
    }, 
    menu: () => {
      _clearPageContent();
      const page = new MenuPage();

      page.addMenu({title: "DINNER"}).addCategory(dinner);
      page.addMenu({title: "LUNCH"}).addCategory(lunch);
      page.addMenu({title:"BRUNCH"}).addCategory(brunch);
      page.addMenu({title: "COCKTAILS & BEER"}).addCategory(cocktailsAndBeer);
      page.addMenu({title: "WINE"}).addCategory(wine);

      _contentContainer.appendChild(page.render());
    }, 
    contact: () => {_clearPageContent();
      _clearPageContent();
      _contentContainer.appendChild( new ContactPage().render() ); 
    }
  }
  const _addEventListeners = function(){
    _navButtons.forEach( btn => {
      btn.addEventListener("click", _events[btn.id]);
    });
  }
  const _clearPageContent = function(){
    _contentContainer.innerHTML = "";
  }
  const _appendContentContainer = function(){
    _contentContainer.id = "contentContainer";
    _contentContainer.appendChild(homePage);
    _root.appendChild(_contentContainer);
  }

  const start = function(){
    _appendNav();
    _appendContentContainer();
    _addEventListeners();
  }

  return { start }

})();

app.start();