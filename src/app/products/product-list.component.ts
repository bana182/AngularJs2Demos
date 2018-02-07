import {Component} from '@angular/core';
@Component({
  selector:'pm-products',
  templateUrl:'./product-list.component.html',
})

export class ProductListComponent{
  pageTitle: string ="Product List";
  imageWidth:number= 50;
  imageMargin: number=2;
  showImage:boolean=false;
  listFilter:string = 'cart';
  products:any[]=[
    {
      "productId":2,
      "productName":"Garden Cart",
      "productCode":"GDN0023",
      "releaseDate":"March 18,2016",
      "description":"15 gallon capacity",
      "price":32.99,
      "starRating":4.2,
      "imageUrl":"https://images-na.ssl-images-amazon.com/images/I/41EIG7cmcYL._SL500_AC_SS350_.jpg"
    },
    {
      "productId":5,
      "productName":"Hammer",
      "productCode":"TBX-0048",
      "releaseDate":"May 21,2016",
      "description":"valerian steel",
      "price":8.9,
      "starRating":4.8,
      "imageUrl":"https://target.scene7.com/is/image/Target/52123783_Alt02?wid=520&hei=520&fmt=pjpeg"
    }
  ];
  toggleImage():void{
    this.showImage=!this.showImage;
  }
}
