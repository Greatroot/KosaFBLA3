import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T5QuestionFivePage } from './t5-question-five.page';

const routes: Routes = [
  {
    path: '',
    component: T5QuestionFivePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T5QuestionFivePage]
})
export class T5QuestionFivePageModule {}
