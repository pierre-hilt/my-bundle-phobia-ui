import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {
  private units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

  /**
   * Transform bits into human readable size.
   * Change unit to a highier one if divisible by 1024.
   * @param bytes size in bits to convert
   * @param precision number of digits, by default 1
   */
  transform(bytes: number = 0, precision: number = 1): any {
    if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) return '?';

    let unit = 0;

    while (bytes >= 1024) {
      bytes /= 1024;
      unit++;
    }

    return bytes.toFixed(+precision) + ' ' + this.units[unit];
  }
}
