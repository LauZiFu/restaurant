import MenuItem from "./menuItem.js";

class Category {
    #items
    
    constructor(name, items = []) {
        this.name = name.toUpperCase();
        this.#items = items;
    }

    addItem(item) {
        if (!(item instanceof MenuItem)) {
            throw new Error("Invalid menu item type");
        }
        this.#items.push(item);
    }

    getItems() {
        return [...this.#items];
    }

    getName() {
        return this.name;
    }
}

export default Category;


