import { Injectable } from '@angular/core';
import {Quiz} from './quiz.model';
import { compileDeclareDirectiveFromMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes:any[] = [
    {
      question:'What Is Capital Of India',
      answer:[
        { option: 'Delhi', correct:true},
        { option: 'Mumbai', correct:false},
        { option: 'Bangluru', correct:false},

      ]
    },
    {
      question:'Who Is Primeminister Of India',
      answer:[
        { option: 'Amit Saha', correct:false},
        { option: 'Narendra Modi', correct:true},
        { option: 'Rahul Gandhi', correct:false},

      ]
    },
    {
      question:'Who Is captain Of Indian Cricket Team ',
      answer:[
        { option: 'Rohit Sharma', correct:false},
        { option: 'Virat Kohli', correct:true},
        { option: 'KL Rahul', correct:false},

      ]
    },
    {
      question:'what Is National Animal Of India',
      answer:[
        { option: 'Lion', correct:false},
        { option: 'Leopard', correct:false},
        { option: 'Tiger', correct:true},

      ]
    },
    {
      question:'What Is National Bird Of India',
      answer:[
        { option: 'Peacock', correct:true},
        { option: 'Dove', correct:false},
        { option: 'Spearrow', correct:false},

      ]
    },
    {
      question:'What Is National Fruit Of India',
      answer:[
        { option: 'Orange', correct:false},
        { option: 'Mango', correct:true},
        { option: 'Apple', correct:false},

      ]
    },
  ] 
  constructor() { }

  getQuizzes(){
    return this.quizzes;
  }
}