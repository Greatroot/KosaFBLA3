import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T3QuestionFourPage } from './t3-question-four.page';

const routes: Routes = [
  {
    path: '',
    component: T3QuestionFourPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T3QuestionFourPage]
})
export class T3QuestionFourPageModule {}
