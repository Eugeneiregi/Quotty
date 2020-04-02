

import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
   new Quote ('Tony Bracks',
   'If you judge people, you have no time to love them.',
    'Eugene', 'Spread love everywhere you go. Let no one ever come to you without leaving happier.', 0, 0, new Date(2020, 11, 12)),
    new Quote ('Plato vans'
    , 'The greatest wealth is to live content with little.',
     'Iregi',
      'There are two things a person should never be angry at, what they can help, and what they cannot.', 0, 0, new Date(2020, 11, 12)),
    new Quote ('Steven Furtfirk Jr.',
     'Love is the only force capable of transforming an enemy into friend. ',
      'Eugo the Man', 'Only in the darkness can you see the stars.', 0, 0, new Date(2020, 11, 12)),
  ];

  bestQuote() {
    const upVoteArr: number[] = [];
    for (const i of this.quotes) {
      upVoteArr.push(i.upvote);
    }
    const maxVote = Math.max(...upVoteArr);
    const highestVotedQuote = this.quotes.find(quote => quote.upvote === maxVote);
    return highestVotedQuote;
  }

  addNewQuote(quote) {
 const quoteLength = this.quotes.length;
 quote.publishDate = new Date(quote.publishDate);
 this.quotes.push(quote);
  }

  deleteQuote(isRead, index) {
  if (isRead) {
  const toDelete = confirm(`Are You sure you want to delete quotes from ${this.quotes[index].author}?`);

  if (toDelete) {
    this.quotes.splice(index, 1);
  }

  }
  }

  toggleDetails(index) {
    this.quotes[index].showMore = !this.quotes[index].showMore;
  }

  constructor() { }

  ngOnInit() {
  }

}


