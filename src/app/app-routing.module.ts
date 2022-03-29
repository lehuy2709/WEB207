import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentComponent } from './student/student.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostDetailComponent } from './post-detail/post-detail.component';



const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'student/form',
    component: StudentFormComponent
  },
  {
    path: 'student/form/:id',
    component: StudentFormComponent
  },
  {
    path: 'student/:id',
    component: StudentDetailComponent
  },
  {
    path: 'posts',
    component: PostComponent,
  },
  {
    path: 'posts/form',
    component: PostFormComponent
  },
  {
    path: 'posts/form/:id',
    component: PostFormComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
