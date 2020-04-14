import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path : 'courseDetails', component: CourseDetailComponent},
  {path : 'courseDetails/:id', component: CourseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponenet=[CourseDetailComponent]; 