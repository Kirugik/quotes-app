import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes/quotes.component';
import { CreateQuoteComponent } from './create-quote/create-quote/create-quote.component';
import { FormsModule } from '@angular/forms';
import { HighestUpvotesDirective } from './highest-upvotes.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    CreateQuoteComponent,
    HighestUpvotesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 