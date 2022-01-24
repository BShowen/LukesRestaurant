import "./assets/css/home.css";
import lukesHomeLogo from "./assets/images/lukes-home-logo.png";

const homePage = (function(){
  const page = document.createElement("div");
  page.appendChild(background());

  const pageContent = document.createElement("div");
  pageContent.className = "pageContent";
  pageContent.appendChild(logo());
  pageContent.appendChild(reservationButton());
  
  page.appendChild(pageContent);
  return page;
})();

function background(){
  const videoBackground = document.createElement("div");
  videoBackground.id = "videoBackground";
  const iframe = document.createElement("iframe");
  // iframe.src = "https://www.youtube.com/embed/DGVJ5ptA2B4?autoplay=1&mute=1&playlist=DGVJ5ptA2B4&loop=1&modestbranding=1&controls=0&showinfo=0";
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("allowfullscreen", "true");
  iframe.setAttribute("frameborder", "0");
  videoBackground.appendChild(iframe);

  const overlay = document.createElement("div");
  overlay.id = "videoOverlay";
  videoBackground.appendChild(overlay);
  return videoBackground;
}

function logo(){
  const logoContainer = document.createElement("div");
  logoContainer.id = "mainPageLogoContainer";
  const image = new Image();
  image.src = lukesHomeLogo;
  logoContainer.appendChild(image);
  return logoContainer;
}

function reservationButton(){
  const buttonContainer = document.createElement("div");
  buttonContainer.id = "reservationButtonContainer";
  const button = document.createElement("button");
  button.id = "reservationButton";
  const buttonText = document.createElement("p");
  buttonText.innerText = "BOOK A TABLE";
  button.appendChild(buttonText);
  buttonContainer.appendChild(button);
  return buttonContainer;
}


export default homePage;