import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient){
    /* console.log("ASDASDAD")
    if([] !== this.ingredients.filter(item => item.name === ingredient.name))  {
    } */
    this.ingredients.push(ingredient);
  }
}
