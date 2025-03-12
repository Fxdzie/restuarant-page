import "./styles.css";
import restuarantImage from "./images/Untitled (2).png";

const contentContainer = document.querySelector("#content");

const refresh = (container)=>{
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
};

function contactLoad(){
    const contactText = document.createElement("div");
    contactText.classList.add("contact-text");
    contactText.innerText = "Contact";

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("logo-div");
    const logo = document.createElement("img");
    logo.classList.add("logo-contact");
    logo.src = restuarantImage;
    imageContainer.appendChild(logo);

    const descriptionText = document.createElement("div");
    descriptionText.classList.add("contact-description");
    descriptionText.innerText = "Would you like to make a reservation? Or maybe a clarification about our menu? Contact us at: ";

    const emailContainer = document.createElement("div");
    emailContainer.classList.add("email");
    emailContainer.innerText = "manwasfinedining@gmail.com";

    contentContainer.appendChild(contactText);
    contentContainer.appendChild(imageContainer);
    contentContainer.appendChild(descriptionText);
    contentContainer.appendChild(emailContainer);
}

export {contactLoad};