import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T4QuestionTwoPage } from './t4-question-two.page';

const routes: Routes = [
  {
    path: '',
    component: T4QuestionTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T4QuestionTwoPage]
})
export class T4QuestionTwoPageModule {}
