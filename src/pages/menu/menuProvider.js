
import Category from "./category.js";
import MenuItem from "./menuItem.js";
import Menu from "./menu.js"

export class MenuProvider {
    getMenu() {
    // For demonstration, returning hardcoded categories.
        return new Menu ([
            new Category("Starters", [new MenuItem("Calamari", 10.1, "Cheap squid.")]),
            new Category("Mains", []),
            new Category("Desserts", []),
        ]);
    }
}
