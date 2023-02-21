import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private sanitizer: DomSanitizer) { }

  _arrayBufferToBase64(buffer: any){
    let binary = ''
    const bytes = new Uint8Array(buffer)
    const len = bytes.byteLength
    for(let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i])
    }

    return window.btoa(binary)
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url)
  }
}
