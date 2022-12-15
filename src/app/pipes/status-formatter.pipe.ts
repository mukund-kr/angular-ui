import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFormatter'
})
export class StatusFormatterPipe implements PipeTransform {

  transform(status:boolean): string {
    if(status!=null&& status!=undefined){
      return status?"Active":"Inactive";
    }
    return "";
  }

}
