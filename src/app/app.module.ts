import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizService } from './shared/quiz.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ResultComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
