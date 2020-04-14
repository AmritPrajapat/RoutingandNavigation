import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-detail',
  template: `
    <p>
    You have selected courseId='{{CourseId}}
    </p>
    <h1>{{CourseId}}</h1>
  `,
  styles: [
  ]
})
export class CourseDetailComponent implements OnInit {
   CourseId : string="jlhkjfkjdsfkjbdf";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('init called....')
    this.route.params.subscribe(x => {
      this.CourseId = x.id;
      console.log('---------',x);
    });
    
  //   const id = this.route.snapshot.paramMap.get('id');
  //  this.CourseId=id;
  //   console.log(this.CourseId);;
      
  }

}
