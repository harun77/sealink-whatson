import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'whats-on',
  templateUrl: './whats-on.component.html',
  styleUrls: ['./whats-on.component.scss']
})
export class WhatsOnComponent implements OnInit {

  events: any;

  selectedEvent: any;

  constructor(private eventService: EventService) { }

  ngOnInit(): void { 
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getEvents().subscribe((events: any) => {
      this.events = JSON.parse(events.trim(''));
      this.selectedEvent = this.events ? this.events[0] : undefined;
    });
  }

}
