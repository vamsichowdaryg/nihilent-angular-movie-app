import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
@Input() src=""
@Input() moviename=""
@Input() rating=""
@Input() content=""
}
