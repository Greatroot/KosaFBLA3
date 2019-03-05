import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T2QuestionFourPage } from './t2-question-four.page';

const routes: Routes = [
  {
    path: '',
    component: T2QuestionFourPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T2QuestionFourPage]
})
export class T2QuestionFourPageModule {}
