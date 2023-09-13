import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
count = 0
 Increment() {
  console.log("like is clicked 👍");
  this.count++;
 }
 count1 = 0
 Decrement() {
  console.log("like is clicked 👍");
  this.count1++;
 }
 get awesome(){
  return this.count-this.count1>=10;
 }
}
