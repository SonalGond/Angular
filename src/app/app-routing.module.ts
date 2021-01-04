import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
{path:'quiz',component:QuizComponent},
{path:'result',component:ResultComponent},
{path:'app-pagenotfound',component:PagenotfoundComponent},
{path:'**', redirectTo:'/app-pagenotfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
