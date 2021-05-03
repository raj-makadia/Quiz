import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import {Quiz} from '../quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizzes: any[] = [];
  currentQuiz= 0;
  answerSelected = false;
  correctAnswer = 0;
  incorrectAnswer = 0;

  //randomize:any;

  result = false;


  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();

    //this.randomize = Math.floor(Math.random() * this.quizzes.length)
  }

  onAnswer(option:boolean){
    this.answerSelected = true;
 
    setTimeout(()=>{
      this.currentQuiz++;
      this.answerSelected = false;
    },3000);

    if(option){
      this.correctAnswer++;
    }else{
      this.incorrectAnswer++;
    }
    
  }
  showResult(){
    this.result = true;
  }
}
