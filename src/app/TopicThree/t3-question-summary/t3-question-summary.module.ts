import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T3QuestionSummaryPage } from './t3-question-summary.page';

const routes: Routes = [
  {
    path: '',
    component: T3QuestionSummaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T3QuestionSummaryPage]
})
export class T3QuestionSummaryPageModule {}
