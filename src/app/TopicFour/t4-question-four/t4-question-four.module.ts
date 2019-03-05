import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T4QuestionFourPage } from './t4-question-four.page';

const routes: Routes = [
  {
    path: '',
    component: T4QuestionFourPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T4QuestionFourPage]
})
export class T4QuestionFourPageModule {}
