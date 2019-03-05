import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T1QuestionFivePage } from './t1-question-five.page';

const routes: Routes = [
  {
    path: '',
    component: T1QuestionFivePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T1QuestionFivePage]
})
export class T1QuestionFivePageModule {}
