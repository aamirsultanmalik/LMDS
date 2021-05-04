import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-term-conditions',
  templateUrl: './term-conditions.component.html',
  styleUrls: ['./term-conditions.component.scss']
})
export class TermConditionsComponent implements OnInit {

  constructor() { }

  pdfSource:any;
  ngOnInit(): void {
    this.pdfSource="/assets/data/agreement.pdf"
  }

}
