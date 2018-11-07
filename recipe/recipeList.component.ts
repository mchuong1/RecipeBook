import { Component, OnInit } from '@angular/core';
import { RecipeService} from './recipe-service';

@Component({
    selector: 'recipeList-component',
    templateUrl: './recipeList.component.html',
    providers:[RecipeService]
})
export class recipeListComponent {
  
  constructor(){ }
  
  ngOnInit(){
  
  }
}