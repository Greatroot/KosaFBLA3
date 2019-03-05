import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T5QuestionOnePage } from './t5-question-one.page';

const routes: Routes = [
  {
    path: '',
    component: T5QuestionOnePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T5QuestionOnePage]
})
export class T5QuestionOnePageModule {}
