import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html'
})
export class PeopleEditComponent {
  person: any = {};

  constructor(private route: ActivatedRoute, private peopleService: PeopleService, private router: Router) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.person = this.peopleService.getPerson(id);
  }

  saveChanges() {
    this.peopleService.updatePerson(this.person.id, this.person.name, this.person.age);
    this.router.navigate(['/people']);
  }
}
