import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T5QuestionSummaryPage } from './t5-question-summary.page';

const routes: Routes = [
  {
    path: '',
    component: T5QuestionSummaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T5QuestionSummaryPage]
})
export class T5QuestionSummaryPageModule {}
