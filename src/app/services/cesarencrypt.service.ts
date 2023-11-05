import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CesarEncryptService {


  constructor() { }


  transformText(text: string, key: number, mode: boolean) {
    key = (key !== 26 || key % 26 !== 0) ? key % 26 : 8;
    return text.split('').map(char => this.transformChar(char, key, mode)).join('');
  }


  private transformChar(char: string, key: number, mode: boolean): string {
    const ascii = char.charCodeAt(0);
    if (/[a-zA-Z]/.test(char)) {
      let newAscii = ascii + (mode ? key : -key);
      newAscii = (mode) ? this.encryptor(char, newAscii) : this.decryptor(char, newAscii);
      return String.fromCharCode(newAscii);
    }
    return char;
  }
  private encryptor(char: string, newAscii: number) {
    if ((/[a-z]/.test(char) && newAscii > 122) || (/[A-Z]/.test(char) && newAscii > 90))
      newAscii -= 26;
    return newAscii;
  }
  private decryptor(char: string, newAscii: number) {
    if ((/[a-z]/.test(char) && newAscii < 97) || (/[A-Z]/.test(char) && newAscii < 65))
      newAscii += 26;
    return newAscii;
  }

/*   private adjustAscii(char: string, newAscii: number) {
    if ((/[a-z]/.test(char) && newAscii > 122) || (/[A-Z]/.test(char) && newAscii > 90)) {
      newAscii -= 26;
    }
    else if ((/[a-z]/.test(char) && newAscii < 97) || (/[A-Z]/.test(char) && newAscii < 65)) {
      newAscii += 26;
    }
    return newAscii;
  } */

}