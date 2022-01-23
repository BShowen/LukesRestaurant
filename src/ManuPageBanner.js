import hatch from "./assets/images/header-hatch.png";

class MenuPageBanner {

  #container = document.createElement("div");
  #bannerImage = new Image();

  constructor(){
    this.#bannerImage.src = hatch;
    this.#container.classList.add("menuPageBanner");
  }

  render(){
    this.#container.appendChild(this.#bannerImage);
  }
}