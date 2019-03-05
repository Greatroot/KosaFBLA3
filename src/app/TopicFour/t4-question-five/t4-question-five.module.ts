import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T4QuestionFivePage } from './t4-question-five.page';

const routes: Routes = [
  {
    path: '',
    component: T4QuestionFivePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T4QuestionFivePage]
})
export class T4QuestionFivePageModule {}
