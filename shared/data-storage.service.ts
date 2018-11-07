import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipe/recipe-service';
import { Recipe } from '../recipe/recipe.model';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private httpClient: HttpClient,
              private authService: AuthService,
              private recipeService: RecipeService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();
    //return this.http.put('https://recipebook-8013f.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  //  return this.httpClient.put('https://recipebook-8013f.firebaseio.com/recipes.json' , this.recipeService.getRecipes(), {
  //    observe: 'body',
  //    params: new HttpParams().set('auth', token)
      //headers: new HttpHeaders().set('', '')
  //  });
    const req = new HttpRequest('PUT', 'https://recipebook-8013f.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {reportProgress: true, params: new HttpParams().set('auth', token)})
    return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();

  //  this.http.get('https://recipebook-8013f.firebaseio.com/recipes.json?auth=' + token)
  //    .pipe(map(
  //      (response: Response) =>

  //  this.httpClient.get<Recipe[]>('https://recipebook-8013f.firebaseio.com/recipes.json?auth=' + token)

      this.httpClient.get<Recipe[]>('https://recipebook-8013f.firebaseio.com/recipes.json?auth=' + token, {
        observe: 'body',
        responseType: 'json'
      })
      .map(
        (recipes) => {
          console.log(recipes);
         for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
