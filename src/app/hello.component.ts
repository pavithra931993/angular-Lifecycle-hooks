import { Component, Input, OnInit, OnDestroy, OnChanges } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Angular Toggle {{ name }}!</h1>
  `
})
export class HelloComponent implements OnInit, OnDestroy, OnChanges {
  @Input() name: string;
  clear = null;
  constructor() {}

  ngOnChanges() {
    console.log("On changes");
  }

  ngOnInit() {
    console.log("component initialized");
    this.clear = setInterval(() => {
      console.log(new Date());
    }, 1000);
  }
  ngOnDestroy() {
    console.log("component destroy");
    if (this.clear) {
      clearInterval(this.clear);
    }
  }
}
