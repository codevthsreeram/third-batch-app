import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoursesService } from './courses.service';
import { LanguagesComponent } from './languages.component';
import { LanguagesService } from './languages.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './employee.service';
import { SummaryPipe } from './summary.pipe';
import { TileCasePipe } from './tilecase.pipe';
import { HighLighterDirective } from './highlighter.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './sign-up.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { PostService } from './posts/post.service';
import { PostComponent } from './posts/post/post.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { TodoService } from './todo/todo.service';
import { TodoComponent } from './todo/todo.component';
import { CommonService } from './common/common.service';
import { InvoiceModule } from './invoice/invoice.module';
import { EmployeeFullDetailComponent } from './employee-full-detail.component';
import { AuthService } from './user/auth.service';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';
import { AuthGuard } from './user/auth-guard.service';
import { AuthAdminGuard } from './user/auth-admin-guard.service';
import { DepartmentModule } from './department/department.module';
import { CourseModule } from './course/course/course.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChildOutputComponent } from './child-output/child-output.component';
import { AppHttpInterceptor } from './posts/app-http.interceptor';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'employee',
    canActivate: [AuthGuard, AuthAdminGuard],
    children: [
      {
        path: '',
        component: EmployeeComponent
      },
      {
        path: ':id',
        children: [
          { path: '', redirectTo: 'basic-detail', pathMatch: 'full' },
          { path: 'basic-detail', component: EmployeeDetailComponent },
          { path: 'full-detail', component: EmployeeFullDetailComponent }
        ]
      }
    ]
  },
  {
    path: 'languages',
    component: LanguagesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contact-form',
    component: ContactFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: SignUpComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard, AuthAdminGuard]
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'posts',
    component: PostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'todo',
    component: TodoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'un-authorized',
    component: UnAuthorizedComponent
  },
  {
    path: 'invoice',
    loadChildren: () => InvoiceModule,
    canActivate: [AuthGuard]
  },
  {
    path: 'department',
    loadChildren: () => DepartmentModule,
    canActivate: [AuthGuard]
  },
  {
    path: 'course',
    loadChildren: () => CourseModule,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ContactUsComponent,
    LanguagesComponent,
    EmployeeComponent,
    SummaryPipe,
    TileCasePipe,
    HighLighterDirective,
    ContactFormComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    NotFoundComponent,
    EmployeeDetailComponent,
    UserComponent,
    PostComponent,
    PostDetailComponent,
    TodoComponent,
    EmployeeFullDetailComponent,
    UnAuthorizedComponent,
    ParentComponent,
    ChildComponent,
    ChildOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right', timeOut: 3000 }),
    NgxPaginationModule
  ],
  providers: [
    CoursesService,
    LanguagesService,
    EmployeeService,
    UserService,
    PostService,
    TodoService,
    CommonService,
    AuthService,
    AuthGuard,
    AuthAdminGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
