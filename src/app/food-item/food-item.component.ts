import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  FoodItemData: any;
  public addRouterItem = "additem";
  serialNumber:number=0
  constructor() { }
 
  ngOnInit() {
    if(JSON.stringify(localStorage.getItem('itemData')))
    this.FoodItemData = JSON.parse(localStorage.getItem('ItemData'));
    console.log(this.FoodItemData)
}

delete(data){
  let index = this.FoodItemData.indexOf(data);
  this.FoodItemData.splice(index, 1)
    localStorage.setItem("ItemData", JSON.stringify(this.FoodItemData));}

}
