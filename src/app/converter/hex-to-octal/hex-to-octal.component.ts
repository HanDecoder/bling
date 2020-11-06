import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'app-hex-to-octal',
  templateUrl: './hex-to-octal.component.html',
  styleUrls: ['./hex-to-octal.component.css']
})
export class HexToOctalComponent implements OnInit {

  constructor(private csrv: ConverterService) { }

  ngOnInit(): void {
  }

  onClick(num: number) {
    let inputIsValid: boolean = true;
    this.csrv.num = num.toString().trim();
    
    
    this.csrv.onProcess("hex", "octal", inputIsValid);
  }
}
