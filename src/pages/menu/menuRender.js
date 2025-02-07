import "./menu.css"

/**
 * 
 * @param {MenuItem} menuItem 
 * @returns DOM element of a menu item.
 */
function renderMenuItem(menuItem){
    const div = document.createElement("div");
    const name = document.createElement("h3");
    const desc = document.createElement("p");
    const price = document.createElement("div");

    name.textContent = menuItem.name;
    desc.textContent = menuItem.description;
    price.textContent = menuItem.getStringPrice();

    div.classList.toggle("menu-item");

    [name, desc, price].forEach((elem) => div.appendChild(elem));

    return div;
}

/**
 * 
 * @param {Category} category 
 * @returns DOM element of a menu category.
 */
function renderCategory(category){
    // Get list of items
    const catItems = category.getItems();
    
    const categoryDiv = document.createElement("div");
    const title = document.createElement("h2");

    title.textContent = category.name;
    categoryDiv.appendChild(title);

    // Render all items inside the category
    catItems.forEach((item) => categoryDiv.appendChild(renderMenuItem(item)));
    categoryDiv.classList.toggle("category");

    return categoryDiv;
}

/**
 * 
 * @param {Menu} menu 
 * @return DOM element of the menu page.
 */
function renderMenu(contentDiv, menu){
    const menuItems = menu.getCategories();

    const menuDiv = document.createElement("div");
    const title = document.createElement("h1");
    const disclaimer = document.createElement("div");

    disclaimer.textContent = "*Menu prices and menu items are subject to change without prior notice.";
    title.textContent = "Lunch & Dinner Menu";
    [title, disclaimer].forEach((category) => menuDiv.appendChild(category));

    menuItems.forEach((category) => menuDiv.appendChild(renderCategory(category)));
    menuDiv.classList.toggle("menu-content");

    contentDiv.appendChild(menuDiv);
}

export {renderMenuItem, renderCategory, renderMenu};

