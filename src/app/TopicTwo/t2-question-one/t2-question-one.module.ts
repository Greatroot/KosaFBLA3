import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T2QuestionOnePage } from './t2-question-one.page';

const routes: Routes = [
  {
    path: '',
    component: T2QuestionOnePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T2QuestionOnePage]
})
export class T2QuestionOnePageModule {}
