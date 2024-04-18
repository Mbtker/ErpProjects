import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObTypeComponent } from './ob-type/ob-type.component';

const routes: Routes = [
  { path: "", redirectTo: "ObType", pathMatch: "full" },
  { path: "ObType", component: ObTypeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
