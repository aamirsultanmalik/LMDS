import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/shop/home/home.component';
import { DemoComponent } from './components/demo/demo.component';
import { MyAccountComponent } from './components/pages/my-account/my-account.component';
import { TermConditionsComponent } from './components/pages/term-conditions/term-conditions.component';
import { ClientLoginComponent } from './components/pages/client-login/client-login.component';


const appRoutes: Routes = [

  {
    path: '',
    component: MainComponent,
    children:[
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'register',
        component: MyAccountComponent,
      },
      { path: 'terms', component: TermConditionsComponent },
      { path: 'client-login', component: ClientLoginComponent },
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
