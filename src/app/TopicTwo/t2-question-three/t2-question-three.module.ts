import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T2QuestionThreePage } from './t2-question-three.page';

const routes: Routes = [
  {
    path: '',
    component: T2QuestionThreePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T2QuestionThreePage]
})
export class T2QuestionThreePageModule {}
