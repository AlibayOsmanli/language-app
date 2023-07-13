import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  constructor(private db: AngularFireDatabase) {}

  addWord(word: string, translation: string): Promise<void> {
    if (word.length !== 0 && translation.length !== 0) {
      const newWord = { word, translation };
      return new Promise<void>((resolve, reject) => {
        this.db.list('words')
          .push(newWord)
          .then(() => {
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    }
    return Promise.reject('Invalid word or translation');
  }
  

  getWords(): Observable<any[]> {
    return this.db.list('words').valueChanges();
  }

  clearWords(): Promise<void> {
    return this.db.list('words').remove();
  }

  updateWord(word: any): Promise<void> {
    const index = word.$key;
    if (index !== undefined) {
      return this.db.object(`words/${index}`).update(word);
    }
    return Promise.reject('Invalid word');
  }

  deleteWord(word: any): Promise<void> {
    const index = word.$key;
    if (index !== undefined) {
      return this.db.object(`words/${index}`).remove();
    }
    return Promise.reject('Invalid word');
  }
}