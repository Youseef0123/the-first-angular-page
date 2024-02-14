import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [

{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent,title:'Home'},
{path:'about',component:AboutComponent,title:'ABOUT'},
{path:'portfolio',component:PortfolioComponent ,title:'PORTFOLIO'},
{path:'contact',component:ContactComponent ,title:'CONTACT'},
{path:'**',component:NotfoundComponent,title:'NOTFOUND'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
