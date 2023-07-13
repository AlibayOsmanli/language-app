import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { WordService } from '../word-service.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css'],
})
export class TrainComponent {
  //This is a part of solution from internet; Also HTML is changed
  @ViewChildren('card') cardElements!: QueryList<ElementRef>;

  words: { word: string; translation: string; flipped: boolean }[] = [];

  constructor(private wordService: WordService, private elementRef: ElementRef) {
    this.words = this.wordService.getWords().map((word) => ({
      ...word,
      flipped: false,
    }));

  }

  clearAll() {
    this.wordService.clearWords();
    this.words = [];
  }

  // This solution is from internet to make the card flip when only the card is clicked
  flipCard(event: MouseEvent, word: any) {
    const clickedElement = event.target as HTMLElement;

    for (const cardElement of this.cardElements.toArray()) {
      if (cardElement.nativeElement.contains(clickedElement)) {
        word.flipped = !word.flipped;
        break;
      }
    }
  }

  /*flipCard(word: any) {
    word.flipped = !word.flipped;
  }*/
  
  
  editWord(word: any) {
    const newWord = prompt('Enter the new word:', word.word);
    const newTranslation = prompt('Enter the new translation:', word.translation);
    if (newWord !== null && newWord.trim() !== '' && newTranslation !== null && newTranslation.trim() !== '') {
      word.word = newWord.trim();
      word.translation = newTranslation.trim();
      this.wordService.updateWord(word);
    }
  }

  deleteWord(word: any) {
    if (confirm('Are you sure you want to delete this word?')) {
      this.wordService.deleteWord(word);
      this.words = this.words.filter((w) => w !== word);
    }
  }
}
