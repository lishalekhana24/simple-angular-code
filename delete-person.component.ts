import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent {
  person: any;

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.person = this.peopleService.getPerson(id);
  }

  confirmDelete() {
    this.peopleService.deletePerson(this.person.id);
    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
