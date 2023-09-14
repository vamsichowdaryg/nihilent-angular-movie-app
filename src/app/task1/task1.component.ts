import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
// clr="orange"
// colorList = ['red','green','blue','orange']
// colour(event:any){
// console.log(event.target.value)
// this.clr=event.target.value;
// }
// addcolor(event:any){
//   console.log(event.target.value)
//   this.colorList.push(this.clr)
// }
export class Task1Component {
  @Input() src = ""
  @Input() moviename = ""
  @Input() rating = ""
  @Input() content = ""
  @Input() idx = 0;
  @Output() rmmovieidx = new EventEmitter<number>();

  delmovie() {
    console.log("del", this.idx)
    this.rmmovieidx.emit(this.idx)
  }
}
