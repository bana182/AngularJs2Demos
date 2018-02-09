import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import {ProductListComponent} from './products/product-list.component';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipes';
import {StarComponent} from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
