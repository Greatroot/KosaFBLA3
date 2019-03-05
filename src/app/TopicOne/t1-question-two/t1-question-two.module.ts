import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T1QuestionTwoPage } from './t1-question-two.page';

const routes: Routes = [
  {
    path: '',
    component: T1QuestionTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T1QuestionTwoPage]
})
export class T1QuestionTwoPageModule {}
