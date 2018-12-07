import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeMB'
})
export class PipeMBPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return "MB "+ value;
  }

}
