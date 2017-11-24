import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { HelloComponent } from './home/hello/hello.component';
import { CreationsComponent } from './home/creations/creations.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { NewsComponent } from './home/news/news.component';
import { MeatComponent } from './home/meat/meat.component';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HelloComponent,
    CreationsComponent,
    ProjectsComponent,
    NewsComponent,
    MeatComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'form-login',
        component: LoginFormComponent
      },
      {
        path:'',
        pathMatch:'full',
        component:HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
