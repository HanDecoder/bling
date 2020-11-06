import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'app-decimal-to-hex',
  templateUrl: './decimal-to-hex.component.html',
  styleUrls: ['./decimal-to-hex.component.css']
})
export class DecimalToHexComponent implements OnInit {

  constructor(private csrv: ConverterService) { }

  ngOnInit(): void {
  }
  onClick(num: number) {
    let inputIsValid: boolean = true;
    this.csrv.num = num.toString().trim();
    if(!(+this.csrv.num)) {
      for(let i = 0; i != this.csrv.num.length; ++i) {
        if(this.csrv.num[i] !== '.') {
          if(+this.csrv.num[i] >= 0 && +this.csrv.num[i] <= 9) {
            inputIsValid = false;
            break;
          }
        }
      }
    } else {
      inputIsValid = true;
    }
    
    this.csrv.onProcess("decimal", "hex", inputIsValid);
  }

}
