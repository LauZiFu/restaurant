import { MenuProvider } from "./pages/menu/menuProvider";
import { renderMenu } from "./pages/menu/menuRender";
import renderHome from "./pages/home/homeRender";
import { menuViewBtn } from "./pages/home/homeRender";

import "./style.css";

const contentDiv = document.querySelector("#content");
const menuBtn = document.querySelector("#menu-btn");
const homeBtn = document.querySelector("#home-btn");
const contactBtn = document.querySelector("#contact-btn");
const logoImg = document.querySelector("#logo");

let menuData;

menuBtn.addEventListener("click", ()=> {
    menuData = new MenuProvider();
    renderMenu(contentDiv, menuData.getMenu());
});

homeBtn.addEventListener("click", () => renderHome(contentDiv));
logoImg.addEventListener("click", () => renderHome(contentDiv));

renderHome(contentDiv);

menuViewBtn.addEventListener("click", ()=> {
    menuData = new MenuProvider();
    renderMenu(contentDiv, menuData.getMenu());
});

