import "./styles.css";

const contentContainer = document.querySelector("#content");

const refresh = (container)=>{
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
};

function createMenuItem(title,description=""){
    const cont = document.createElement("div");
    const contTitle = document.createElement("div");
    contTitle.classList.add("menu-item");
    contTitle.innerText= title;
    const contDesc = document.createElement("div");
    contDesc.classList.add("menu-item-desc");
    contDesc.innerText = description;
    cont.appendChild(contTitle);
    cont.appendChild(contDesc);

    return cont;
}

function createNibbles(){
    const nibbles = document.createElement("div");

    const canapes = document.createElement("div");
    canapes.classList.add("menu-item");
    canapes.innerText = "Selection of Canapés";

    const bread = document.createElement("div");
    bread.classList.add("menu-item");
    bread.innerText = "Warm Bread, Marinated Olives, Olive Oil and Balsamic Vinegar";
    
    const halloumi = document.createElement("div");
    halloumi.classList.add("menu-item");
    halloumi.innerText = "Cajun Fried Halloumi with Alioli";

    nibbles.appendChild(canapes);
    nibbles.appendChild(bread);
    nibbles.appendChild(halloumi);
    return nibbles;
}

function starterMenu(){
    const starters = document.createElement("div");

    const prawn = createMenuItem("Potted Prawn Cocktail","Brown bread and butter");
    const chicken = createMenuItem("Smoked Chicken Pâté","Onion chutney, sourdough bread");
    const soup = createMenuItem("Vine Tomato & Basil Soup","Crusty bread(vegan,v)")

    starters.appendChild(prawn);
    starters.appendChild(chicken);
    starters.appendChild(soup);
    return starters;
}

function mainCourseMenu(){
    const mainCourse = document.createElement("div");

    const salmon = createMenuItem("Roast Salmon Fillet","White wine tarragon cream");
    const pork = createMenuItem("Pan-fried Pork Fillet","Wholegrain mustard and thyme cream");
    const steak = createMenuItem("Soz Rump Steak","Creamy cracked pepper sauce or red wine jus");


    mainCourse.appendChild(salmon);
    mainCourse.appendChild(pork);
    mainCourse.appendChild(steak);
    return mainCourse;
}

function dessertMenu(){
    const desserts = document.createElement("div");

    const torte = createMenuItem("Rich Chocolate Torte");
    const pudding = createMenuItem("Sticky Toffee Pudding","Fudge sauce");
    const meringue = createMenuItem("Dark Brown Sugar Meringue","Soft Fruit");


    desserts.appendChild(torte);
    desserts.appendChild(pudding);
    desserts.appendChild(meringue);
    return desserts;
}

function extrasMenu(){
    const extras = document.createElement("div");

    const salmon = createMenuItem("Truffles");
    const pork = createMenuItem("Fresh Coffee");
    const steak = createMenuItem("Selection of 3 Cornish cheeses","With oat biscuits & grapes");

    extras.appendChild(salmon);
    extras.appendChild(pork);
    extras.appendChild(steak);
    return extras;
}


function menuLoad(){
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container");

    const menuText = document.createElement("div");
    menuText.classList.add("menu-text");
    menuText.innerText = "Menu";

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const nibblesButton = document.createElement("button");
    nibblesButton.innerText = "Nibbles";
    const starterButton = document.createElement("button");
    starterButton.innerText = "Starter";
    const mainCourseButton = document.createElement("button");
    mainCourseButton.innerText = "Main Course";
    const dessertButton = document.createElement("button");
    dessertButton.innerText= "Dessert";
    const extrasButton = document.createElement("button");
    extrasButton.innerText = "Extras";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    buttonContainer.appendChild(nibblesButton);
    buttonContainer.appendChild(starterButton);
    buttonContainer.appendChild(mainCourseButton);
    buttonContainer.appendChild(dessertButton);
    buttonContainer.appendChild(extrasButton);

    contentContainer.appendChild(menuText);
    contentContainer.appendChild(buttonContainer);
    contentContainer.appendChild(menuContainer);

    const nibbles = createNibbles();
    menuContainer.appendChild(nibbles);
    nibblesButton.focus();

    nibblesButton.addEventListener("click",()=>{
        refresh(menuContainer);
        menuContainer.appendChild(nibbles);
    });

    starterButton.addEventListener("click",()=>{
        refresh(menuContainer);
        
        const starters = starterMenu();
        menuContainer.appendChild(starters);
    });

    mainCourseButton.addEventListener("click",()=>{
        refresh(menuContainer);
        const mainCourse = mainCourseMenu();
        menuContainer.appendChild(mainCourse);
    });

    dessertButton.addEventListener("click",()=>{
        refresh(menuContainer);
        const dessert = dessertMenu();
        menuContainer.appendChild(dessert);
    });

    extrasButton.addEventListener("click",()=>{
        refresh(menuContainer);
        const extras = extrasMenu();
        menuContainer.appendChild(extras);
    });
    
}

export {menuLoad};