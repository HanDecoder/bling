import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'app-binary-to-decimal',
  templateUrl: './binary-to-decimal.component.html',
  styleUrls: ['./binary-to-decimal.component.css']
})
export class BinaryToDecimalComponent implements OnInit {

  constructor(private csrv: ConverterService) { }

  ngOnInit(): void {
  }
  onClick(num: number) {
    this.csrv.num = num.toString().trim();
    let inputIsValid = true;
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
    this.csrv.onProcess("binary", "decimal", inputIsValid);
  }

}
