import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Hamburger', 
      'Beef Patty with choice of toppings in between a bun',
      '//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.readersdigest.ca%2Fwp-content%2Fuploads%2F2015%2F11%2Fgourmet-burger.jpg&f=1&nofb=1',
      [
        new Ingredients('Beef Patty',1),
        new Ingredients('Cheese', 1)
      ])
  ];
  
  constructor(private slService: ShoppingListService) { }
  
  getRecipe() {
    //return a copy of the array 
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]){
    this.slService.addIngredients(ingredients);
  }
}
