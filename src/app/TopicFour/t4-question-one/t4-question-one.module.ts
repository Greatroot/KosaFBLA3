import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T4QuestionOnePage } from './t4-question-one.page';

const routes: Routes = [
  {
    path: '',
    component: T4QuestionOnePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T4QuestionOnePage]
})
export class T4QuestionOnePageModule {}
