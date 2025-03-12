import "./styles.css";
import restuarantImage from "./images/Untitled (2).png";

const contentContainer = document.querySelector("#content");

function pageLoad(){
    
    const welcomeText = document.createElement("div");
    welcomeText.classList.add("welcome");
    welcomeText.innerText = "Welcome to Manwa's";

    const firstImageContainer = document.createElement("div");
    firstImageContainer.classList.add("logo-div");
    const firstImage = document.createElement("img");
    firstImage.src = restuarantImage;
    firstImageContainer.appendChild(firstImage);

    const descriptionText = document.createElement("div");
    descriptionText.classList.add("initial-description");
    descriptionText.innerText = "Manwa's is a fine dining establishment where every flavour tells a story. A place where sensory indulgence is unlocked and your next culinary adventure awaits. We invite you to encounter a flavour adventure you have never experienced before."

    contentContainer.appendChild(welcomeText);
    contentContainer.appendChild(firstImageContainer);
    contentContainer.appendChild(descriptionText);
}

export {pageLoad};
