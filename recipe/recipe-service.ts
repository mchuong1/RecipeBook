import {  Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping-service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
    new Recipe('Pizza', 
               'An Italian Dish',
               'https://www.simplyrecipes.com/wp-content/uploads/2007/01/homemade-pizza-horiz-a-1200.jpg',
              [new Ingredient('Meat',1),
              new Ingredient('French Fries',20) 
              ]),
    new Recipe('Dumplings', 
               'Delicious Dumplings',
               'http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg',
              [new Ingredient('Buns',2),
              new Ingredient('Meat',1)])
  ];
  
  constructor(private shoppingService: ShoppingService){}
  
  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }
  
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingService.addIngredients(ingredients);
  }

  
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}