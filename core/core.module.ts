import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth/auth.service';
import { ShoppingService } from '../shopping/shopping-service';
import { RecipeService } from '../recipe/recipe-service';
import { HomeComponent } from './home/home.component';
import { DataStorageService } from '../shared/data-storage.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    AuthService,
    ShoppingService,
    RecipeService,
    DataStorageService,
  ]
})
export class CoreModule {}
