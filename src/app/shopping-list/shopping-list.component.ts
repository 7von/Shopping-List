import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Box Of Oatmeal', 5),
    new Ingredients('Bananas', 2)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewIngredient(ingredient: Ingredients){
    this.ingredients.push(ingredient);
  }

}
