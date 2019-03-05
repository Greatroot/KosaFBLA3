import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T5QuestionTwoPage } from './t5-question-two.page';

const routes: Routes = [
  {
    path: '',
    component: T5QuestionTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T5QuestionTwoPage]
})
export class T5QuestionTwoPageModule {}
