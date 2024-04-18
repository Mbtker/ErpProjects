import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo:'login', 
    pathMatch: 'full'
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  // { 
  //   path: "ob-type",
  //   loadChildren: () => import("object-type/ObTypeModule").then(m => m.ObTypeModule)
  // },
  {
    path: '', 
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'ob-type', 
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import("object-type/ObTypeModule").then(m => m.ObTypeModule)
      }
    ]
  },
  {
    path: 'ob-data', 
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import("object-data/ObDataModule").then(m => m.ObDataModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
