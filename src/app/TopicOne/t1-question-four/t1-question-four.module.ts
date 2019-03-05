import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T1QuestionFourPage } from './t1-question-four.page';

const routes: Routes = [
  {
    path: '',
    component: T1QuestionFourPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T1QuestionFourPage]
})
export class T1QuestionFourPageModule {}
