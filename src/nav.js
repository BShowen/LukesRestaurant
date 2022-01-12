import "./assets/css/nav.css";
import lukesLogo from "./assets/images/lukes_logo.png";

const navButton = function(text = null){
  const div = document.createElement("div");
  div.className = "navButton";
  const p = document.createElement("p");
  p.innerText = text;
  div.appendChild(p);
  return div;
}

const nav = (function(){
  const navContainer = document.createElement("nav");

  const navLogoContainer = document.createElement("div");
  navLogoContainer.id = "navLogoContainer";
  const navImage = new Image();
  navImage.src = lukesLogo;
  navLogoContainer.appendChild(navImage);
  navContainer.appendChild(navLogoContainer);

  const homeButton = new navButton("HOME");
  homeButton.id = "home";
  const menuButton = new navButton("MENU");
  menuButton.id = "menu";
  const contactButton = new navButton("CONTACT");
  contactButton.id = "contact";
  const navButtons = [homeButton, menuButton, contactButton];
  navButtons.forEach( btn => {
    navContainer.appendChild(btn);
  });
  return navContainer;
})();

export default nav ;