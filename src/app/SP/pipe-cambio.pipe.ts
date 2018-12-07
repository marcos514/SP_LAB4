import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCambio'
})
export class PipeCambioPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return "U$S "+ dosDecimales(value/27.5) ;
  }

}
function dosDecimales(n) {
  let t=n.toString();
  let regex=/(\d*.\d{0,2})/;
  return t.match(regex)[0];
}