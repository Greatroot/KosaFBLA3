import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { T3QuestionThreePage } from './t3-question-three.page';

const routes: Routes = [
  {
    path: '',
    component: T3QuestionThreePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [T3QuestionThreePage]
})
export class T3QuestionThreePageModule {}
