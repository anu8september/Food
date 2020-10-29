import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { ApiServiceService } from '../../src/app/service/api-service.service';

import {ToastrModule} from 'ng6-toastr-notifications';
@NgModule({
  declarations: [
    AppComponent,
    AddFoodComponent,
    FoodItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

   ],
  providers: [
    
    
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
