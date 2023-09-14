import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input() clr: string = "";
  @Input() idx: number = 0;
  @Output() rmclridx = new EventEmitter<number>();

  delbox() {
    console.log("del", this.idx)
    this.rmclridx.emit(this.idx)
  }


}
