import { Component, OnInit } from '@angular/core';
import { employees } from 'src/datamodel/employees';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  empvariable : employees = new employees();
  table: employees;

  constructor() { }

  ngOnInit(): void { 
     this.table = this.empvariable;

  }

}
