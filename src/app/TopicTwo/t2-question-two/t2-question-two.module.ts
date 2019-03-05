import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T2QuestionTwoPage } from './t2-question-two.page';

const routes: Routes = [
  {
    path: '',
    component: T2QuestionTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T2QuestionTwoPage]
})
export class T2QuestionTwoPageModule {}
