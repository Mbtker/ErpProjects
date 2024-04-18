import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ObDataComponent } from './ob-data.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ObDataComponent,
    RouterModule.forChild([ {path: "", component: ObDataComponent, pathMatch: "full"} ])
  ]
})
export class ObDataModule { }
