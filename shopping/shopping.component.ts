import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping-service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'shop-component',
    templateUrl: './shopping.component.html'
})
export class ShoppingComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingService: ShoppingService){}
  
  ngOnInit(){
    this.ingredients = this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.ingredientsChanged.subscribe(
    (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    }
    )
  }
  
  ngOnDestroy(){

  }

  onEditItem(index: number){
    this.shoppingService.startedEditing.next(index);
  }
}