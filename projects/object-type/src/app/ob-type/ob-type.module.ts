import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObTypeComponent } from './ob-type.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ObTypeComponent,
    RouterModule.forChild([ {path: "", component: ObTypeComponent, pathMatch: "full"} ])
  ]
})
export class ObTypeModule { }

