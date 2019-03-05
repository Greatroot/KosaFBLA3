import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T1QuestionSummaryPage } from './t1-question-summary.page';

const routes: Routes = [
  {
    path: '',
    component: T1QuestionSummaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T1QuestionSummaryPage]
})
export class T1QuestionSummaryPageModule {}
