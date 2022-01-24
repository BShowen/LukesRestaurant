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
    const topSection = new BookNowSection("BOOK NOW", {button: "BOOK NOW"});
    const bottomSection = new BookNowSection("JOIN OUR TEAM", { p: "FILL OUT AN APPLICATION TO JOIN OUR TEAM"});
    this.#bookNowSection.appendChild( topSection.render() );
    this.#bookNowSection.appendChild( bottomSection.render() );
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
  }

  render(){
    this.#pageContainer.appendChild( new PageBanner("CONTACT").render() );
    this.#pageContainer.appendChild(this.#bookNowSection);
    this.#pageContainer.appendChild(this.#contactInfoSection);
    return this.#pageContainer;
  }
}

export default ContactPage;