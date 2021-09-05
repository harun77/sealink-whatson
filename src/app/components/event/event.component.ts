import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  expandedEventIndex = 0;

  PLACEHOLDER_LINK = 'https://www.sealinktravelgroup.com.au/';

  @Input('events') events: any;

  @Output('open') open = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  expand(index: number) {
    this.expandedEventIndex = index;
    this.open.emit(index);
  }

  learnMore(): void {
    window.open(this.PLACEHOLDER_LINK, '_blank');
  }

}
