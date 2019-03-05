import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T2QuestionSummaryPage } from './t2-question-summary.page';

const routes: Routes = [
  {
    path: '',
    component: T2QuestionSummaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T2QuestionSummaryPage]
})
export class T2QuestionSummaryPageModule {}
