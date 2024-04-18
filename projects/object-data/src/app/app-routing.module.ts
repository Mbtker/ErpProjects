import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObDataComponent } from './ob-data/ob-data.component';

const routes: Routes = [
  { path: "", redirectTo: "ObData", pathMatch: "full" },
  { path: "ObData", component: ObDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
