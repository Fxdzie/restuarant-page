import { pageLoad } from "./initial-load";
import { menuLoad } from "./menu";
import { contactLoad } from "./contact";

const contentContainer = document.querySelector("#content");
const refresh = ()=>{
    while(contentContainer.firstChild){
        contentContainer.removeChild(contentContainer.firstChild);
    }
};

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");
pageLoad();
homeButton.addEventListener("click",()=>{
    refresh();
    pageLoad();
});
menuButton.addEventListener("click",()=>{
    refresh();
    menuLoad();
});
contactButton.addEventListener("click",()=>{
    refresh();
    contactLoad();
});