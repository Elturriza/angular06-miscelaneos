import { Component, OnInit, OnChanges, DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <br>

  <app-css></app-css>
  <br>

  <app-clases></app-clases>
  <br>

  <p [appResaltado]="'red'">
    Hola mundo
  </p>
  <br>
  
  <app-ng-switch></app-ng-switch>

  
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("constructor")
  }

  ngOnInit(): void {
    console.log('ngOninit')
  }
  ngOnChanges(){
    console.log("ngOnChanges")
  }
  ngDoCheck(){
    console.log("ngDoCheck")
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked")
  }
  ngOnDestroy(){
    console.log("ngOnDestroy")
  }
}
