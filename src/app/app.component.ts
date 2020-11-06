import { Component, Input, OnInit } from '@angular/core';
import { ConverterService } from './converter/converter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private csrv: ConverterService) {
    
  }
  ngOnInit() {
  }
  
}
