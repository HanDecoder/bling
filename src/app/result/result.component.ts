import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter/converter.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  constructor(public csrv: ConverterService) { }
}
