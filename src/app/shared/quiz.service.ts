import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {
qns: any[];
seconds: number;
timer;
qnProgress: number;
correctAnswerCount: number = 0;

constructor(private http: HttpClient) { }
displayTimeElapsed() {
  return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
}

getParticipantName() {
  var participant = JSON.parse(localStorage.getItem('participant'));
  return participant.Name;
}


//---------------- Http Methods---------------

getQuestions() {
  return this.http.get('data/questions');
}

getAnswers() {
  var body = this.qns.map(x => x.QnID);
  return this.http.post('data/answers', body);
}

}
