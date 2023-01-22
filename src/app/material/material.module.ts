import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    MatTabsModule,
  ]
})
export class MaterialModule { }
