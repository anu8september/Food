import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrManager} from 'ng6-toastr-notifications';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  itemName: any;
  description: any;
  formData = new FormData();
  src: any;
  file: File;
  image:any;
  ItemData:any=[]
  constructor(
    private toast: ToastrManager,
    private api: ApiServiceService,
    private router :Router
  ) { 
    
  }

  ngOnInit() {
  }
  addItem(){
    console.log("adat")
    if (!this.file){
    return this.toast.errorToastr('Please select image first.');
    }
    let body = {
      "name": this.itemName,
      "image": this.image,
      "description":this.description,
    }
    this.ItemData.push(body)
    localStorage.setItem("ItemData",JSON.stringify(this.ItemData));
 this.router.navigate(['/'])
    this.api.addFoodItem(body).subscribe((response: any) => {
      if (response.success == true) {
        return this.toast.errorToastr(response.message);}
      this.toast.successToastr('Item added successfully!');
         });
  }  

  onImageSelect(e) {
    const file = e.target.files[0];
    this.formData.delete('image');
    if (file.type == 'image/png') {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.src = event.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
      this.file = file;
      this.formData.append('image', this.file);
     
  }
  else{
    this.toast.errorToastr('Upload only Png File')
  }
}
}
