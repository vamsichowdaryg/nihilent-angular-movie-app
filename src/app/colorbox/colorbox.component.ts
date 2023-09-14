import { Component } from '@angular/core';

@Component({
  selector: 'app-colorbox',
  templateUrl: './colorbox.component.html',
  styleUrls: ['./colorbox.component.css']
})
export class ColorboxComponent {
clr="orange"
colorList = ['red','green','blue','orange']
colour(event:any){
console.log(event.target.value)
this.clr=event.target.value;
}
addcolor(event:any){
  console.log(event.target.value)
  this.colorList.push(this.clr)
}
removecolor(index:number){
  console.log("del")
  this.colorList.splice( index,1)
}

}
