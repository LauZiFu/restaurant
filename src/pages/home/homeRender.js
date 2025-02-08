/**
 * Renderer Module for the Home Page
 */

import "./home.css";
import img from "/src/assets/images/restaurant.jpg";

const menuViewBtn = document.createElement("button");
menuViewBtn.id = "hero-menu-btn";

function renderHero(){
    const heroDiv = document.createElement("div");
    const heroTitle = document.createElement("h1");
    const heroSubtitle = document.createElement("p");
    
    const heroContainer = document.createElement("div");
    heroContainer.classList.toggle("container");


    heroDiv.classList.toggle("hero");
    heroTitle.textContent = "Authentic Italian Cuisine, Made with Love";
    heroSubtitle.textContent = "Savor the taste of Italy with fresh ingredients, rich traditions, and homemade recipes.";
    menuViewBtn.textContent = "View Our Menu";

    addChildren(heroContainer, [heroTitle, heroSubtitle, menuViewBtn]);
    heroDiv.appendChild(heroContainer);

    return heroDiv;
}

function renderWelcome(){
    const welcomeDiv = document.createElement("div");
    const welcomeTitle = document.createElement("h2");
    const welcomeDesc = document.createElement("p");
    const welcomeOpenTime = document.createElement("p");
    const visitBtn = document.createElement("button");
    const welcomeImg = document.createElement("img");

    const welcomeContainer = document.createElement("div");
    welcomeContainer.classList.toggle("welcome");
    welcomeDiv.classList.toggle("welcome-container");

    welcomeTitle.innerHTML = "Welcome to <em>Placeholder</em>, where tradition meets excellence!";
    welcomeDesc.textContent = "For years, we've been serving authentic Italian cuisine," 
        + "crafted with the finest ingredients and time-honored recipes." 
        + "Our passionate chefs bring the flavors of Italy to your table,"
        + "earning us rave reviews and a reputation for excellence. Whether you're here for a romantic dinner," 
        + "a family gathering, or just to indulge in great food, we promise an unforgettable experience.";
    welcomeOpenTime.textContent = "We are open seven days a week—join us anytime for a taste of Italy!";
    visitBtn.textContent = "Come Visit Us";
    welcomeImg.src = img;

    addChildren(welcomeContainer,[welcomeTitle,welcomeDesc,welcomeOpenTime,visitBtn,welcomeImg]);
    welcomeDiv.appendChild(welcomeContainer);

    return welcomeDiv;
}

function renderEnquiry(){

}

export default function renderHome(contentDiv){
    contentDiv.innerHTML = "";
    const homeDiv = document.createElement("div");
    homeDiv.classList.toggle("home-content");

    addChildren(homeDiv, [renderHero(), renderWelcome()])
    contentDiv.appendChild(homeDiv);
}


/**
 * 
 * @param {Node} parent 
 * @param {Array<Node>} childList 
 * @description Appends a list of child DOM elements to parent
 */
function addChildren(parent, childList) {
    childList.forEach((elem) => parent.appendChild(elem));
}

export {renderHero, renderWelcome, menuViewBtn};