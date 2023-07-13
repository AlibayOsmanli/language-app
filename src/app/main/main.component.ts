import { Component } from '@angular/core';
import { WordService } from '../word-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls : ['./main.component.css'],
})

export class MainComponent {
  word: string = '';
  translation: string = '';

  constructor(private wordService: WordService) {}

  addWord() {
    if(this.wordService.addWord(this.word, this.translation)){
      this.word = '';
      this.translation = '';
    } else{
      if(this.word.length === 0 || this.translation.length === 0) {
        alert('Please enter a word and a translation');
      } else {
        alert('This word already exists');
      }
    }
    
  }
}
