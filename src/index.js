import { MenuProvider } from "./pages/menu/menuProvider";
import {renderMenu} from "./pages/menu/menuRender";

const contentDiv = document.querySelector("#content");
const menuData = new MenuProvider()
renderMenu(contentDiv, menuData.getMenu());
