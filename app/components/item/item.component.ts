import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Todo from '../../models/Todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() todoItem! : Todo;
  @Output() toggleEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggle(event:Todo){
    this.toggleEvent.emit(event)    
  }
  update(event : Todo){
    this.updateEvent.emit(event);
  }
  delete(event:Todo){
    this.deleteEvent.emit(event);
  }

}
