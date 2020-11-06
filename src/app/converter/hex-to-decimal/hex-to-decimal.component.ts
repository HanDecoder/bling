import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'app-hex-to-decimal',
  templateUrl: './hex-to-decimal.component.html',
  styleUrls: ['./hex-to-decimal.component.css']
})
export class HexToDecimalComponent implements OnInit {

  constructor(private csrv: ConverterService) { }

  ngOnInit(): void {
  }

  onClick(num: number) {
    let inputIsValid: boolean = true;
    this.csrv.num = num.toString().trim();
    
    
    this.csrv.onProcess("hex", "decimal", inputIsValid);
  }
}
