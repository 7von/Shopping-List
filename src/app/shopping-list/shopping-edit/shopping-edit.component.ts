import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredient = new EventEmitter<Ingredients>();
  @ViewChild('nameInput',{static: false}) nameInput: ElementRef;
  @ViewChild('amountInput',{static: false}) amountInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    // this.newIngredient.emit({
    //   name: this.nameInput.nativeElement.value,
    //   amount: this.amountInput.nativeElement.value
    // })
    this.newIngredient.emit(
      new Ingredients(
        this.nameInput.nativeElement.value, 
        this.amountInput.nativeElement.value)
      )
  }

}
