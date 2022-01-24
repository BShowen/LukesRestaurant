import "./assets/css/contactPage.css";
import PageBanner from "./PageBanner.js";
import BookNowSection from "./BookNowSection.js";
import ContactSection from "./ContactSection.js";

class ContactPage{

  // This is the container for the menu page. 
  #pageContainer = document.createElement("div");
  #bookNowSection = document.createElement("div");
  #contactInfoSection = document.createElement("div");


  constructor(){
    this.#pageContainer.id = "contactPageContainer";
    this.#renderBookNowSection();
    this.#renderContactInformation();
  }

  #renderBookNowSection(){
    const topSection = new BookNowSection("BOOK NOW", {button: "Book now"}).render();
    topSection.classList.add("topSection");
    const bottomSection = new BookNowSection("JOIN OUR TEAM", { p: "Fill out an application to join our team."}).render();
    bottomSection.classList.add("bottomSection");
    
    this.#bookNowSection.appendChild( topSection );
    this.#bookNowSection.appendChild( bottomSection );
    this.#bookNowSection.id = "bookNowSection";
  }

  #renderContactInformation(){
    const [phone, address, email] = new ContactSection({
      phone: "407.674.2400", 
      address: "640 South Orlando Ave. Maitland, Florida 32751", 
      email: "events@eatatlukes.com"
    }).render();
    this.#contactInfoSection.appendChild(phone);
    this.#contactInfoSection.appendChild(address);
    this.#contactInfoSection.appendChild(email);
    this.#contactInfoSection.id = "contactSection";
  }

  render(){
    this.#pageContainer.appendChild( new PageBanner("CONTACT").render() );
    this.#pageContainer.appendChild(this.#bookNowSection);
    this.#pageContainer.appendChild(this.#contactInfoSection);
    return this.#pageContainer;
  }
}

export default ContactPage;