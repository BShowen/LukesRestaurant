class MenuPageBanner {

  #mainContainer = document.createElement("div");
  #leftContainer = document.createElement("div");
  #middleContainer = document.createElement("div");
  #rightContainer = document.createElement("div");

  constructor(){
    this.#mainContainer.classList.add("menuPageBanner");
    
    const bannerTitle = document.createElement("h2");
    bannerTitle.innerText = "MENU";
    this.#middleContainer.appendChild(bannerTitle);

    this.#leftContainer.classList.add("left");
    this.#rightContainer.classList.add("right");
  }

  render(){
    this.#mainContainer.appendChild(this.#leftContainer);
    this.#mainContainer.appendChild(this.#middleContainer);
    this.#mainContainer.appendChild(this.#rightContainer);

    return this.#mainContainer;
  }
}

export default MenuPageBanner;