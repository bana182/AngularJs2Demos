import { Component } from '@angular/core';


@Component({
  selector: 'courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent {
    title="the title of courses";
    courses=["course 1","course 2","course 3"];
}
