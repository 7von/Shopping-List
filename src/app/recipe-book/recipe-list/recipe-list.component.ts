import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Hamburger', 'Beef Patty with choice of toppings in between a bun', '//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.readersdigest.ca%2Fwp-content%2Fuploads%2F2015%2F11%2Fgourmet-burger.jpg&f=1&nofb=1')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
  // getName(){
  //   return this.recipes.name;
  // }
}
