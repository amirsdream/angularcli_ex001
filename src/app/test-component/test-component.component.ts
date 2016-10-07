import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  name: string;
  ok: string;
  hello: string;

  constructor() { 
    this.name='Marie';    
  }

  ngOnInit() {
  }

  printOk(){
    this.ok = 'Ok!';
  }

  printHello(){
    this.hello= 'Hello User';
  }
}
