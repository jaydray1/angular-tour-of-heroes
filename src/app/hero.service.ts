import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

getHeroes(): Observable<Hero[]> {
  // this line here returns an Observable, and that observable EMITS a SINGLE
  // VALUE, the array of heroes from the body of the HTTP response
  this.messageService.add('HeroService: fetched heroes');
  return of (HEROES);
}
// Angular injects the singleton MessageService which is of type messageService
// this is a typical "service-in-service" scenario..inject messageservice into 
// heroservice which is injected into heroescomponent
  constructor(private messageService: MessageService ) { }

}
