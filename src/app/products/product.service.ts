import {Injectable} from '@angular/core';
import {IProduct} from './products';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
@Injectable()
export class ProductService{
  private _productUrl='./api/product/products.json';
  constructor(private _http:HttpClient){}
  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return observable.throw(err.message);
  }
  getProducts():Observable<IProduct[]>{
      return this._http.get<IProduct[]>(this._productUrl).do(
        data=>console.log('ALL:'+JSON.stringify(data))).catch(this.handleError);
    /*return[
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

    ]*/
  }
}
