import {Injectable} from '@angular/core';
import {IProduct} from './products';

@Injectable()
export class ProductService{
  getProducts():IProduct[]{
    return[
      {
        "productId":2,
        "productName":"Garden Cart",
        "productCode":"GDN-0023",
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
      },
      {
        "productId":6,
        "productName":"Gold",
        "productCode":"TBX-0048",
        "releaseDate":"May 21,2016",
        "description":"valerian gold",
        "price":8.9,
        "starRating":3.2,
        "imageUrl":"https://target.scene7.com/is/image/Target/52123783_Alt02?wid=520&hei=520&fmt=pjpeg"
      }

    ]
  }
}
