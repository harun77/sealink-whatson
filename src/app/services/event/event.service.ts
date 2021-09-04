import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  EVENT_SOURCE = '../../assets/data/events.json';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
    return this.http.get(this.EVENT_SOURCE, { responseType: 'text' });
  }

}
