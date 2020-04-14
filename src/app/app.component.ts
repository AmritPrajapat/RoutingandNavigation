import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Course List';

  course = [
    { id: 101, name: 'Spring' },
    { id: 102, name: 'Hibernate' },
    { id: 103, name: 'Junit' },
    { id: 104, name: 'Html' },
    { id: 105, name: 'CSS' },
  ];

  constructor(private router: Router) {}

  // goToPage() {
  //   this.router.navigate(['/home']);
  // }



  getCourseDetails(course)
  {
    this.router.navigate(['/courseDetails', course.id]);
    //console.log(course.id);
    
  }

}
