import "./styles.css";
import restuarantImage from "./images/restaurant.jpeg";

const contentContainer = document.querySelector("#content");

function pageLoad(){
    
    const welcomeText = document.createElement("div");
    welcomeText.innerText = "Welcome to Manwa's";

    const firstImageContainer = document.createElement("div");
    const firstImage = document.createElement("img");
    firstImage.src = restuarantImage;
    firstImageContainer.appendChild(firstImage);

    const descriptionText = document.createElement("div");
    descriptionText.innerText = "Manwa's is a fine dining establishment where every flavour tells a story. A place where sensory indulgence is unlocked and your next culinary adventure awaits. We invite you to encounter a flavour adventure you have never experienced before."

    contentContainer.appendChild(welcomeText);
    contentContainer.appendChild(firstImageContainer);
    contentContainer.appendChild(descriptionText);
}

export {pageLoad};
