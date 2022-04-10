import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any): number {
    //current date
    let currentDate = new Date();

    //difference in current time and time the quote was posted (in miliseconds)
    let dateDifference = currentDate.getTime() - value.getTime();
    dateDifference=dateDifference /(24*60*60*1000);
    
    //Rounding up a number to the next largest integer
    return Math.ceil(dateDifference)-1;
  }

}
