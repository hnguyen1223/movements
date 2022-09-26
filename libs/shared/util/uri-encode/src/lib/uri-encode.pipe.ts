import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uriEncode'
})
export class UriEncodePipe implements PipeTransform {

  transform(value: string | number | boolean): string {
    return encodeURIComponent(value);
  }

}
