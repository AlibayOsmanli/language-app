import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WordService {
  private words: { word: string; translation: string }[] = [];

  constructor() {
    const savedWords = localStorage.getItem('words');
    if (savedWords) {
      this.words = JSON.parse(savedWords);
    }
  }

  addWord(word: string, translation: string) : boolean {
    if(word.length !== 0 && translation.length !== 0) {
      for(let i = 0; i < this.words.length; i++) {
        if(this.words[i].word === word && this.words[i].translation === translation) {
          return false;
        }
      }
      this.words.push({ word, translation });
      localStorage.setItem('words', JSON.stringify(this.words));
      return true;
    }
    return false;
  }

  getWords() {
    return this.words;
  }

  clearWords() {
    this.words = [];
    localStorage.removeItem('words');
  }

  updateWord(word: any) {
    const index = this.words.findIndex(w => w === word);
    if (index !== -1) {
      this.words[index] = word;
    }
    localStorage.setItem('words', JSON.stringify(this.words));
  }

  deleteWord(word: { word: string; translation: string }) {
    const index = this.words.findIndex(w => w.word === word.word && w.translation === word.translation);
    if (index !== -1) {
      this.words.splice(index, 1);
      localStorage.setItem('words', JSON.stringify(this.words));
    }
  }
}
