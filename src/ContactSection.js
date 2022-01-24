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
    const container = document.createElement("div");
    
    const contactType = Object.keys(params)[0];

    const title = document.createElement("p");
    title.innerText = contactType.toUpperCase();
    
    const text = document.createElement("p");
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