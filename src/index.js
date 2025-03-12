import { pageLoad } from "./initial-load";
import { menuLoad } from "./menu";

const contentContainer = document.querySelector("#content");
const refresh = ()=>{
    while(contentContainer.firstChild){
        contentContainer.removeChild(contentContainer.firstChild);
    }
};

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
pageLoad();
homeButton.addEventListener("click",()=>{
    refresh();
    pageLoad();
});
menuButton.addEventListener("click",()=>{
    refresh();
    menuLoad();
});
