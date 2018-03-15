import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';

getHeroes(): Observable<Hero[]> {
  // this line here returns an Observable, and that observable EMITS a SINGLE
  // VALUE, the array of heroes from the body of the HTTP response
  return this.http.get<Hero[]>(this.heroesUrl);
}
getHero(id: number): Observable<Hero> {
  this.messageService.add(`HeroService: fetched hero id=${id}`);
  return of (HEROES.find(hero => hero.id === id));
}
// Angular injects the singleton MessageService which is of type messageService
// this is a typical "service-in-service" scenario..inject messageservice into 
// heroservice which is injected into heroescomponent
  constructor(private http: HttpClient,
              private messageService: MessageService) {}
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
 

}
