import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingComponent } from "./shopping.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";



@NgModule({
    declarations:[
        ShoppingEditComponent,
        ShoppingComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ],
})

export class ShoppingModule {}