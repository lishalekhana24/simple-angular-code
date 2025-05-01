import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class PeopleService {
private people = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
];

getPeople() {
    return this.people;
}

getPerson(id: number) {
    return this.people.find(p => p.id === id);
}

updatePerson(id: number, name: string, age: number) {
    const person = this.people.find(p => p.id === id);
    if (person) {
    person.name = name;
    person.age = age;
    }
}

deletePerson(id: number) {
    this.people = this.people.filter(p => p.id !== id);
}
}
