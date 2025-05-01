import { Component } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent {
  people = [];

  constructor(private peopleService: PeopleService) {
    this.people = this.peopleService.getPeople();
  }
}
