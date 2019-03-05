import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 't1-question-one', loadChildren: './TopicOne/t1-question-one/t1-question-one.module#T1QuestionOnePageModule' },
  { path: 't1-question-two', loadChildren: './TopicOne/t1-question-two/t1-question-two.module#T1QuestionTwoPageModule' },
  { path: 't1-question-three', loadChildren: './TopicOne/t1-question-three/t1-question-three.module#T1QuestionThreePageModule' },
  { path: 't1-question-four', loadChildren: './TopicOne/t1-question-four/t1-question-four.module#T1QuestionFourPageModule' },
  { path: 't1-question-five', loadChildren: './TopicOne/t1-question-five/t1-question-five.module#T1QuestionFivePageModule' },
  { path: 't2-question-one', loadChildren: './TopicTwo/t2-question-one/t2-question-one.module#T2QuestionOnePageModule' },
  { path: 't2-question-two', loadChildren: './TopicTwo/t2-question-two/t2-question-two.module#T2QuestionTwoPageModule' },
  { path: 't2-question-three', loadChildren: './TopicTwo/t2-question-three/t2-question-three.module#T2QuestionThreePageModule' },
  { path: 't2-question-four', loadChildren: './TopicTwo/t2-question-four/t2-question-four.module#T2QuestionFourPageModule' },
  { path: 't3-question-one', loadChildren: './TopicThree/t3-question-one/t3-question-one.module#T3QuestionOnePageModule' },
  { path: 't3-question-two', loadChildren: './TopicThree/t3-question-two/t3-question-two.module#T3QuestionTwoPageModule' },
  { path: 't3-question-three', loadChildren: './TopicThree/t3-question-three/t3-question-three.module#T3QuestionThreePageModule' },
  { path: 't3-question-four', loadChildren: './TopicThree/t3-question-four/t3-question-four.module#T3QuestionFourPageModule' },
  { path: 't3-question-five', loadChildren: './TopicThree/t3-question-five/t3-question-five.module#T3QuestionFivePageModule' },
  { path: 't4-question-one', loadChildren: './TopicFour/t4-question-one/t4-question-one.module#T4QuestionOnePageModule' },
  { path: 't4-question-two', loadChildren: './TopicFour/t4-question-two/t4-question-two.module#T4QuestionTwoPageModule' },
  { path: 't4-question-three', loadChildren: './TopicFour/t4-question-three/t4-question-three.module#T4QuestionThreePageModule' },
  { path: 't4-question-four', loadChildren: './TopicFour/t4-question-four/t4-question-four.module#T4QuestionFourPageModule' },
  { path: 't4-question-five', loadChildren: './TopicFour/t4-question-five/t4-question-five.module#T4QuestionFivePageModule' },
  { path: 't5-question-one', loadChildren: './TopicFive/t5-question-one/t5-question-one.module#T5QuestionOnePageModule' },
  { path: 't5-question-two', loadChildren: './TopicFive/t5-question-two/t5-question-two.module#T5QuestionTwoPageModule' },
  { path: 't5-question-three', loadChildren: './TopicFive/t5-question-three/t5-question-three.module#T5QuestionThreePageModule' },
  { path: 't5-question-four', loadChildren: './TopicFive/t5-question-four/t5-question-four.module#T5QuestionFourPageModule' },
  { path: 't5-question-five', loadChildren: './TopicFive/t5-question-five/t5-question-five.module#T5QuestionFivePageModule' },
  { path: 't1-question-summary', loadChildren: './TopicOne/t1-question-summary/t1-question-summary.module#T1QuestionSummaryPageModule' },
  { path: 't2-question-summary', loadChildren: './TopicTwo/t2-question-summary/t2-question-summary.module#T2QuestionSummaryPageModule' },
  { path: 't3-question-summary', loadChildren: './TopicThree/t3-question-summary/t3-question-summary.module#T3QuestionSummaryPageModule' },
  { path: 't4-question-summary', loadChildren: './TopicFour/t4-question-summary/t4-question-summary.module#T4QuestionSummaryPageModule' },
  { path: 't5-question-summary', loadChildren: './TopicFive/t5-question-summary/t5-question-summary.module#T5QuestionSummaryPageModule' },
  { path: 'terms-of-service', loadChildren: './terms-of-service/terms-of-service.module#TermsOfServicePageModule' },
  { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
