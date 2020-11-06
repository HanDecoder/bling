import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'app-binary-to-octal',
  templateUrl: './binary-to-octal.component.html',
  styleUrls: ['./binary-to-octal.component.css']
})
export class BinaryToOctalComponent implements OnInit {

  constructor(private csrv: ConverterService) { }

  ngOnInit(): void {
  }
  onClick(num: number) {

    this.csrv.num = num.toString().trim();

    let inputIsValid: boolean = false;
    let new_string = this.csrv.num.split('.').join("");
    if(new_string.length % 3 === 0){
      for(let i = 0; i != this.csrv.num.length; ++i) {
        if((this.csrv.num[i] != '0')) 
        {
          if((this.csrv.num[i] != '1')) {
            if(this.csrv.num[i] != '.') {
              inputIsValid = false;
              break;
            }
          }
        }
        else
          inputIsValid = true;
      }
    } else {
      inputIsValid = false;
    }
    this.csrv.onProcess("binary", "octal", inputIsValid);
  }

}
