import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredients[]>();

  private ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Box Of Oatmeal', 5),
    new Ingredients('Bananas', 2)
  ];
  
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient: Ingredients){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredients[]){
    // for(let ingredient of ingredients) {
    //   this.addNewIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
