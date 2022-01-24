/**
 * Creates a div with a required title. 
 * Create a single child node within the div my passing in an options object. The key is the tag type and the value is the inner text of that tag type. 
 * options = { p: "Hi" } //creates a child p tag with the inner text set to "Hi";
 * options = { button: "Click here" } //creates a button ag with the inner text set to "click here"
 */

class BookNowSection{

  #sectionContainer = document.createElement("div");
  #sectionTitle = document.createElement("p");
  #sectionContent;

  constructor(title, options = {}){
    this.#sectionContainer.classList.add("bookNowSection-bottom");
    this.#sectionTitle.innerText = title;
    
    const tagType = Object.keys(options)[0];
    this.#sectionContent = document.createElement(tagType);
    this.#sectionContent.innerText = options[tagType];
    
  }
  
  render(){
    this.#sectionContainer.appendChild(this.#sectionTitle);
    this.#sectionContainer.appendChild(this.#sectionContent);
    return this.#sectionContainer;
  }
}

export default BookNowSection;