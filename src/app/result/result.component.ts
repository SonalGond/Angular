import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(public quizService: QuizService, private router: Router) { }

  ngOnInit() {}
    
    /*  this.quizService.getAnswers().subscribe(
        (data: any) => {
          this.quizService.correctAnswerCount = 0;
          this.quizService.qns.forEach((e, i) => {
            if (e.answer == data[i])
              this.quizService.correctAnswerCount++;
            e.correct = data[i];
          });
        }
      );*/
    //}
  //  else
      //this.router.navigate(['/quiz']);
//  }


  OnSubmit() {
    /*
    this.quizService.submitScore().subscribe(() => {
      this.restart();
    });*/
  }

  restart() {
    localStorage.setItem('qnProgress', "0");
    localStorage.setItem('qns', "");
    localStorage.setItem('seconds', "0");
    this.router.navigate(['/quiz']);
  }
}
