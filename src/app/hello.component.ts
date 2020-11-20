import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  SimpleChanges
} from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "hello",
  template: `
    <p [innerHtml]="name"></p>
    <h1>Fruit List</h1>

    <button (click)="update()">Update Data</button>

    <h1>Fruit List</h1>

    <ul>
      <li *ngFor="let item of data">{{ item }}</li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent implements OnInit, OnDestroy, OnChanges {
  @Input() name: string;
  // @Input() data: Observable<any>;
  fruits: string[] = [];
  @Input() data: string[];
  constructor(
    private cd: ChangeDetectorRef // private cd: ChangeDetectorRef
  ) {}
  item: string[] = [];
  ngOnChanges(changes: SimpleChanges) {
    console.log("On changes : ", changes);
  }

  ngOnInit() {
    console.log("component initialized");
    // this.data.subscribe(item => {
    //   console.log(typeof item);
    //   this.fruitList = [...this.fruitList, ...item];
    //   // this.cd.markForCheck();
    // });
  }
  ngOnDestroy() {
    console.log("component destroy");
  }

  update() {
    console.log(this.fruits);
    this.cd.detectChanges();
  }
}
