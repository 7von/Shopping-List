import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static: false}) nameInput: ElementRef;
  @ViewChild('amountInput',{static: false}) amountInput: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    this.slService.addNewIngredient(
      new Ingredients(
        this.nameInput.nativeElement.value, 
        this.amountInput.nativeElement.value)
      )
  }

}
