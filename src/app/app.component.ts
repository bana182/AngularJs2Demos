import { Component } from '@angular/core';
import {CourseComponent} from './course/course.component';
import {ProductService} from './products/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService]
})
export class AppComponent {
  title = 'app';

}
