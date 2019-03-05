import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T5QuestionThreePage } from './t5-question-three.page';

const routes: Routes = [
  {
    path: '',
    component: T5QuestionThreePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T5QuestionThreePage]
})
export class T5QuestionThreePageModule {}
