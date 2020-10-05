import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  
  constructor(private recipseService: RecipeService) { }

  ngOnInit(): void {
  }

  onAddtoShoppingList(){
    this.recipseService.addingIngredientToShoppingList(this.recipe.ingredients);
  }

}
