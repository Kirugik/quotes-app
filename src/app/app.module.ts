import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes/quotes.component';
import { CreateQuoteComponent } from './create-quote/create-quote/create-quote.component';
import { FormsModule } from '@angular/forms';

//others
// import { HttpClientModule } from '@angular/common/http';
// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client'; 

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    CreateQuoteComponent
  ],
  imports: [
    // NgProgressModule.forRoot(),
    // NgProgressHttpClientModule,
    // HttpClientModule,

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }