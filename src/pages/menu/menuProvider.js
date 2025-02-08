
import Category from "./category.js";
import MenuItem from "./menuItem.js";
import Menu from "./menu.js"

export class MenuProvider {
    getMenu() {
    // For demonstration, returning hardcoded categories.
        return new Menu ([
            new Category("Starters", [
                new MenuItem("Bruschetta", 7.50, 
                    "Toasted baguette slices topped with marinated diced tomatoes, fresh basil, garlic, and a drizzle of extra virgin olive oil"),
                new MenuItem("Caprese Salad", 9.5, 
                    "Slices of fresh mozzarella and vine-ripened tomatoes layered with basil leaves, finished with a balsamic reduction"),
                new MenuItem("Oysters", 14.95),
                new MenuItem("Crab Cake", 20.5),
    
            ]),
            new Category("Mains", [
                new MenuItem("Seafood Combo", 39.5, 
                    "8 oz. Lobster Tail, Shrimp, Clams & Mussels on a bed of Linguini"),
                new MenuItem("Filet Mignon", 43.95),
                new MenuItem("Chicken Parmigiana", 17.5, 
                    "2Breaded chicken breast smothered in marinara sauce and melted mozzarella, served over a bed of spaghetti")
            ]),
            new Category("Desserts", [
                new MenuItem("Tiramisu", 6.5, 
                    "Layers of coffee-soaked ladyfingers and mascarpone cream dusted with cocoa powder for a rich finish"
                ),
                new MenuItem("Cannoli", 5.5, 
                   "Crisp pastry shells filled with a sweet, creamy ricotta mixture and studded with mini chocolate chips" 
                ),
                new MenuItem("Panna Cotta", 6.0, 
                    "Silky vanilla-infused cream set to perfection and served with a tangy berry compote"
                )
            ]),
        ]);
    }
}
