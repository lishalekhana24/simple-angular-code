import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-delete',
  templateUrl: './people-delete.component.html'
})
export class PeopleDeleteComponent {
  constructor(private route: ActivatedRoute, private peopleService: PeopleService, private router: Router) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.peopleService.deletePerson(id);
    this.router.navigate(['/people']);
  }
}
