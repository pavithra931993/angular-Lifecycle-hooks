import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "<span>Example</span>";

  fruits = ["Mengo", "Orange", "Banana"];

  constructor() {}

  addFruit(item) {
    this.fruits.push(item);
  }
}
