class ContactSection{
  #contactSections = [];

  constructor( contactInformation = {}){
    const contactTypes = Object.keys(contactInformation);
    contactTypes.forEach( type => {
      this.#contactSections.push(
        this.#createSection({[type]: contactInformation[type]})
      );
    });
  }

  #createSection(params = {}){
    const contactType = Object.keys(params)[0];
    
    const container = document.createElement("div");
    container.id = contactType;

    const title = document.createElement("p");
    title.classList.add("title");
    title.innerText = contactType.toUpperCase();
    
    const text = document.createElement("p");
    text.classList.add("contactSectionText")
    text.innerText = params[contactType];
    
    container.appendChild(title);
    container.appendChild(text);
    return container;
  }

  render(){
    return this.#contactSections;
  }
}

export default ContactSection;