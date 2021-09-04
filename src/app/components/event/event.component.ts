import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  events: any;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getEvents().subscribe((events: any) => {
      this.events = JSON.parse(events.trim(''));
      console.log(this.events);
    });
  }

}
