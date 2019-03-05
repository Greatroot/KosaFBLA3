import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T3QuestionTwoPage } from './t3-question-two.page';

const routes: Routes = [
  {
    path: '',
    component: T3QuestionTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T3QuestionTwoPage]
})
export class T3QuestionTwoPageModule {}
