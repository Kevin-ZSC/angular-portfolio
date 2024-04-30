import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component:HomeComponent},
  { path: 'aboutme', component:AboutMeComponent},
  { path: 'project', component:ProjectComponent},
  { path: 'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
