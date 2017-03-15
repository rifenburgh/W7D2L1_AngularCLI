//Import Pipe and PipeTransform (interface)
import { Pipe, PipeTransform } from '@angular/core';

//Decorator to dress up CapitalizePipe class that will be exported
@Pipe({
  name: 'capitalize'
})

//The Exported class implements the PipeTransform INTERFACE
export class CapitalizePipe implements PipeTransform {
  //Steps to capitalize the string
  transform(input: string): any {
  //Error checking to confirm there is an INPUT
  if (!input) {
    return input;
  }
    input = input.toLowerCase();
    return input.substring(0, 1).toUpperCase() + input.substring(1);
  }
}
