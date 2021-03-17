# PantryPal

![PantryPal landing image](https://github.com/brjohn/PantryPal/blob/master/frontend/public/images/pantrypal.png "Pantry Pal")

PantryPal is a single-page web and mobile application that offers users one place to find and save recipes based on their dietary preferences and the contents of their refrigerator or pantry. With a database of tens of thousands of recipes, PantryPal reaches to the back of your cupboard to curate a list of recipes, making clever use of the ingredients you have available in your virtual pantry. 

### [Visit the Live Site](https://pantrypal-mern.herokuapp.com/#/)

##

### Developers:
* [Alex Lang](https://github.com/droid4alex)  
* [Brynn Johnson](https://github.com/brjohn)
* [Cole Wendling](https://github.com/colewendling)
* [Tului Gantulga](https://github.com/Tului2020)
##

### Features:
#### `Pantry`

![Pantry Gif](https://github.com/brjohn/PantryPal/blob/master/frontend/public/images/Screen%20Recording%202021-03-16%20at%209.11.58%20AM.gif)

The defining feature of PantryPal is it's easy-to-use pantry: simply search for an ingredient in the search box, add it to your pantry, and remove on click. These pantry items are saved and used to generate a list of recipes specific to the available ingredients. 

#### `Recipes`

![Recipe Gif](https://github.com/brjohn/PantryPal/blob/master/frontend/public/images/Screen%20Recording%202021-03-16%20at%2010.42.00%20AM.gif)

Once users have added ingredients to their pantry, they may navigate to the recipes section to view a list of recipes matching their available ingredients, sorted by the best match (fewest missing ingredients). Users may update their list as they add and remove pantry items, select dietary choices by which to filter their generated recipe list in the Filters box, view these recipes on click, and save or remove a recipe from their Recipe Book.   
##

### Technologies:
PantryPal was built using the MERN stack (`MongoDB`, `Express`, `React`, `Node`) in combination with `Javascript`, `Redux`, `HTML`, and `CSS`. The frontend and backend are nimbly constructed to store data in MongoDB while minimizing axios calls to our extensive [recipe and ingredient API](https://spoonacular.com/food-api) and our database, maximizing time efficiency and user experience. 

The conditions of this project provided opportunities to master new technologies and problem solve for optimal user interface. Our primary concerns were (1) providing a useful service, (2) delivering it speedily with intuitive UI, and (3) presenting it with a sleek, eye-catching style. We accomplished these goals by implementing the following technical strategies:
1. (ex: integrating spoonacular)
2. (ex: state shape, sharing state)
3. (ex: styling choices)
