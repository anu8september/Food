import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodItemComponent } from './food-item/food-item.component';
import { AddFoodComponent } from './add-food/add-food.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FoodItemComponent,
  },
  {
    path: 'additem',
    component: AddFoodComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
