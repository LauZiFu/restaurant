import Category from "./category.js";

export default class Menu {
    #categories

    constructor(categories = []) {
        this.#categories = categories;
    }
  
    addCategory(category) {
        if (!(category instanceof Category)) {
            throw new Error("Invalid category type");
        }
        this.#categories.push(category);
    }
  
    searchItems(keyword) {
        return this.categories.flatMap(category => 
            category.getItems().filter(item =>
                item.getDetails().name.toLowerCase().includes(keyword.toLowerCase())
            )
        );
    }

    getCategories(){
        return [...this.#categories];
    }
}
