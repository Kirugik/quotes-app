import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../../quotes'; 

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})

export class CreateQuoteComponent implements OnInit {
  newQuote = new Quotes(0,'','',0,0,'', new Date());

  @Output() addQuote= new EventEmitter<Quotes>();

    submitQuote(){
      console.log(this.newQuote)
      this.addQuote.emit(this.newQuote);
      
    }

  constructor() { }

  ngOnInit(): void {
  }

} 
