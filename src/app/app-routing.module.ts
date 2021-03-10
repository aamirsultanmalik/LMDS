import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/shop/home/home.component';
import { DemoComponent } from './components/demo/demo.component';
import { MyAccountComponent } from './components/pages/my-account/my-account.component';


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
