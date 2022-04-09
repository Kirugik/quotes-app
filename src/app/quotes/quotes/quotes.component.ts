import { Component, OnInit } from '@angular/core';
import { Quotes } from '../../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {

  upvotes = 0;
  downvotes = 0;
  isComplete= true;

  quotes: Quotes[]=[

    new Quotes(0,'Socrates','“The unexamined life is not worth living”',0,0),
    new Quotes(1,'Mark Twain','“The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.”',0,0),
    new Quotes(2,'Mahatma Gandhi','“Live as if you were to die tomorrow. Learn as if you were to live forever.”',0,0),
    new Quotes(3,'Steve Jobs','“The ones who are crazy enough to think that they can change the world, are the ones who do.”',0,0), 
  ]

  getCurrentId(){
    return this.quotes.length +1
  }
  
  newQuote(quote:any) {
    quote.id = this.getCurrentId();
    quote.author= quote.author;
    // quote.title=quote.title;
    quote.quote=quote.quote;
    // quote.submitedBy=quote.submitedBy;
    this.quotes.unshift(quote)
  }
  upVote(quote:any){
    quote.upvote= quote.upvote+1;
    console.log('quote.upvote')
  }
  downVote(quote:any){
    quote.downvote = quote.downvote+1;
  }
  quoteDelete(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
} 