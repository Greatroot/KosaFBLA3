import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T3QuestionFivePage } from './t3-question-five.page';

const routes: Routes = [
  {
    path: '',
    component: T3QuestionFivePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T3QuestionFivePage]
})
export class T3QuestionFivePageModule {}
