import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  people = [];

  constructor(private peopleService: PeopleService, private router: Router) {
    this.people = this.peopleService.getPeople();
  }

  editPerson(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: number) {
    this.peopleService.deletePerson(id);
    this.people = this.peopleService.getPeople();
  }
}
