import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Hamburger', 'Ham, Cheese, Hamburger Bun', 'https://socrates.gm.com/etc/designs/gbs/components/topbar/img/socrates/GM_RestrictedUse_Wordmark_Blue_RGB.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }
  // getName(){
  //   return this.recipes.name;
  // }
}
