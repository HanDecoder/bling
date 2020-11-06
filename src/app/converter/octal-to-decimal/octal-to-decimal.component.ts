import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'app-octal-to-decimal',
  templateUrl: './octal-to-decimal.component.html',
  styleUrls: ['./octal-to-decimal.component.css']
})
export class OctalToDecimalComponent implements OnInit {

  constructor(private csrv: ConverterService) { }

  ngOnInit(): void {
  }
  onClick(num: number) {
    let inputIsValid: boolean = true;
    this.csrv.num = num.toString().trim();
    for(let i = 0; i != this.csrv.num.length; ++i) {
      if((this.csrv.num[i] !== '.')) 
      {
        if(!(+(this.csrv.num))) {
          inputIsValid = false;
          break;
        } else {
          if(((+this.csrv.num[i] > 7) || (+this.csrv.num[i] < 0))) {
              console.log(+this.csrv.num[i])
              inputIsValid = false;
              break;
            
          }
        }
      }
    }
    this.csrv.onProcess("octal", "decimal", inputIsValid);
  }
}
