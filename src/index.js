import { MenuProvider } from "./pages/menu/menuProvider";
import {renderMenu} from "./pages/menu/menuRender";
import "./style.css";

const contentDiv = document.querySelector("#content");
const menuData = new MenuProvider()
renderMenu(contentDiv, menuData.getMenu());
