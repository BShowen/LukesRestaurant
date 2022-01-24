import "./assets/css/pageBanner.css";

class PageBanner {

  #mainContainer = document.createElement("div");
  #leftContainer = document.createElement("div");
  #middleContainer = document.createElement("div");
  #rightContainer = document.createElement("div");

  constructor(bannerText = ""){
    this.#mainContainer.classList.add("pageBanner");
    
    const bannerTitle = document.createElement("h2");
    bannerTitle.innerText = bannerText.toUpperCase();
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

export default PageBanner;