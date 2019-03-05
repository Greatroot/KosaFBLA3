import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T1QuestionThreePage } from './t1-question-three.page';

const routes: Routes = [
  {
    path: '',
    component: T1QuestionThreePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T1QuestionThreePage]
})
export class T1QuestionThreePageModule {}
