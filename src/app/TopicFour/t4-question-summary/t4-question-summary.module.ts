import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T4QuestionSummaryPage } from './t4-question-summary.page';

const routes: Routes = [
  {
    path: '',
    component: T4QuestionSummaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T4QuestionSummaryPage]
})
export class T4QuestionSummaryPageModule {}
