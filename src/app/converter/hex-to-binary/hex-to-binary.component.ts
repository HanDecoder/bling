import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'app-hex-to-binary',
  templateUrl: './hex-to-binary.component.html',
  styleUrls: ['./hex-to-binary.component.css']
})
export class HexToBinaryComponent implements OnInit {

  constructor(private csrv: ConverterService) { }

  ngOnInit(): void {
  }

  onClick(num: string) {
    let inputIsValid: boolean = true;
    this.csrv.num = num.trim();
    this.csrv.onProcess("hex", "binary", inputIsValid);
  }
}
