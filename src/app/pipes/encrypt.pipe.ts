import { Pipe, PipeTransform } from '@angular/core';
import { CesarEncryptService } from '../services/cesarencrypt.service';

@Pipe({
  name: 'encrypt'
})
export class EncryptPipe implements PipeTransform {

  count:number=0;
  constructor(private _enc:CesarEncryptService) {}

  transform(text:string, key:number, mode:boolean): string {
    console.log(++this.count);
    return this._enc.transformText(text, key, mode);
  }

}
